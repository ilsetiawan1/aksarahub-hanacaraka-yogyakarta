// ===== DATABASE HANACARAKA (20 Aksara Carakan Dasar) =====
const DATABASE_HANACARAKA = [
  { id: 1, aksara: 'ꦲ', latin: 'Ha', arti: 'Ada utusan (carakan pertama)', category: 'carakan' },
  { id: 2, aksara: 'ꦤ', latin: 'Na', arti: 'Saling bertengkar / bertarung', category: 'carakan' },
  { id: 3, aksara: 'ꦕ', latin: 'Ca', arti: 'Sama-sama saktinya', category: 'carakan' },
  { id: 4, aksara: 'ꦫ', latin: 'Ra', arti: 'Sama-sama kuatnya', category: 'carakan' },
  { id: 5, aksara: 'ꦏ', latin: 'Ka', arti: 'Keduanya gugur / jatuh', category: 'carakan' },
  { id: 6, aksara: 'ꦢ', latin: 'Da', arti: 'Ada yang mempertaruhkan', category: 'carakan' },
  { id: 7, aksara: 'ꦠ', latin: 'Ta', arti: 'Jiwa / nyawa sebagai taruhannya', category: 'carakan' },
  { id: 8, aksara: 'ꦱ', latin: 'Sa', arti: 'Sama-sama mati / gugur', category: 'carakan' },
  { id: 9, aksara: 'ꦮ', latin: 'Wa', arti: 'Bapak / ayah mereka', category: 'carakan' },
  { id: 10, aksara: 'ꦭ', latin: 'La', arti: 'Lemah / tidak berdaya', category: 'carakan' },
  { id: 11, aksara: 'ꦥ', latin: 'Pa', arti: 'Dewa / yang mulia', category: 'carakan' },
  { id: 12, aksara: 'ꦝ', latin: 'Dha', arti: 'Yang menjadi pegangan', category: 'carakan' },
  { id: 13, aksara: 'ꦗ', latin: 'Ja', arti: 'Janjinya / ucapannya', category: 'carakan' },
  { id: 14, aksara: 'ꦪ', latin: 'Ya', arti: 'Kenyataannya benar', category: 'carakan' },
  { id: 15, aksara: 'ꦚ', latin: 'Nya', arti: 'Tidak ada kebohongan', category: 'carakan' },
  { id: 16, aksara: 'ꦩ', latin: 'Ma', arti: 'Mati / meninggal', category: 'carakan' },
  { id: 17, aksara: 'ꦒ', latin: 'Ga', arti: 'Pergi / hilang', category: 'carakan' },
  { id: 18, aksara: 'ꦧ', latin: 'Ba', arti: 'Bersama-sama / serentak', category: 'carakan' },
  { id: 19, aksara: 'ꦛ', latin: 'Tha', arti: 'Tidak ada yang tersisa', category: 'carakan' },
  { id: 20, aksara: 'ꦔ', latin: 'Nga', arti: 'Nafas / jiwa semua makhluk', category: 'carakan' },
];

const DATABASE_SANDHANGAN = [
  { id: 101, aksara: 'ꦶ', latin: 'Wulu (i)', arti: 'Mengubah bunyi vokal menjadi "i" (misal: ha ꦲ → hi ꦲꦶ)', category: 'sandhangan' },
  { id: 102, aksara: 'ꦸ', latin: 'Suku (u)', arti: 'Mengubah bunyi vokal menjadi "u" (misal: ha ꦲ → hu ꦲꦸ)', category: 'sandhangan' },
  { id: 103, aksara: 'ꦼ', latin: 'Pepet (e)', arti: 'Mengubah bunyi vokal menjadi "e" pepet (misal: ha ꦲ → he ꦲꦼ)', category: 'sandhangan' },
  { id: 104, aksara: 'ꦺ', latin: 'Taling (é/è)', arti: 'Mengubah bunyi vokal menjadi "é/è" taling (misal: ha ꦲ → hé ꦺꦲ)', category: 'sandhangan' },
  { id: 105, aksara: 'ꦺꦴ', latin: 'Taling-Tarung (o)', arti: 'Mengubah bunyi vokal menjadi "o" (misal: ha ꦲ → ho ꦺꦲꦴ)', category: 'sandhangan' },
  { id: 106, aksara: 'ꦁ', latin: 'Cecak (ng)', arti: 'Panyigeg sigegan bunyi konsonan "ng" di akhir suku kata', category: 'sandhangan' },
  { id: 107, aksara: 'ꦂ', latin: 'Layar (r)', arti: 'Panyigeg sigegan bunyi konsonan "r" di akhir suku kata', category: 'sandhangan' },
  { id: 108, aksara: 'ꦃ', latin: 'Wignyan (h)', arti: 'Panyigeg sigegan bunyi konsonan "h" di akhir suku kata', category: 'sandhangan' },
  { id: 109, aksara: '꧀', latin: 'Pangkon', arti: 'Mematikan vokal aksara yang dilekati (penutup kalimat/kata)', category: 'sandhangan' }
];

const DATABASE_ANGKA = [
  { id: 201, aksara: '꧑', latin: '1 (Siji)', arti: 'Angka satu Jawa', category: 'angka' },
  { id: 202, aksara: '꧒', latin: '2 (Loro)', arti: 'Angka dua Jawa', category: 'angka' },
  { id: 203, aksara: '꧓', latin: '3 (Telu)', arti: 'Angka tiga Jawa', category: 'angka' },
  { id: 204, aksara: '꧔', latin: '4 (Papat)', arti: 'Angka empat Jawa', category: 'angka' },
  { id: 205, aksara: '꧕', latin: '5 (Lima)', arti: 'Angka lima Jawa', category: 'angka' },
  { id: 206, aksara: '꧖', latin: '6 (Enem)', arti: 'Angka enam Jawa', category: 'angka' },
  { id: 207, aksara: '꧗', latin: '7 (Pitu)', arti: 'Angka tujuh Jawa', category: 'angka' },
  { id: 208, aksara: '꧘', latin: '8 (Wolu)', arti: 'Angka delapan Jawa', category: 'angka' },
  { id: 209, aksara: '꧙', latin: '9 (Sanga)', arti: 'Angka sembilan Jawa', category: 'angka' },
  { id: 210, aksara: '꧐', latin: '0 (Nol)', arti: 'Angka nol Jawa', category: 'angka' }
];


// ===== CHARACTER MAPPING ENGINE (Latin → Aksara Jawa) =====
const CONSONANTS = {
  'ng': 'ꦔ',
  'ny': 'ꦚ',
  'dh': 'ꦝ',
  'th': 'ꦛ',
  'h': 'ꦲ',
  'n': 'ꦤ',
  'c': 'ꦕ',
  'r': 'ꦫ',
  'k': 'ꦏ',
  'd': 'ꦢ',
  't': 'ꦠ',
  's': 'ꦱ',
  'w': 'ꦮ',
  'l': 'ꦭ',
  'p': 'ꦥ',
  'j': 'ꦗ',
  'y': 'ꦪ',
  'm': 'ꦩ',
  'g': 'ꦒ',
  'b': 'ꦧ',
  'f': 'ꦥ',
  'v': 'ꦥ',
  'z': 'ꦗ',
  'q': 'ꦏ'
};

function getBaseConsonant(c) {
  return CONSONANTS[c] || '';
}

function getSyllableAksara(c, v, nextChar) {
  let base = getBaseConsonant(c);
  if (!base) return '';
  
  if (v === 'a' || v === '') {
    return base;
  }
  if (v === 'i') {
    return base + 'ꦶ'; // wulu
  }
  if (v === 'u') {
    return base + 'ꦸ'; // suku
  }
  if (v === 'e') {
    // Smart heuristic: if 'e' is at the end of the word, make it taling
    if (!nextChar || nextChar === ' ' || nextChar === ',' || nextChar === '.' || nextChar === '-') {
      return 'ꦺ' + base; // taling
    }
    return base + 'ꦼ'; // pepet
  }
  if (v === 'é' || v === 'è') {
    return 'ꦺ' + base; // taling
  }
  if (v === 'o') {
    return 'ꦺ' + base + 'ꦴ'; // taling-tarung
  }
  return base;
}

// Convert latin string → Aksara Jawa (Syllabic Engine)
function transliterasi(text) {
  if (!text.trim()) return '—';
  let result = '';
  let str = text.toLowerCase();
  let i = 0;
  
  const consonantKeys = ['ng', 'ny', 'dh', 'th', 'h', 'n', 'c', 'r', 'k', 'd', 't', 's', 'w', 'l', 'p', 'j', 'y', 'm', 'g', 'b', 'f', 'v', 'z', 'q'];
  const vowelKeys = ['a', 'i', 'u', 'e', 'é', 'è', 'o'];
  
  while (i < str.length) {
    let char = str[i];
    
    // Pass spaces and punctuation directly
    if (char === ' ') {
      result += ' ';
      i++;
      continue;
    }
    if (!/[a-zà-ÿ]/i.test(char)) {
      result += char;
      i++;
      continue;
    }
    
    // Try to match consonant
    let matchedCons = '';
    for (let c of consonantKeys) {
      if (str.startsWith(c, i)) {
        matchedCons = c;
        break;
      }
    }
    
    if (matchedCons) {
      i += matchedCons.length;
      
      // Look ahead for vowel
      let matchedVow = '';
      for (let v of vowelKeys) {
        if (str.startsWith(v, i)) {
          matchedVow = v;
          break;
        }
      }
      
      let nextChar = str[i + (matchedVow ? matchedVow.length : 0)] || '';
      
      if (matchedVow) {
        i += matchedVow.length;
        result += getSyllableAksara(matchedCons, matchedVow, nextChar);
      } else {
        // Consonant with no vowel (ends a syllable or word)
        if (matchedCons === 'ng') {
          result += 'ꦁ'; // cecak
        } else if (matchedCons === 'r') {
          result += 'ꦂ'; // layar
        } else if (matchedCons === 'h') {
          result += 'ꦃ'; // wignyan
        } else {
          let base = getBaseConsonant(matchedCons);
          result += base + '꧀'; // pangkon
        }
      }
    } else {
      // Standalone vowel
      let matchedVow = '';
      for (let v of vowelKeys) {
        if (str.startsWith(v, i)) {
          matchedVow = v;
          break;
        }
      }
      
      if (matchedVow) {
        i += matchedVow.length;
        let nextChar = str[i] || '';
        result += getSyllableAksara('h', matchedVow, nextChar);
      } else {
        result += char;
        i++;
      }
    }
  }
  
  return result;
}

// ===== SPA NAVIGATION & MOBILE HAMBURGER =====
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');

// Web Audio API synthesizer for clean sound effects
let audioCtx = null;
function playSound(type) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'correct') {
      // Arpeggio C-major
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.16); // G5
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } else if (type === 'wrong') {
      // Low buzz
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(80, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'click') {
      // Short click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    }
  } catch (e) {
    console.warn("Web Audio API not supported or blocked", e);
  }
}

if (hamburgerMenu && navLinks) {
  hamburgerMenu.addEventListener('click', () => {
    playSound('click');
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));
    
    const targetSection = document.getElementById(btn.dataset.target);
    targetSection.classList.add('active');
    
    // Close hamburger on mobile
    if (hamburgerMenu && navLinks) {
      hamburgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    }
    
    // Init tracing canvas if selected
    if (btn.dataset.target === 'tracing') {
      setTimeout(initTracing, 50); // slight delay to allow layout calculation
    }
  });
});

// ===== DARK / LIGHT MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  playSound('click');
  const isDark = document.body.classList.toggle('dark-theme');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// ===== SECTION 1: PLAYGROUND & FILTERS =====
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
  });
});

function getFrontLabel(item) {
  switch (item.id) {
    // Carakan (Aksara Dasar)
    case 1: return "Utusan / Messenger";
    case 2: return "Pertarungan / Fight";
    case 3: return "Kesaktian / Power";
    case 4: return "Kekuatan / Strength";
    case 5: return "Gugur / Fallen";
    case 6: return "Taruhan / Bet";
    case 7: return "Jiwa / Soul";
    case 8: return "Kematian / Death";
    case 9: return "Ayah / Father";
    case 10: return "Lemah / Weak";
    case 11: return "Dewa / Deity";
    case 12: return "Pegangan / Guide";
    case 13: return "Janji / Promise";
    case 14: return "Kebenaran / Truth";
    case 15: return "Kejujuran / Honesty";
    case 16: return "Wafat / Deceased";
    case 17: return "Pergi / Go";
    case 18: return "Bersama / Together";
    case 19: return "Sirna / Vanished";
    case 20: return "Nafas / Breath";

    // Sandhangan (Bunyi Vokal/Konsonan)
    case 101: return "Bunyi i / Sound i";
    case 102: return "Bunyi u / Sound u";
    case 103: return "Bunyi e / Sound e";
    case 104: return "Bunyi é / Sound é";
    case 105: return "Bunyi o / Sound o";
    case 106: return "Bunyi ng / Sound ng";
    case 107: return "Bunyi r / Sound r";
    case 108: return "Bunyi h / Sound h";
    case 109: return "Pangkon (Mute)";

    // Angka Jawa
    case 201: return "Satu / One";
    case 202: return "Dua / Two";
    case 203: return "Tiga / Three";
    case 204: return "Empat / Four";
    case 205: return "Lima / Five";
    case 206: return "Enam / Six";
    case 207: return "Tujuh / Seven";
    case 208: return "Delapan / Eight";
    case 209: return "Sembilan / Nine";
    case 210: return "Nol / Zero";
    default: return `#${item.id}`;
  }
}

function renderCards(filter = 'all') {
  const grid = document.getElementById('cardGrid');
  if (!grid) return;
  
  let combined = [...DATABASE_HANACARAKA, ...DATABASE_SANDHANGAN, ...DATABASE_ANGKA];
  let filtered = filter === 'all' ? combined : combined.filter(item => item.category === filter);
  
  grid.innerHTML = filtered.map(
    (item) => `
    <div class="flip-card" role="button" aria-label="Aksara ${item.latin}">
      <div class="flip-inner">
        <div class="flip-front">
          <span class="card-aksara">${item.aksara}</span>
          <span class="card-id">${getFrontLabel(item)}</span>
        </div>
        <div class="flip-back">
          <span class="back-latin">${item.latin}</span>
          <span class="back-arti">${item.arti}</span>
        </div>
      </div>
    </div>
  `,
  ).join('');

  grid.querySelectorAll('.flip-card').forEach((card) => {
    card.addEventListener('click', () => {
      playSound('click');
      card.classList.toggle('is-flipped');
    });
  });
}

// ===== SECTION 2: PLANG GENERATOR =====
const latinInput = document.getElementById('latinInput');
const plangLatin = document.getElementById('plangLatin');
const plangAksara = document.getElementById('plangAksara');
const copyBtn = document.getElementById('copyBtn');
const copyMsg = document.getElementById('copyMsg');

latinInput.addEventListener('input', () => {
  const val = latinInput.value;
  plangLatin.textContent = val.trim() || '—';
  plangAksara.textContent = transliterasi(val);
});

copyBtn.addEventListener('click', () => {
  playSound('click');
  const aksaraText = plangAksara.textContent;
  if (aksaraText === '—' || !aksaraText) return;
  navigator.clipboard
    .writeText(aksaraText)
    .then(() => {
      copyMsg.textContent = '✅ Aksara berhasil disalin!';
      setTimeout(() => (copyMsg.textContent = ''), 2500);
    })
    .catch(() => {
      copyMsg.textContent = '❌ Gagal menyalin. Coba manual.';
    });
});

// Plang presets
document.querySelectorAll('.btn-preset').forEach(btn => {
  btn.addEventListener('click', () => {
    playSound('click');
    latinInput.value = btn.dataset.text;
    latinInput.dispatchEvent(new Event('input'));
  });
});

// Plang Theme Toggle
document.querySelectorAll('.btn-plang-theme').forEach(btn => {
  btn.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.btn-plang-theme').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const plangSign = document.getElementById('plangSign');
    if (btn.dataset.theme === 'night') {
      plangSign.classList.add('night');
    } else {
      plangSign.classList.remove('night');
    }
  });
});

// ===== SECTION 3: PAPAN TULIS TRACING =====
let paintCanvas = null;
let ctx = null;
let isDrawing = false;
let currentTraceAksara = 'ꦲ';
let completedTraces = new Set();

function initTracing() {
  paintCanvas = document.getElementById('paintCanvas');
  if (!paintCanvas) return;
  ctx = paintCanvas.getContext('2d');
  
  // Reset event listeners to avoid duplication
  paintCanvas.replaceWith(paintCanvas.cloneNode(true));
  paintCanvas = document.getElementById('paintCanvas');
  ctx = paintCanvas.getContext('2d');
  
  paintCanvas.addEventListener('mousedown', startDrawing);
  paintCanvas.addEventListener('mousemove', draw);
  paintCanvas.addEventListener('mouseup', stopDrawing);
  paintCanvas.addEventListener('mouseleave', stopDrawing);
  
  paintCanvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    paintCanvas.dispatchEvent(mouseEvent);
  }, { passive: false });
  
  paintCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    paintCanvas.dispatchEvent(mouseEvent);
  }, { passive: false });
  
  paintCanvas.addEventListener('touchend', (e) => {
    const mouseEvent = new MouseEvent('mouseup', {});
    paintCanvas.dispatchEvent(mouseEvent);
  });
  
  renderTraceSelector();
  drawGuide();
}

function getMousePos(canvasDom, clientX, clientY) {
  const rect = canvasDom.getBoundingClientRect();
  return {
    x: ((clientX - rect.left) / rect.width) * canvasDom.width,
    y: ((clientY - rect.top) / rect.height) * canvasDom.height
  };
}

function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath();
  const pos = getMousePos(paintCanvas, e.clientX, e.clientY);
  ctx.moveTo(pos.x, pos.y);
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#d4af37'; // gold brush
}

function draw(e) {
  if (!isDrawing) return;
  const pos = getMousePos(paintCanvas, e.clientX, e.clientY);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function stopDrawing() {
  if (isDrawing) {
    ctx.closePath();
    isDrawing = false;
  }
}

function drawGuide() {
  if (!ctx || !paintCanvas) return;
  ctx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  
  // Dashboard lines
  ctx.strokeStyle = '#e6dfd3';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  
  ctx.beginPath();
  ctx.moveTo(0, paintCanvas.height / 2);
  ctx.lineTo(paintCanvas.width, paintCanvas.height / 2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(paintCanvas.width / 2, 0);
  ctx.lineTo(paintCanvas.width / 2, paintCanvas.height);
  ctx.stroke();
  
  // Guidance Character
  ctx.setLineDash([]);
  ctx.font = '120px "Noto Sans Javanese", "Courier New", serif';
  ctx.fillStyle = 'rgba(15, 76, 42, 0.08)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(currentTraceAksara, paintCanvas.width / 2, paintCanvas.height / 2);
}

function renderTraceSelector() {
  const container = document.getElementById('tracingLettersSelect');
  if (!container) return;
  
  container.innerHTML = DATABASE_HANACARAKA.map(item => `
    <button class="btn-trace-select ${item.aksara === currentTraceAksara ? 'active' : ''} ${completedTraces.has(item.aksara) ? 'completed' : ''}" data-aksara="${item.aksara}">
      ${item.aksara}
    </button>
  `).join('');
  
  container.querySelectorAll('.btn-trace-select').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      container.querySelectorAll('.btn-trace-select').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTraceAksara = btn.dataset.aksara;
      drawGuide();
    });
  });
}

document.getElementById('clearCanvasBtn')?.addEventListener('click', () => {
  playSound('click');
  const feedback = document.getElementById('traceFeedback');
  if (feedback) feedback.innerHTML = '';
  drawGuide();
});

document.getElementById('checkCanvasBtn')?.addEventListener('click', () => {
  if (!paintCanvas || !ctx) return;
  
  // Create an offscreen canvas to check guide letter's actual pixel density
  const guideCanvas = document.createElement('canvas');
  guideCanvas.width = paintCanvas.width;
  guideCanvas.height = paintCanvas.height;
  const gCtx = guideCanvas.getContext('2d');
  
  gCtx.font = '120px "Noto Sans Javanese", serif';
  gCtx.fillStyle = '#000000';
  gCtx.textAlign = 'center';
  gCtx.textBaseline = 'middle';
  gCtx.fillText(currentTraceAksara, guideCanvas.width / 2, guideCanvas.height / 2);
  
  const userImgData = ctx.getImageData(0, 0, paintCanvas.width, paintCanvas.height).data;
  const guideImgData = gCtx.getImageData(0, 0, guideCanvas.width, guideCanvas.height).data;
  
  let matchCount = 0;
  let guideCount = 0;
  let penaltyCount = 0;
  
  // Iterate through pixel data (downsample by 16 to keep it fast and responsive)
  for (let i = 0; i < guideImgData.length; i += 16) {
    const isGuideActive = guideImgData[i + 3] > 50;
    const isUserActive = userImgData[i + 3] > 100; // only detect thick drawing brush, ignore light grey guide
    
    if (isGuideActive) {
      guideCount++;
      if (isUserActive) {
        matchCount++;
      }
    } else {
      if (isUserActive) {
        penaltyCount++;
      }
    }
  }
  
  const coverage = guideCount > 0 ? (matchCount / guideCount) : 0;
  const penalty = guideCount > 0 ? (penaltyCount / guideCount) : 0;
  // Net accuracy penalizes drawing random strokes outside the guide lines
  const accuracy = Math.max(0, Math.round((coverage - penalty * 0.35) * 100));
  
  const feedback = document.getElementById('traceFeedback');
  const container = document.querySelector('.canvas-container');
  
  if (accuracy >= 22) { // 22% net trace accuracy threshold is ideal for tracing
    playSound('correct');
    completedTraces.add(currentTraceAksara);
    renderTraceSelector();
    if (feedback) {
      feedback.style.color = '#2e7d32';
      feedback.innerHTML = `✨ Lulus! Akurasi: ${accuracy}% — Menuju aksara berikutnya...`;
    }
    if (container) {
      container.style.borderColor = '#2e7d32';
      container.style.boxShadow = '0 0 15px rgba(46, 125, 50, 0.4)';
    }
    
    setTimeout(() => {
      if (feedback) feedback.innerHTML = '';
      if (container) {
        container.style.borderColor = '';
        container.style.boxShadow = '';
      }
      advanceTrace();
    }, 1800);
  } else {
    playSound('wrong');
    if (feedback) {
      feedback.style.color = '#c62828';
      feedback.innerHTML = `❌ Akurasi: ${accuracy}% — Kurang akurat. Coba ikuti garis panduan dengan rapi!`;
    }
    if (container) {
      container.style.borderColor = '#c62828';
      container.style.boxShadow = '0 0 15px rgba(198, 40, 40, 0.4)';
      container.classList.add('shake');
      setTimeout(() => container.classList.remove('shake'), 400);
    }
    
    setTimeout(() => {
      if (container) {
        container.style.borderColor = '';
        container.style.boxShadow = '';
      }
    }, 1500);
  }
});

function advanceTrace() {
  const index = DATABASE_HANACARAKA.findIndex(item => item.aksara === currentTraceAksara);
  if (index === -1) return;
  const nextIndex = (index + 1) % DATABASE_HANACARAKA.length;
  currentTraceAksara = DATABASE_HANACARAKA[nextIndex].aksara;
  renderTraceSelector();
  drawGuide();
}

document.getElementById('downloadCanvasBtn')?.addEventListener('click', () => {
  playSound('click');
  if (!paintCanvas) return;
  
  const exportCanvas = document.createElement('canvas');
  exportCanvas.width = paintCanvas.width;
  exportCanvas.height = paintCanvas.height;
  const exportCtx = exportCanvas.getContext('2d');
  
  exportCtx.fillStyle = '#fbf9f2';
  exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
  
  exportCtx.font = '120px "Noto Sans Javanese", serif';
  exportCtx.fillStyle = 'rgba(15, 76, 42, 0.06)';
  exportCtx.textAlign = 'center';
  exportCtx.textBaseline = 'middle';
  exportCtx.fillText(currentTraceAksara, exportCanvas.width / 2, exportCanvas.height / 2);
  
  exportCtx.drawImage(paintCanvas, 0, 0);
  
  const image = exportCanvas.toDataURL("image/png");
  const link = document.createElement('a');
  link.download = `tulisan_aksara_${currentTraceAksara}.png`;
  link.href = image;
  link.click();
});

// ===== SECTION 4: LEGENDA AJI SAKA =====
let currentSlide = 0;
const storySlides = document.querySelectorAll('.story-slide');
const prevStoryBtn = document.getElementById('prevStoryBtn');
const nextStoryBtn = document.getElementById('nextStoryBtn');
const storyDots = document.querySelectorAll('#storyDots .dot');

function updateStorySlider() {
  storySlides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentSlide);
  });
  
  storyDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlide);
  });
  
  if (prevStoryBtn && nextStoryBtn) {
    prevStoryBtn.disabled = currentSlide === 0;
    nextStoryBtn.disabled = currentSlide === storySlides.length - 1;
  }
}

prevStoryBtn?.addEventListener('click', () => {
  if (currentSlide > 0) {
    playSound('click');
    currentSlide--;
    updateStorySlider();
  }
});

nextStoryBtn?.addEventListener('click', () => {
  if (currentSlide < storySlides.length - 1) {
    playSound('click');
    currentSlide++;
    updateStorySlider();
  }
});

storyDots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    playSound('click');
    currentSlide = idx;
    updateStorySlider();
  });
});

// ===== SECTION 5: KUIS SASTRA & SERTIFIKAT =====
let kuisData = [];
let currentQ = 0;
let score = 0;
let userName = '';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buatSoal() {
  const pool = [...DATABASE_HANACARAKA, ...DATABASE_SANDHANGAN, ...DATABASE_ANGKA];
  return shuffle(pool)
    .slice(0, 10)
    .map((item) => {
      const wrongs = shuffle(pool.filter((x) => x.id !== item.id)).slice(0, 3);
      const options = shuffle([item, ...wrongs]); // Revert back to randomized choices
      return { item, options };
    });
}

function renderKuis() {
  const wrap = document.getElementById('kuisWrap');
  if (!wrap) return;
  
  wrap.innerHTML = `
    <div class="kuis-start-form">
      <h3>Daftar Kuis Sastra</h3>
      <p>Masukkan namamu untuk dicetak pada Sertifikat Kelulusan jika berhasil lulus.</p>
      <div class="form-group">
        <label for="studentNameInput">Nama Lengkap</label>
        <input type="text" id="studentNameInput" placeholder="Masukkan nama Anda..." required />
      </div>
      <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:1.2rem;">
        <button class="btn-primary" id="startKuisBtn" style="width:100%;">Mulai Kuis 🚀</button>
        <button class="btn-secondary" id="previewCertBtn" style="width:100%;">👁️ Pratinjau Sertifikat (Khusus Juri)</button>
      </div>
    </div>
  `;
  
  document.getElementById('startKuisBtn').addEventListener('click', () => {
    const input = document.getElementById('studentNameInput');
    userName = input.value.trim() || 'Sastra Jawa Enthusiast';
    playSound('click');
    kuisData = buatSoal();
    currentQ = 0;
    score = 0;
    tampilSoal();
  });

  document.getElementById('previewCertBtn').addEventListener('click', () => {
    const input = document.getElementById('studentNameInput');
    const name = input.value.trim() || 'Dewan Juri Terhormat';
    playSound('click');
    generateCertificate(name, 100);
  });
}

function tampilSoal() {
  const wrap = document.getElementById('kuisWrap');
  if (!wrap) return;

  if (currentQ >= kuisData.length) {
    const persen = Math.round((score / kuisData.length) * 100);
    if (persen >= 80) {
      generateCertificate(userName, persen);
    } else {
      wrap.innerHTML = `
        <div class="kuis-result text-center">
          <div style="font-size:3rem">📚</div>
          <div class="result-score" style="font-size:2rem; font-weight:700; margin:1rem 0;">${score} / ${kuisData.length}</div>
          <p class="result-msg">Skor kamu: ${persen}% — Belum lulus batas minimal sertifikasi (80%). Yuk pelajari lagi di Playground!</p>
          <button class="btn-primary" onclick="renderKuis()">🔄 Ulangi Kuis</button>
        </div>
      `;
    }
    return;
  }

  const { item, options } = kuisData[currentQ];
  wrap.innerHTML = `
    <p class="kuis-progress">Soal ${currentQ + 1} / ${kuisData.length} &nbsp;|&nbsp; Skor: ${score}</p>
    <div class="kuis-question">
      <p class="q-soal">Aksara Jawa di bawah ini melambangkan huruf apa?</p>
      <span class="q-aksara">${item.aksara}</span>
      <div class="q-options">
        ${options
          .map(
            (opt) => `
          <button class="q-opt" data-id="${opt.id}" data-correct="${opt.id === item.id}">
            ${opt.latin}
          </button>
        `,
          )
          .join('')}
      </div>
      <div id="qHintContainer"></div>
    </div>
  `;

  let answered = false;
  wrap.querySelectorAll('.q-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      const isCorrect = btn.dataset.correct === 'true';
      let delay = 1200;

      if (isCorrect) {
        score++;
        playSound('correct');
      } else {
        playSound('wrong');
        delay = 4000; // give more time to read the hint card
        const qContainer = wrap.querySelector('.kuis-question');
        if (qContainer) {
          qContainer.classList.add('shake');
          setTimeout(() => qContainer.classList.remove('shake'), 400);
        }
        
        // Show hint card
        const hintContainer = document.getElementById('qHintContainer');
        if (hintContainer) {
          hintContainer.innerHTML = `
            <div class="q-hint-box">
              <span>💡</span>
              <p><strong>Kisi-kisi:</strong> Aksara <strong>${item.aksara}</strong> sebenarnya melambangkan vokal/bunyi <strong>"${item.latin}"</strong>. ${item.arti}</p>
            </div>
          `;
        }
      }

      wrap.querySelectorAll('.q-opt').forEach((b) => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
        else if (b === btn && !isCorrect) b.classList.add('wrong');
      });

      setTimeout(() => {
        currentQ++;
        tampilSoal();
      }, delay);
    });
  });
}

function generateCertificate(name, scorePercent) {
  const wrap = document.getElementById('kuisWrap');
  if (!wrap) return;
  
  const certCanvas = document.createElement('canvas');
  certCanvas.width = 800;
  certCanvas.height = 600;
  const c = certCanvas.getContext('2d');
  
  // Background
  c.fillStyle = '#fdfbf7';
  c.fillRect(0, 0, certCanvas.width, certCanvas.height);
  
  // Double borders
  c.strokeStyle = '#d4af37'; // gold
  c.lineWidth = 15;
  c.strokeRect(20, 20, certCanvas.width - 40, certCanvas.height - 40);
  
  c.strokeStyle = '#0f4c2a'; // green
  c.lineWidth = 3;
  c.strokeRect(32, 32, certCanvas.width - 64, certCanvas.height - 64);
  
  // Ornate corners
  c.fillStyle = '#d4af37';
  // Top-left
  c.fillRect(32, 32, 40, 6);
  c.fillRect(32, 32, 6, 40);
  // Top-right
  c.fillRect(certCanvas.width - 72, 32, 40, 6);
  c.fillRect(certCanvas.width - 38, 32, 6, 40);
  // Bottom-left
  c.fillRect(32, certCanvas.height - 38, 40, 6);
  c.fillRect(32, certCanvas.height - 72, 6, 40);
  // Bottom-right
  c.fillRect(certCanvas.width - 72, certCanvas.height - 38, 40, 6);
  c.fillRect(certCanvas.width - 38, certCanvas.height - 72, 6, 40);
  
  c.fillStyle = '#0f4c2a';
  c.textAlign = 'center';
  
  c.font = 'bold 36px "Poppins", "Arial", sans-serif';
  c.fillText('SERTIFIKAT KELULUSAN', certCanvas.width / 2, 120);
  
  c.fillStyle = '#d4af37';
  c.font = 'italic 18px "Poppins", "Arial", sans-serif';
  c.fillText('Diberikan kepada:', certCanvas.width / 2, 180);
  
  c.fillStyle = '#0f4c2a';
  c.font = 'bold 34px "Poppins", "Arial", sans-serif';
  c.fillText(name.toUpperCase(), certCanvas.width / 2, 235);
  
  // Underline
  c.strokeStyle = '#d4af37';
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(certCanvas.width / 2 - 180, 250);
  c.lineTo(certCanvas.width / 2 + 180, 250);
  c.stroke();
  
  c.fillStyle = '#444444';
  c.font = '16px "Poppins", "Arial", sans-serif';
  c.fillText('Atas pencapaian luar biasa dalam menyelesaikan seluruh tingkat kompetensi', certCanvas.width / 2, 300);
  c.fillText('Kuis Sastra Jawa (Edisi Yogyakarta) di platform pembelajaran AksaraHub.', certCanvas.width / 2, 325);
  
  c.fillStyle = '#0f4c2a';
  c.font = 'bold 22px "Poppins", "Arial", sans-serif';
  c.fillText(`DENGAN PENCAPAIAN SKOR: ${scorePercent}%`, certCanvas.width / 2, 385);
  
  c.fillStyle = '#666666';
  c.font = 'italic 14px "Poppins", "Arial", sans-serif';
  const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
  c.fillText(`Yogyakarta, ${today}`, certCanvas.width / 2, 440);
  
  c.fillStyle = '#d4af37';
  c.font = '48px "Noto Sans Javanese", "Courier New", serif';
  c.fillText('ꦲꦏ꧀ꦱꦫꦲꦸꦵ', certCanvas.width / 2, 500);
  
  c.fillStyle = '#0f4c2a';
  c.font = 'bold 12px "Poppins", "Arial", sans-serif';
  c.fillText('Panitia Sertifikasi AksaraHub', certCanvas.width / 2, 535);
  
  const dataURL = certCanvas.toDataURL('image/png');
  
  wrap.innerHTML = `
    <div class="certificate-award-wrap">
      <h3>🏆 Selamat, ${name}!</h3>
      <p>Kamu lulus kuis sertifikasi dengan nilai <strong>${scorePercent}%</strong>.</p>
      <img src="${dataURL}" class="cert-preview-img" alt="Pratinjau Sertifikat" />
      <div class="cert-actions" style="margin-top:1rem; display:flex; flex-direction:column; gap:0.5rem; align-items:center;">
        <a class="btn-primary" href="${dataURL}" download="Sertifikat_AksaraHub_${name.replace(/\s+/g, '_')}.png" style="text-decoration:none; display:inline-block; width:100%; max-width:280px; text-align:center;">💾 Unduh Sertifikat (PNG)</a>
        <button class="btn-secondary" onclick="renderKuis()" style="width:100%; max-width:280px;">🔄 Ulangi Kuis</button>
      </div>
    </div>
  `;
}

// Global hook for script to reinitialize quiz from DOM onclick
window.renderKuis = renderKuis;

// ===== INIT =====
renderCards();
renderKuis();

