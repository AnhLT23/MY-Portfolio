// Bộ tạo âm thanh nền bằng Web Audio API.
export class WebAudioFocusEngine {
  constructor() {
    this.ctx = null;
    this.osc1 = null;
    this.osc2 = null;
    this.gain = null;
    this.playing = false;
  }

  start(freq = 220, waveType = "sine") {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      this.stop();

      this.gain = this.ctx.createGain();
      this.gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
      this.gain.connect(this.ctx.destination);

      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = waveType;
      this.osc1.frequency.setValueAtTime(freq, this.ctx.currentTime);

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = "sine";
      this.osc2.frequency.setValueAtTime(freq * 1.5, this.ctx.currentTime);

      this.osc1.connect(this.gain);
      this.osc2.connect(this.gain);

      this.osc1.start();
      this.osc2.start();
      this.playing = true;
    } catch {
      // Ignore browser autoplay restrictions
    }
  }

  stop() {
    try {
      if (this.osc1) {
        this.osc1.stop();
        this.osc1.disconnect();
        this.osc1 = null;
      }
      if (this.osc2) {
        this.osc2.stop();
        this.osc2.disconnect();
        this.osc2 = null;
      }
      this.playing = false;
    } catch {
      // Safe cleanup
    }
  }

  toggle(freq = 220, waveType = "sine") {
    if (this.playing) {
      this.stop();
      return false;
    }
    this.start(freq, waveType);
    return true;
  }
}

export const focusSynth = new WebAudioFocusEngine();
