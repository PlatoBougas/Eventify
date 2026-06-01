# Eventify

Upload any event image, flyer, or screenshot — AI extracts the details and adds it to Google Calendar instantly.

## Deploy to Render (free, 5 min)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Set these values:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variable:
   - `ANTHROPIC_API_KEY` → your key from console.anthropic.com
6. Click Deploy — done. Share the URL.

## Run locally

```bash
npm install
ANTHROPIC_API_KEY=sk-ant-... npm start
```

Then open http://localhost:3000
