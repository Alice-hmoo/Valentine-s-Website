let unlocked = false;

function unlockEverything() {
    if (unlocked) return;
    unlocked = true;

    /* ===============================
       Page 1 & Page 2 – Background music
       =============================== */
    const music = document.getElementById("bgMusic");
    if (music) {
        music.loop = true;
        music.volume = 0.7;
        music.play().catch(() => {
            console.log("Background music blocked");
        });
    }

    /* ===============================
       Page 3 – Fireworks + sound
       =============================== */
    const fireworksContainer = document.getElementById("fireworks");
    const sound = document.getElementById("fireworksSound");

    if (fireworksContainer && sound) {

        sound.loop = true;
        sound.volume = 0.8;
        sound.play().catch(() => {
            console.log("Fireworks sound blocked");
        });

        const fireworks = new Fireworks(fireworksContainer, {
            speed: 3,
            acceleration: 1.05,
            friction: 0.96,
            gravity: 1.4,
            particles: 90,
            trace: 3,
            explosion: 5,
            autoresize: true,
            opacity: 0.9,
            lineWidth: 3,
            brightness: { min: 60, max: 90 },
            decay: { min: 0.015, max: 0.03 },
            delay: { min: 15, max: 35 },
            hue: { min: 0, max: 360 },
            rocketsPoint: { min: 40, max: 90 },

            shapes: [
                "circle",
                "star",
                "heart",
                "ring",
                "willow",
                "brocade",
                "peony",
                "bees",
                "pearls",
                "strobe"
            ],

            sound: false
        });

        fireworks.start();
    }

    // Remove listeners after first interaction
    window.removeEventListener("click", unlockEverything);
    window.removeEventListener("touchstart", unlockEverything);
}

/* ==================================
   FIRST USER INTERACTION UNLOCKS ALL
   ================================== */
window.addEventListener("click", unlockEverything);
window.addEventListener("touchstart", unlockEverything);
