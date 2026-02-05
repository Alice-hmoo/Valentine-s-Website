let unlocked = false;

function unlockEverything() {
    if (unlocked) return;
    unlocked = true;

    /* ========= PAGE 1 & 2 BACKGROUND MUSIC ========= */
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.loop = true;
        bgMusic.volume = 0.7;
        bgMusic.play().catch(() => {
            console.log("Background music blocked");
        });
    }

    /* ========= PAGE 3 FIREWORKS ========= */
    const fireworksContainer = document.getElementById("fireworks");
    const fireworksSound = document.getElementById("fireworksSound");

    if (fireworksContainer && fireworksSound) {

        fireworksSound.loop = true;
        fireworksSound.volume = 0.8;
        fireworksSound.play().catch(() => {
            console.log("Fireworks sound blocked");
        });

        const fireworks = new Fireworks(fireworksContainer, {
            autoresize: true,
            opacity: 0.9,
            acceleration: 1.05,
            friction: 0.96,
            gravity: 1.4,
            particles: 90,
            trace: 3,
            explosion: 6,
            delay: { min: 15, max: 30 },
            brightness: { min: 60, max: 90 },
            decay: { min: 0.015, max: 0.03 },
            rocketsPoint: { min: 40, max: 90 },
            hue: { min: 0, max: 360 },

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

    /* REMOVE LISTENERS AFTER UNLOCK */
    window.removeEventListener("click", unlockEverything);
    window.removeEventListener("touchstart", unlockEverything);
}

/* FIRST USER INTERACTION UNLOCKS EVERYTHING */
window.addEventListener("click", unlockEverything);
window.addEventListener("touchstart", unlockEverything);
