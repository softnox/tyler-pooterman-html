import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Shared defaults ─────────────────────────────────────────────────── */
const EASE     = "power2.out";
const DUR      = 0.95;
const DUR_FAST = 0.5;
const Y_DIST   = 32;
const X_DIST   = 44;
const STAGGER  = 0.09;

/* ─── Single element helper ─────────────────────────────────────────────
   Usage: <div data-animate="up|left|right|scale">
*/
function revealSingle() {
    gsap.utils.toArray("[data-animate]").forEach((el) => {
        const dir = el.dataset.animate || "up";
        const from = { opacity: 0 };

        if (dir === "up"    || dir === "scale") from.y = Y_DIST;
        if (dir === "left")  from.x = -X_DIST;
        if (dir === "right") from.x =  X_DIST;
        if (dir === "scale") { from.scale = 0.96; from.y = 16; }

        const delay = parseFloat(el.dataset.animateDelay || 0);

        gsap.fromTo(el, from, {
            opacity: 1, y: 0, x: 0, scale: 1,
            duration: DUR,
            ease: EASE,
            delay,
            clearProps: "transform",
            scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
            },
        });
    });
}

/* ─── Staggered children helper ─────────────────────────────────────────
   Usage: <div data-stagger>  — direct children stagger in
*/
function revealStagger() {
    gsap.utils.toArray("[data-stagger]").forEach((parent) => {
        const children = Array.from(parent.children);
        const delay    = parseFloat(parent.dataset.staggerDelay || STAGGER);

        gsap.fromTo(
            children,
            { opacity: 0, y: Y_DIST },
            {
                opacity: 1, y: 0,
                duration: DUR_FAST,
                ease: EASE,
                stagger: delay,
                clearProps: "transform",
                scrollTrigger: {
                    trigger: parent,
                    start: "top 88%",
                    once: true,
                },
            }
        );
    });
}

/* ─── Public init — call once after DOM is ready ─────────────────────── */
export function initScrollAnimations() {
    // Small timeout so React has flushed all renders
    setTimeout(() => {
        revealSingle();
        revealStagger();
        ScrollTrigger.refresh();
    }, 120);
}

/* ─── Hero entrance — call inside HeroSection on mount ──────────────────
   Plays immediately (no scroll), sequentially from top to bottom.
*/
export function playHeroEntrance() {
    const tl = gsap.timeline({ defaults: { ease: EASE, duration: DUR_FAST } });

    tl.fromTo("[data-hero-seq]",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, stagger: 0.1 },
        0
    );

    tl.fromTo("[data-hero-right]",
        { opacity: 0, x: 36 },
        { opacity: 1, x: 0, duration: 0.7, clearProps: "transform" },
        0.25
    );

    return tl;
}
