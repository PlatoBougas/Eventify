<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Eventify — Add any event to your calendar by taking a picture.</title>

<!-- Primary meta -->
<meta name="description" content="Upload any event image, flyer, or screenshot and AI instantly extracts the details and adds it to your Google Calendar. No typing. One click."/>
<meta name="theme-color" content="#2563eb"/>

<!-- Open Graph (iMessage, Facebook, Slack, etc.) -->
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://eventify.app/"/>
<meta property="og:title" content="Eventify — Add any event to your calendar by taking a picture."/>
<meta property="og:description" content="Upload any event image, flyer, or screenshot and AI instantly extracts the details and adds it to your Google Calendar. No typing. One click."/>
<meta property="og:image" content="/og-image.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:site_name" content="Eventify"/>

<!-- Twitter / iMessage fallback -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Eventify — Add any event to your calendar by taking a picture."/>
<meta name="twitter:description" content="Upload any event image, flyer, or screenshot and AI instantly extracts the details and adds it to your Google Calendar. No typing. One click."/>
<meta name="twitter:image" content="/og-image.png"/>

<!-- Apple / mobile -->
<meta name="apple-mobile-web-app-title" content="Eventify"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<link rel="apple-touch-icon" href="/og-image.png"/>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#f0f2f5;
  --surface:#ffffff;
  --border:#e2e5ea;
  --border2:#cbd0d8;
  --text:#0f1117;
  --muted:#6b7280;
  --hint:#9ca3af;
  --accent:#2563eb;
  --accent-h:#1d4ed8;
  --accent-bg:#eff6ff;
  --accent-b:#bfdbfe;
  --green:#16a34a;
  --green-bg:#f0fdf4;
  --green-b:#bbf7d0;
  --red:#dc2626;
  --red-bg:#fef2f2;
  --radius:14px;
  --radius-sm:9px;
  --shadow:0 1px 2px rgba(0,0,0,.04),0 4px 12px rgba(0,0,0,.06);
}
body{font-family:'Figtree',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;-webkit-font-smoothing:antialiased;}
.wrap{max-width:560px;margin:0 auto;padding:32px 16px 64px}

/* HEADER */
.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:36px}
.brand{display:flex;align-items:center;gap:9px}
.brand-mark{width:34px;height:34px;background:var(--accent);border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.brand-mark svg{width:18px;height:18px;stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.brand-name{font-size:18px;font-weight:600;letter-spacing:-.4px}
.brand-name em{font-style:normal;color:var(--accent)}
.header-tag{font-size:11px;font-weight:500;color:var(--muted);letter-spacing:.04em;background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:4px 10px}

/* STEPS */
.steps{display:flex;align-items:center;margin-bottom:28px;background:var(--surface);border:1px solid var(--border);border-radius:40px;padding:5px 8px}
.step{display:flex;align-items:center;gap:6px;flex:1;justify-content:center;padding:5px 8px;border-radius:30px;transition:background .2s}
.step.active{background:var(--accent-bg)}
.step-num{width:20px;height:20px;border-radius:50%;font-size:10px;font-weight:600;display:flex;align-items:center;justify-content:center;border:1.5px solid var(--border);color:var(--muted);flex-shrink:0;transition:all .2s}
.step.active .step-num{background:var(--accent);border-color:var(--accent);color:#fff}
.step.done .step-num{background:var(--green);border-color:var(--green);color:#fff}
.step-label{font-size:11px;font-weight:500;color:var(--muted);white-space:nowrap}
.step.active .step-label{color:var(--accent);font-weight:600}
.step.done .step-label{color:var(--green)}
.step-sep{width:1px;height:14px;background:var(--border);flex-shrink:0}

/* CARD */
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden}

/* DROPZONE */
.dropzone{border:2px dashed var(--border2);border-radius:var(--radius);padding:44px 24px;text-align:center;cursor:pointer;transition:all .2s;background:var(--surface)}
.dropzone:hover,.dropzone.over{border-color:var(--accent);background:var(--accent-bg)}
.dz-icon-ring{width:56px;height:56px;background:var(--accent-bg);border:1.5px solid var(--accent-b);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;transition:transform .2s}
.dropzone:hover .dz-icon-ring{transform:scale(1.06)}
.dz-icon-ring svg{width:26px;height:26px;stroke:var(--accent);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.dz-title{font-size:16px;font-weight:600;margin-bottom:6px}
.dz-sub{font-size:13px;color:var(--muted);line-height:1.55;max-width:320px;margin:0 auto}
.dz-actions{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:20px}
.dz-btn{display:inline-flex;align-items:center;gap:6px;font-family:'Figtree',sans-serif;font-size:12px;font-weight:500;padding:8px 15px;border-radius:8px;cursor:pointer;border:1.5px solid var(--border2);background:var(--surface);color:var(--muted);transition:all .15s;white-space:nowrap}
.dz-btn:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-bg)}
.dz-btn.pri{background:var(--accent);border-color:var(--accent);color:#fff}
.dz-btn.pri:hover{background:var(--accent-h);color:#fff}
.dz-btn svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.paste-hint{display:inline-flex;align-items:center;gap:5px;margin-top:16px;font-size:11px;color:var(--hint)}
kbd{background:var(--bg);border:1px solid var(--border2);border-radius:4px;padding:1px 5px;font-size:10px;font-family:monospace;color:var(--muted)}

/* THUMB ROW */
.thumb-row{display:flex;align-items:center;gap:14px;padding:16px 20px;border-bottom:1px solid var(--border)}
.thumb{width:52px;height:52px;border-radius:9px;object-fit:cover;border:1px solid var(--border);flex-shrink:0}
.thumb-ph{width:52px;height:52px;border-radius:9px;border:1px solid var(--border);background:var(--bg);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.thumb-ph svg{width:22px;height:22px;stroke:var(--muted);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.thumb-info{flex:1;min-width:0}
.thumb-name{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.thumb-size{font-size:11px;color:var(--muted);margin-top:2px}

/* LOADING */
.loading-body{padding:36px 24px;text-align:center}
.spinner{width:40px;height:40px;border:3px solid var(--accent-b);border-top-color:var(--accent);border-radius:50%;animation:spin .75s linear infinite;margin:0 auto 18px}
.spinner.sm{width:14px;height:14px;border-width:2px;margin:0}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-label{font-size:14px;font-weight:500;margin-bottom:4px}
.loading-sub{font-size:12px;color:var(--muted)}

/* ERROR */
.err-wrap{padding:20px}
.err-box{background:var(--red-bg);border:1px solid #fca5a5;border-radius:var(--radius-sm);padding:14px 16px;display:flex;gap:10px;align-items:flex-start}
.err-box svg{width:16px;height:16px;stroke:var(--red);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0;margin-top:1px}
.err-box p{font-size:12px;color:var(--red);line-height:1.5}

/* PICKER */
.section-head{padding:18px 20px 12px;border-bottom:1px solid var(--border)}
.section-head h2{font-size:15px;font-weight:600;margin-bottom:2px}
.section-head p{font-size:12px;color:var(--muted)}
.picker-list{padding:12px}
.pick-item{display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:var(--radius-sm);cursor:pointer;border:1.5px solid transparent;transition:all .15s;margin-bottom:6px}
.pick-item:last-child{margin-bottom:0}
.pick-item:hover{background:var(--bg)}
.pick-item.sel{background:var(--accent-bg);border-color:var(--accent-b)}
.pick-cb{width:20px;height:20px;border-radius:6px;border:1.5px solid var(--border2);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .15s}
.pick-item.sel .pick-cb{background:var(--accent);border-color:var(--accent)}
.pick-cb svg{width:11px;height:11px;stroke:#fff;fill:none;stroke-width:2.8;stroke-linecap:round;stroke-linejoin:round;opacity:0;transition:opacity .15s}
.pick-item.sel .pick-cb svg{opacity:1}
.pick-info{flex:1;min-width:0}
.pick-name{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pick-meta{font-size:11px;color:var(--muted);margin-top:2px}

/* FORM */
.confirm-head{padding:18px 20px 0;margin-bottom:4px}
.confirm-head h2{font-size:15px;font-weight:600;margin-bottom:2px}
.confirm-head p{font-size:12px;color:var(--muted)}
.ev-block{padding:16px 20px;border-top:1px solid var(--border)}
.ev-block-label{font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--hint);margin-bottom:12px}
.field{margin-bottom:10px}
.field label{font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--hint);display:block;margin-bottom:4px}
.field input,.field textarea,.field select{font-family:'Figtree',sans-serif;font-size:13px;background:var(--bg);border:1.5px solid var(--border);border-radius:var(--radius-sm);padding:9px 11px;color:var(--text);width:100%;outline:none;transition:border-color .15s,box-shadow .15s}
.field input:focus,.field textarea:focus,.field select:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(37,99,235,.1)}
.field textarea{resize:none;min-height:58px;line-height:1.5}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}

/* FOOTER */
.foot{padding:14px 20px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:flex-end;background:var(--surface)}
.btn{display:inline-flex;align-items:center;gap:6px;font-family:'Figtree',sans-serif;font-size:13px;font-weight:500;padding:9px 16px;border-radius:var(--radius-sm);cursor:pointer;border:1.5px solid transparent;transition:all .15s}
.btn svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.btn-ghost{background:transparent;border-color:var(--border);color:var(--muted)}
.btn-ghost:hover{background:var(--bg);color:var(--text);border-color:var(--border2)}
.btn-acc{background:var(--accent);border-color:var(--accent);color:#fff}
.btn-acc:hover{background:var(--accent-h)}
.btn-acc:disabled{opacity:.45;cursor:not-allowed;pointer-events:none}

/* SUCCESS */
.success-body{padding:40px 24px;text-align:center}
.check-ring{width:56px;height:56px;background:var(--green-bg);border:1.5px solid var(--green-b);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 18px}
.check-ring svg{width:26px;height:26px;stroke:var(--green);fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.success-title{font-size:19px;font-weight:600;margin-bottom:6px}
.success-sub{font-size:13px;color:var(--muted);line-height:1.55;margin-bottom:20px}
.success-pills{display:flex;flex-direction:column;gap:6px;margin-bottom:24px}
.success-pill{background:var(--green-bg);border:1px solid var(--green-b);border-radius:var(--radius-sm);padding:9px 14px;text-align:left;display:flex;align-items:center;gap:10px}
.success-pill svg{width:14px;height:14px;stroke:var(--green);fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
.success-pill span{font-size:12px;font-weight:500;color:var(--green)}

.fade{animation:fd .25s ease}
@keyframes fd{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <div class="brand">
      <div class="brand-mark">
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="10" y1="16" x2="14" y2="16"/></svg>
      </div>
      <span class="brand-name">Event<em>ify</em></span>
    </div>
    <span class="header-tag">AI-powered</span>
  </div>

  <div class="steps" id="steps" style="display:none">
    <div class="step done" id="st1"><div class="step-num">✓</div><span class="step-label">Upload</span></div>
    <div class="step-sep"></div>
    <div class="step" id="st2"><div class="step-num">2</div><span class="step-label">Select</span></div>
    <div class="step-sep"></div>
    <div class="step" id="st3"><div class="step-num">3</div><span class="step-label">Review</span></div>
    <div class="step-sep"></div>
    <div class="step" id="st4"><div class="step-num">4</div><span class="step-label">Done</span></div>
  </div>

  <div id="view"></div>
</div>

<script>
let imgB64=null,imgMime=null,imgSrc=null,imgName='image';
let events=[],selected=new Set();

const V=()=>document.getElementById('view');
const S=()=>document.getElementById('steps');

function setSteps(active){
  S().style.display='flex';
  [1,2,3,4].forEach(n=>{
    const el=document.getElementById('st'+n);
    const num=el.querySelector('.step-num');
    if(n<active){el.className='step done';num.textContent='✓';}
    else if(n===active){el.className='step active';num.textContent=n;}
    else{el.className='step';num.textContent=n;}
  });
}

function showUpload(){
  S().style.display='none';
  V().innerHTML=`
  <div class="card fade">
    <div class="dropzone" id="dz">
      <div class="dz-icon-ring">
        <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
      </div>
      <div class="dz-title">Drop your image or screenshot here</div>
      <div class="dz-sub">Event flyers, invites, posters, or any image with event details</div>
      <div class="dz-actions">
        <label class="dz-btn pri" for="fi-browse" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M3 15v4a2 2 0 002 2h14a2 2 0 002-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Choose file
        </label>
        <label class="dz-btn" for="fi-cam" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
          Take photo
        </label>
      </div>
      <div class="paste-hint">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        Or paste a screenshot: <kbd>Ctrl+V</kbd> / <kbd>⌘V</kbd>
      </div>
    </div>
  </div>
  <input type="file" id="fi-browse" accept="image/*,application/pdf" style="display:none"/>
  <input type="file" id="fi-cam" accept="image/*" capture="environment" style="display:none"/>`;

  document.getElementById('fi-browse').addEventListener('change',e=>{if(e.target.files[0])loadFile(e.target.files[0])});
  document.getElementById('fi-cam').addEventListener('change',e=>{if(e.target.files[0])loadFile(e.target.files[0])});
  const dz=document.getElementById('dz');
  dz.addEventListener('click',()=>document.getElementById('fi-browse').click());
  dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('over')});
  dz.addEventListener('dragleave',e=>{if(!dz.contains(e.relatedTarget))dz.classList.remove('over')});
  dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('over');const f=e.dataTransfer.files[0];if(f)loadFile(f)});
}

function loadFile(file){
  imgName=file.name||'image';
  const reader=new FileReader();
  reader.onload=e=>{
    const result=e.target.result;
    imgB64=result.split(',')[1];
    imgMime=file.type||'image/png';
    imgSrc=file.type==='application/pdf'?null:result;
    showLoading();
    callAPI();
  };
  reader.readAsDataURL(file);
}

function showLoading(){
  setSteps(2);
  V().innerHTML=`
  <div class="card fade">
    <div class="thumb-row">
      ${imgSrc
        ?`<img class="thumb" src="${imgSrc}" alt=""/>`
        :`<div class="thumb-ph"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>`}
      <div class="thumb-info">
        <div class="thumb-name">${esc(imgName)}</div>
        <div class="thumb-size">Analyzing…</div>
      </div>
    </div>
    <div class="loading-body">
      <div class="spinner"></div>
      <div class="loading-label">Extracting event details…</div>
      <div class="loading-sub">AI is reading your image</div>
    </div>
  </div>`;
}

async function callAPI(){
  try{
    const resp=await fetch('/api/analyze',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({imageB64:imgB64,imageMime:imgMime})
    });
    if(!resp.ok){
      const err=await resp.json().catch(()=>({}));
      throw new Error(err.error||`Server error ${resp.status}`);
    }
    const parsed=await resp.json();
    events=parsed.events||[];
    if(events.length===0){
      showErr('No events found in this image. Try a clearer photo or different image.');
    } else if(events.length===1){
      selected=new Set([0]);
      showConfirm();
    } else {
      showPicker();
    }
  }catch(e){
    showErr(e.message||'Something went wrong. Please try again.');
  }
}

function showErr(msg){
  setSteps(2);
  V().innerHTML=`
  <div class="card fade">
    ${imgSrc?`<div class="thumb-row"><img class="thumb" src="${imgSrc}" alt=""/><div class="thumb-info"><div class="thumb-name">${esc(imgName)}</div></div></div>`:''}
    <div class="err-wrap">
      <div class="err-box">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16" stroke-width="3"/></svg>
        <p>${esc(msg)}</p>
      </div>
    </div>
    <div class="foot">
      <button class="btn btn-ghost" onclick="showUpload()">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        Try another image
      </button>
    </div>
  </div>`;
}

function showPicker(){
  setSteps(2);selected=new Set();
  const items=events.map((ev,i)=>`
    <div class="pick-item" id="pi${i}" onclick="togglePick(${i})">
      <div class="pick-cb"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div class="pick-info">
        <div class="pick-name">${esc(ev.title||'Untitled Event')}</div>
        <div class="pick-meta">${fmtDate(ev.date)}${ev.startTime?' · '+fmtTime(ev.startTime):''}${ev.location?' · '+ev.location:''}</div>
      </div>
    </div>`).join('');
  V().innerHTML=`
  <div class="card fade">
    ${imgSrc?`<div class="thumb-row"><img class="thumb" src="${imgSrc}" alt=""/><div class="thumb-info"><div class="thumb-name">${esc(imgName)}</div><div class="thumb-size">${events.length} events found</div></div></div>`:''}
    <div class="section-head"><h2>Multiple events found</h2><p>Select which ones to add to your calendar</p></div>
    <div class="picker-list">${items}</div>
    <div class="foot">
      <button class="btn btn-ghost" onclick="showUpload()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>Back</button>
      <button class="btn btn-acc" id="pick-btn" onclick="showConfirm()" disabled>Review selected<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>
    </div>
  </div>`;
}

function togglePick(i){
  selected.has(i)?selected.delete(i):selected.add(i);
  document.getElementById('pi'+i).classList.toggle('sel',selected.has(i));
  const b=document.getElementById('pick-btn');if(b)b.disabled=selected.size===0;
}

function showConfirm(){
  setSteps(3);
  const selArr=[...selected];
  const cards=selArr.map((idx,ci)=>{
    const ev=events[idx];
    return`
    <div class="ev-block">
      <div class="ev-block-label">Event ${ci+1} of ${selArr.length}</div>
      <div class="field"><label>Title</label><input type="text" id="t${idx}" value="${esc(ev.title||'')}"/></div>
      <div class="field-row">
        <div class="field"><label>Date</label><input type="date" id="d${idx}" value="${ev.date||''}"/></div>
        <div class="field"><label>Start time</label><input type="time" id="s${idx}" value="${ev.startTime||'09:00'}"/></div>
      </div>
      <div class="field-row">
        <div class="field"><label>End time</label><input type="time" id="e${idx}" value="${ev.endTime||'10:00'}"/></div>
        <div class="field"><label>Timezone</label><select id="z${idx}">${tzOpts(ev.timezone||'America/Denver')}</select></div>
      </div>
      <div class="field"><label>Location</label><input type="text" id="l${idx}" value="${esc(ev.location||'')}" placeholder="Optional"/></div>
      <div class="field"><label>Description</label><textarea id="desc${idx}" placeholder="Optional">${esc(ev.description||'')}</textarea></div>
    </div>`;
  }).join('');
  V().innerHTML=`
  <div class="card fade">
    ${imgSrc?`<div class="thumb-row"><img class="thumb" src="${imgSrc}" alt=""/><div class="thumb-info"><div class="thumb-name">${esc(imgName)}</div><div class="thumb-size">Review &amp; edit before adding</div></div></div>`:''}
    <div class="confirm-head"><h2>Review event details</h2><p>Edit anything before adding to your calendar</p></div>
    ${cards}
    <div class="foot">
      <button class="btn btn-ghost" onclick="${events.length>1?'showPicker()':'showUpload()'}"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>Back</button>
      <button class="btn btn-acc" id="add-btn" onclick="addAll()">
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="10" y1="16" x2="14" y2="16"/></svg>
        Add to Google Calendar
      </button>
    </div>
  </div>`;
}

function addAll(){
  const btn=document.getElementById('add-btn');
  btn.disabled=true;
  btn.innerHTML=`<div class="spinner sm"></div> Adding…`;
  const selArr=[...selected];const added=[];
  selArr.forEach(idx=>{
    const ev={title:document.getElementById('t'+idx).value,date:document.getElementById('d'+idx).value,start:document.getElementById('s'+idx).value,end:document.getElementById('e'+idx).value,location:document.getElementById('l'+idx).value,description:document.getElementById('desc'+idx).value,tz:document.getElementById('z'+idx).value};
    window.open(gcalUrl(ev),'_blank');added.push(ev);
  });
  setTimeout(()=>showSuccess(added),500);
}

function gcalUrl(ev){
  const[y,m,d]=(ev.date||'2026-01-01').split('-');
  const[sh,sm]=(ev.start||'09:00').split(':');
  const[eh,em]=(ev.end||'10:00').split(':');
  const fmt=(Y,M,D,h,min)=>`${Y}${M}${D}T${h}${min}00`;
  const p=new URLSearchParams({action:'TEMPLATE',text:ev.title,dates:`${fmt(y,m,d,sh,sm)}/${fmt(y,m,d,eh,em)}`,details:ev.description,location:ev.location,ctz:ev.tz});
  return`https://calendar.google.com/calendar/render?${p}`;
}

function showSuccess(added){
  setSteps(4);
  document.getElementById('st4').className='step done';
  document.getElementById('st4').querySelector('.step-num').textContent='✓';
  const pills=added.map(ev=>`
    <div class="success-pill">
      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${esc(ev.title)} · ${fmtDate(ev.date)} ${fmtTime(ev.start)}</span>
    </div>`).join('');
  V().innerHTML=`
  <div class="card fade">
    <div class="success-body">
      <div class="check-ring"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div class="success-title">Added to Google Calendar</div>
      <div class="success-sub">${added.length} event${added.length>1?'s were':' was'} opened in Google Calendar.<br>Click <strong>Save</strong> in each tab to confirm.</div>
      <div class="success-pills">${pills}</div>
      <button class="btn btn-ghost" onclick="showUpload()" style="margin:0 auto"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>Add another image</button>
    </div>
  </div>`;
}

function fmtDate(s){if(!s)return'';try{const[y,m,d]=s.split('-');return new Date(+y,+m-1,+d).toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});}catch{return s;}}
function fmtTime(t){if(!t)return'';const[h,m]=t.split(':');const hr=+h;return`${hr%12||12}:${m} ${hr<12?'AM':'PM'}`;}
function tzOpts(sel){return['America/New_York','America/Chicago','America/Denver','America/Los_Angeles','America/Phoenix','America/Anchorage','Pacific/Honolulu','Europe/London','Europe/Paris','Europe/Athens','Asia/Tokyo','Asia/Shanghai','Asia/Kolkata','Australia/Sydney','UTC'].map(z=>`<option value="${z}"${z===sel?' selected':''}>${z}</option>`).join('');}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

document.addEventListener('paste',e=>{
  for(const item of(e.clipboardData?.items||[])){
    if(item.type.startsWith('image/')){loadFile(item.getAsFile());break;}
  }
});

showUpload();
</script>
</body>
</html>
