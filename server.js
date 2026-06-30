import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/analyze', async (req, res) => {
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'Server misconfigured: missing API key.' });
  }
  try {
    const { imageB64, imageMime } = req.body;
    if (!imageB64 || !imageMime) {
      return res.status(400).json({ error: 'Missing image data.' });
    }

    const allowed = ['image/jpeg','image/jpg','image/png','image/gif','image/webp','application/pdf'];
    const mime = allowed.includes(imageMime) ? imageMime : 'image/png';
    const isPdf = mime === 'application/pdf';

    const contentParts = [];
    if (isPdf) {
      contentParts.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: imageB64 } });
    } else {
      contentParts.push({ type: 'image', source: { type: 'base64', media_type: mime, data: imageB64 } });
    }
    contentParts.push({ type: 'text', text: 'Extract all events from this. Today is ' + new Date().toISOString().split('T')[0] + '.' });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1200,
        system: `Extract event details from images/documents. Return ONLY raw JSON — no markdown fences, no explanation.

Schema: {"events":[{"title":"string","date":"YYYY-MM-DD","startTime":"HH:MM","endTime":"HH:MM","location":"string","description":"string","timezone":"string"}]}

Rules:
- Unknown fields: use ""
- date: YYYY-MM-DD; use current year if not shown
- Times: 24h format (7:30 pm → 19:30)
- No end time: start + 1h. No time at all: 09:00–10:00
- timezone: guess from context or use America/Denver
- Extract every distinct event/date occurrence
- Nothing found: {"events":[]}
- Return ONLY the JSON object. Nothing else.`,
        messages: [{ role: 'user', content: contentParts }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({ error: err.error?.message || 'Anthropic API error' });
    }

    const data = await response.json();
    const raw = data.content.filter(c => c.type === 'text').map(c => c.text).join('').trim();
    const clean = raw.replace(/^```[a-z]*\n?/, '').replace(/\n?```$/, '').trim();
    const parsed = JSON.parse(clean);
    res.json(parsed);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Eventify running on port ${PORT}`));
