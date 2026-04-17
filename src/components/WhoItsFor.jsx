import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

const C = {
    bg: "#f3f7fd",
    white: "#ffffff",
    primary: "#1563df",
    primaryLight: "rgba(21,99,223,0.08)",
    primaryBorder: "rgba(21,99,223,0.18)",
    primarySoft: "#EEF4FF",
    dark: "#161E2D",
    mid: "#4A5568",
    muted: "#8FA3BF",
    border: "#D8E6F7",
};

const userTypes = [
    {
        badge: "For Homeowners",
        name: "Own Your\nProperty History",
        tagline: "Claim your property, verify every record, and stay in full control of your service timeline.",
        bullets: ["Claim & manage your property profile", "Verify service provider records", "Control who can access your history", "Boost your property's resale value"],
        bgGrad: "linear-gradient(160deg, #1563df 0%, #0d4fc4 100%)",
        image: "./images/home/bohemian-man.png",
        textColor: "#fff",
        bulletColor: "rgba(255,255,255,0.75)",
        badgeBg: "rgba(255,255,255,0.15)",
        badgeColor: "#fff",
    },
    {
        badge: "For Buyers & Agents",
        name: "Trust Before\nYou Buy",
        tagline: "Unlock a complete, verified service history report for any property before you commit.",
        bullets: ["Full audit trail of every maintenance event", "Verified provider credentials", "Property Health Score at a glance", "One-time $30 report unlock"],
        bgGrad: "linear-gradient(160deg, #0d4fc4 0%, #083a96 100%)",
        image: "./images/home/brunette-man.png",
        textColor: "#fff",
        bulletColor: "rgba(255,255,255,0.75)",
        badgeBg: "rgba(255,255,255,0.15)",
        badgeColor: "#fff",
    },
    {
        badge: "For Service Providers",
        name: "Build Your\nVerified Reputation",
        tagline: "Upload verified records, grow your digital credibility, and win more clients through trust.",
        bullets: ["Powerful SaaS provider dashboard", "Upload & manage service records", "Attach records to property profiles", "Build a verified work portfolio"],
        bgGrad: "linear-gradient(160deg, #EEF4FF 0%, #deeafc 100%)",
        image: "./images/home/bohemian-man.png",
        textColor: C.dark,
        bulletColor: C.mid,
        badgeBg: C.primaryLight,
        badgeColor: C.primary,
    },
    {
        badge: "For Real Estate Agents",
        name: "Close with\nConfidence",
        tagline: "Access full property reports to speed up due diligence and give buyers the trust they need.",
        bullets: ["Pull verified reports for any listing", "Identify red flags before closing", "Share history reports with buyers", "Differentiate listings with verified data"],
        bgGrad: "linear-gradient(160deg, #1a56b0 0%, #1563df 100%)",
        image: "./images/home/brunette-man.png",
        textColor: "#fff",
        bulletColor: "rgba(255,255,255,0.75)",
        badgeBg: "rgba(255,255,255,0.15)",
        badgeColor: "#fff",
    },
];

const leftBenefits = [
    { icon: "🏠", text: "Homeowners control their complete property history" },
    { icon: "🔍", text: "Buyers get verified records before they commit" },
    { icon: "🛠️", text: "Providers build a trusted digital reputation" },
    { icon: "📋", text: "Agents close faster with transparent data" },
];

const WhoItsFor = () => {
    return (
        <>
            <style>{`
                .profile-card {
                    height: 460px;
                    border-radius: 24px;
                    padding: 28px 28px 0 28px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    border: 1px solid ${C.primaryBorder};
                    box-shadow: 0 4px 24px rgba(21,99,223,0.10);
                    transition: transform 0.25s, box-shadow 0.25s;
                }
                .profile-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 40px rgba(21,99,223,0.18);
                }
                .profile-card .card-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border-radius: 100px;
                    padding: 5px 14px;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                    margin-bottom: 16px;
                    width: fit-content;
                }
                .profile-card h4 {
                    font-weight: 800;
                    font-size: 1.45rem;
                    line-height: 1.25;
                    margin-bottom: 12px;
                    white-space: pre-line;
                }
                .profile-card .card-tagline {
                    font-size: 13px;
                    line-height: 1.6;
                    margin-bottom: 16px;
                    opacity: 0.82;
                }
                .profile-card .card-bullets {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 7px;
                }
                .profile-card .card-bullets li {
                    font-size: 12px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 7px;
                }
                .profile-card .card-bullets li::before {
                    content: "✓";
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.2);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                    font-weight: 700;
                    flex-shrink: 0;
                }
                .profile-card.light-card .card-bullets li::before {
                    background: ${C.primaryLight};
                    color: ${C.primary};
                }
                .profile-img-wrapper {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    text-align: center;
                    pointer-events: none;
                }
                .profile-img-wrapper img {
                    width: 80%;
                    display: block;
                    margin: 0 -40px 0 auto;
                    opacity: 0.18;
                    mix-blend-mode: multiply;
                }
                .profile-card.dark-card .profile-img-wrapper img {
                    opacity: 0.12;
                    mix-blend-mode: screen;
                    filter: brightness(10);
                }
                .who-swiper .swiper-slide {
                    padding: 8px 6px;
                }
            `}</style>

            <section style={{
                background: C.bg,
                padding: "90px 0 90px",
                position: "relative",
                overflow: "hidden",
            }}>
                {/* Dot pattern */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(rgba(21,99,223,0.05) 1.5px, transparent 1.5px)",
                    backgroundSize: "28px 28px",
                }} />

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className="row align-items-center g-5">

                        {/* ── Left Column ── */}
                        <div data-animate="left" className="col-lg-5">

                            {/* Badge */}
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: "8px",
                                background: C.primaryLight, border: `1px solid ${C.primaryBorder}`,
                                borderRadius: "100px", padding: "6px 18px", marginBottom: "22px",
                            }}>
                                <span style={{
                                    width: "7px", height: "7px", borderRadius: "50%",
                                    background: C.primary, display: "inline-block",
                                }} />
                                <span style={{
                                    fontSize: "12px", fontWeight: "600", color: C.primary,
                                    textTransform: "uppercase", letterSpacing: "0.08em",
                                }}>
                                    Who It&apos;s For
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 style={{
                                fontSize: "clamp(28px, 3vw, 42px)", fontWeight: "800",
                                color: C.dark, lineHeight: "1.2", marginBottom: "18px",
                                letterSpacing: "-0.02em",
                            }}>
                                Built for Every{" "}
                                <span style={{
                                    background: `linear-gradient(90deg, ${C.primary}, #0099CC)`,
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}>
                                    Role
                                </span>
                                {" "}in the Property Journey
                            </h2>

                            {/* Description */}
                            <p style={{
                                fontSize: "16px", color: C.mid,
                                lineHeight: "1.75", marginBottom: "32px", maxWidth: "420px",
                            }}>
                                Whether you own, buy, sell, or service — every role in the property ecosystem gets real value from verified, structured history data.
                            </p>

                            {/* Benefits */}
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px",
                                marginBottom: "36px",
                            }}>
                                {leftBenefits.map((b, i) => (
                                    <div key={i} style={{
                                        display: "flex", alignItems: "center", gap: "14px",
                                        padding: "14px 18px",
                                        background: C.white, borderRadius: "12px",
                                        border: `1px solid ${C.border}`,
                                        boxShadow: "0 2px 8px rgba(21,99,223,0.05)",
                                        transition: "all 0.2s",
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = C.primarySoft; e.currentTarget.style.borderColor = C.primaryBorder; e.currentTarget.style.transform = "translateX(4px)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = C.white; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateX(0)"; }}
                                    >
                                        <div style={{
                                            width: "40px", height: "40px", borderRadius: "11px",
                                            background: C.primarySoft, border: `1px solid ${C.primaryBorder}`,
                                            display: "flex", alignItems: "center",
                                            justifyContent: "center", fontSize: "18px", flexShrink: 0,
                                        }}>
                                            {b.icon}
                                        </div>
                                        <span style={{ fontSize: "14px", fontWeight: "600", color: C.dark, lineHeight: "1.4" }}>
                                            {b.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                                <button style={{
                                    padding: "13px 28px", background: C.primary,
                                    border: "none", borderRadius: "10px", color: "#fff",
                                    fontWeight: "700", fontSize: "14px", cursor: "pointer",
                                    boxShadow: `0 4px 20px rgba(21,99,223,0.35)`,
                                    transition: "transform 0.15s, box-shadow 0.15s",
                                }}
                                    onMouseEnter={(e) => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 28px rgba(21,99,223,0.5)"; }}
                                    onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(21,99,223,0.35)"; }}
                                >
                                    Get Started Free →
                                </button>
                                <button style={{
                                    padding: "13px 28px", background: "transparent",
                                    border: `1.5px solid ${C.primaryBorder}`, borderRadius: "10px",
                                    color: C.primary, fontWeight: "700", fontSize: "14px",
                                    cursor: "pointer", transition: "all 0.15s",
                                }}
                                    onMouseEnter={(e) => { e.target.style.background = C.primarySoft; e.target.style.borderColor = C.primary; }}
                                    onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = C.primaryBorder; }}
                                >
                                    View Sample Report
                                </button>
                            </div>
                        </div>

                        {/* ── Right Column: Swiper ── */}
                        <div data-animate="right" className="col-lg-7">
                            <Swiper
                                className="who-swiper"
                                modules={[Autoplay]}
                                spaceBetween={16}
                                autoplay={{ delay: 2800, disableOnInteraction: false }}
                                slidesPerView={2.2}
                                breakpoints={{
                                    320: { slidesPerView: 1.3 },
                                    576: { slidesPerView: 1.8 },
                                    768: { slidesPerView: 2.2 },
                                }}
                            >
                                {userTypes.map((u, i) => (
                                    <SwiperSlide key={i}>
                                        <div
                                            className={`profile-card ${u.textColor === C.dark ? "light-card" : "dark-card"}`}
                                            style={{ background: u.bgGrad }}
                                        >
                                            {/* Badge */}
                                            <div className="card-badge" style={{ background: u.badgeBg, color: u.badgeColor, border: u.textColor === C.dark ? `1px solid ${C.primaryBorder}` : "1px solid rgba(255,255,255,0.2)" }}>
                                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: u.badgeColor, display: "inline-block" }} />
                                                {u.badge}
                                            </div>

                                            {/* Name */}
                                            <h4 style={{ color: u.textColor }}>{u.name}</h4>

                                            {/* Tagline */}
                                            <p className="card-tagline" style={{ color: u.textColor }}>{u.tagline}</p>

                                            {/* Bullets */}
                                            <ul className="card-bullets">
                                                {u.bullets.map((b, j) => (
                                                    <li key={j} style={{ color: u.bulletColor }}>{b}</li>
                                                ))}
                                            </ul>

                                            {/* Person image */}
                                            <div className="profile-img-wrapper">
                                                <img src={u.image} alt={u.badge} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default WhoItsFor;
