const SoundManager = {
    isReady: false,
    synth: null,
    membrane: null,
    metal: null,
    reverb: null,

    init: async function () {
        if (this.isReady) return;

        try {
            await Tone.start();
            console.log('Audio Context Started');

            // Master Effects
            this.reverb = new Tone.Reverb({
                decay: 2.5,
                preDelay: 0.1,
                wet: 0.3
            }).toDestination();

            // PolySynth for Chords (Intro, Success)
            this.synth = new Tone.PolySynth(Tone.Synth, {
                oscillator: {
                    type: "fatcustom",
                    partials: [0.2, 1, 0, 0.5, 0.1],
                    spread: 40,
                    count: 3
                },
                envelope: {
                    attack: 0.05,
                    decay: 0.3,
                    sustain: 0.4,
                    release: 1.5
                }
            }).connect(this.reverb);

            // MembraneSynth for Kicks/Thuds (Error, Impact)
            this.membrane = new Tone.MembraneSynth({
                pitchDecay: 0.05,
                octaves: 4,
                oscillator: { type: "sine" },
                envelope: {
                    attack: 0.001,
                    decay: 0.4,
                    sustain: 0.01,
                    release: 1.4,
                    attackCurve: "exponential"
                }
            }).toDestination();

            // MetalSynth for Clicks/High-hats (UI)
            this.metal = new Tone.MetalSynth({
                frequency: 200,
                envelope: {
                    attack: 0.001,
                    decay: 0.1,
                    release: 0.01
                },
                harmonicity: 5.1,
                modulationIndex: 32,
                resonance: 4000,
                octaves: 1.5
            }).toDestination();
            this.metal.volume.value = -15;

            this.isReady = true;
        } catch (e) {
            console.error('SoundManager Init Failed:', e);
        }
    },

    playIntro: async function () {
        if (!this.isReady) await this.init();

        const now = Tone.now();
        // "Ta-dum" effect
        // Low impact
        this.membrane.triggerAttackRelease("C1", "8n", now);

        // Swell chord
        this.synth.triggerAttackRelease(["C3", "E3", "G3", "C4"], "2n", now + 0.1);

        // Bass reinforcement
        this.synth.triggerAttackRelease(["C2", "G2"], "1n", now + 0.15);
    },

    playSuccess: async function () {
        if (!this.isReady) await this.init();

        const now = Tone.now();
        // Bright major arpeggio
        this.synth.triggerAttackRelease("C5", "16n", now);
        this.synth.triggerAttackRelease("E5", "16n", now + 0.05);
        this.synth.triggerAttackRelease("G5", "8n", now + 0.1);
        this.synth.triggerAttackRelease("C6", "4n", now + 0.15);
    },

    playError: async function () {
        if (!this.isReady) await this.init();

        const now = Tone.now();
        // Dissonant low thud
        this.membrane.triggerAttackRelease("C2", "8n", now);
        this.membrane.triggerAttackRelease("F#2", "8n", now + 0.05);
    },

    playClick: async function () {
        if (!this.isReady) await this.init();
        this.metal.triggerAttackRelease("32n");
    },

    playPop: async function () {
        if (!this.isReady) await this.init();
        this.synth.triggerAttackRelease("G4", "32n");
    }
};

// Global unlock handler
const unlockAudio = async () => {
    await SoundManager.init();
    document.removeEventListener('touchstart', unlockAudio);
    document.removeEventListener('click', unlockAudio);
};

document.addEventListener('touchstart', unlockAudio);
document.addEventListener('click', unlockAudio);

// Expose globally
window.SoundManager = SoundManager;
