// Web Audio API subtle futuristic sound effects
let audioCtx = null;
let soundEnabled = true;

const getAudioContext = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  return audioCtx;
};

export const toggleSound = (enabled) => {
  soundEnabled = enabled;
  return soundEnabled;
};

export const isSoundEnabled = () => soundEnabled;

export const playBeep = (freq = 800, type = 'sine', duration = 0.08, vol = 0.05) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio context may be restricted before interaction
  }
};

export const playHoverSound = () => {
  playBeep(1200, 'sine', 0.04, 0.02);
};

export const playClickSound = () => {
  playBeep(640, 'triangle', 0.1, 0.04);
};

export const playSuccessSound = () => {
  if (!soundEnabled) return;
  try {
    playBeep(523.25, 'sine', 0.1, 0.04);
    setTimeout(() => playBeep(659.25, 'sine', 0.12, 0.04), 80);
    setTimeout(() => playBeep(783.99, 'sine', 0.18, 0.05), 160);
  } catch (e) {}
};
