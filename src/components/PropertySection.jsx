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
    cardShadow: "0 4px 24px rgba(21,99,223,0.08)",
};

const problemItems = [
    { icon: "✗", text: "Scattered, unverified service records across emails and paper" },
    { icon: "✗", text: "No structured property history for buyers to review" },
    { icon: "✗", text: "Hard to prove maintenance was done when selling" },
    { icon: "✗", text: "Manual, inconsistent documentation from providers" },
];

const solutionItems = [
    { icon: "✓", text: "Property-centric structured data model" },
    { icon: "✓", text: "Verified service timeline built over time" },
    { icon: "✓", text: "Privacy-first, owner-controlled sharing" },
    { icon: "✓", text: "Trusted reports buyers and agents can rely on" },
];

const steps = [
    {
        number: "01",
        icon: "🛠️",
        title: "Log Service Records",
        desc: "Service providers upload verified records directly to the property profile — digitizing every maintenance event in real time.",
        tag: "For Providers",
    },
    {
        number: "02",
        icon: "📋",
        title: "Build Property Timeline",
        desc: "Every record adds to a chronological, structured history of the property — creating a complete audit trail over time.",
        tag: "Automated",
    },
    {
        number: "03",
        icon: "🔓",
        title: "Unlock Verified Reports",
        desc: "Homeowners control their data. Buyers and agents pay once to unlock the full, verified property intelligence report.",
        tag: "For Buyers",
    },
];

const PropertySection = () => {
    return (
        <section style={{ background: C.bg, padding: "90px 0 80px", position: "relative", overflow: "hidden" }}>

            {/* Subtle background dots */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "radial-gradient(rgba(21,99,223,0.06) 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
            }} />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>

                {/* ── Section Header ── */}
                <div data-animate="up" style={{ textAlign: "center", marginBottom: "60px" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        background: C.primaryLight, border: `1px solid ${C.primaryBorder}`,
                        borderRadius: "100px", padding: "6px 18px", marginBottom: "20px",
                    }}>
                        <span style={{
                            width: "7px", height: "7px", borderRadius: "50%",
                            background: C.primary, display: "inline-block",
                        }} />
                        <span style={{
                            fontSize: "12px", fontWeight: "600", color: C.primary,
                            textTransform: "uppercase", letterSpacing: "0.08em",
                        }}>
                            Why It Matters
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: "800",
                        color: C.dark, lineHeight: "1.2", marginBottom: "16px",
                        letterSpacing: "-0.02em",
                    }}>
                        The Problem We Solve —{" "}
                        <span style={{
                            background: `linear-gradient(90deg, ${C.primary}, #0099CC)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>
                            and How
                        </span>
                    </h2>
                    <p style={{
                        fontSize: "17px", color: C.mid, maxWidth: "560px",
                        margin: "0 auto", lineHeight: "1.7",
                    }}>
                        Property service history has always been fragmented and untrusted.
                        We fix that with verified, structured data that builds value over time.
                    </p>
                </div>

                {/* ── Problem / Solution Split ── */}
                <div className="row g-4 mb-5">

                    {/* Problem */}
                    <div data-animate="left" className="col-lg-6">
                        <div style={{
                            background: C.white, borderRadius: "20px",
                            border: `1px solid ${C.border}`, height: "100%",
                            boxShadow: C.cardShadow, overflow: "hidden",
                        }}>
                            {/* Card header */}
                            <div style={{
                                padding: "20px 28px 18px",
                                borderBottom: `1px solid ${C.border}`,
                                background: "#FFF8F8",
                                display: "flex", alignItems: "center", gap: "12px",
                            }}>
                                <div style={{
                                    width: "40px", height: "40px", borderRadius: "10px",
                                    background: "rgba(220,53,69,0.08)",
                                    border: "1px solid rgba(220,53,69,0.18)",
                                    display: "flex", alignItems: "center",
                                    justifyContent: "center", fontSize: "18px", flexShrink: 0,
                                }}>
                                    ⚠️
                                </div>
                                <div style={{

                                    display: "flex",
                                    flexDirection: "column",
                                }}>

                                    <div style={{
                                        fontSize: "11px",
                                        textTransform: "uppercase",
                                        color: C.muted,
                                        fontWeight: "600",
                                        margin: 0,
                                        lineHeight: "1.5" // control spacing
                                    }}>
                                        The Current Reality
                                    </div>

                                    <h4 style={{
                                        fontSize: "22px",
                                        fontWeight: "800",
                                        color: C.dark,
                                        padding: 0,
                                        margin: 0,
                                        lineHeight: "1.2" // VERY important
                                    }}>
                                        The Problem
                                    </h4>

                                </div>
                            </div>

                            <div style={{ padding: "10px 28px 10px" }}>
                                <p style={{
                                    fontSize: "15px", fontWeight: "600",
                                    color: "#B91C1C", margin: "18px 0 20px",
                                    lineHeight: "1.5",
                                }}>
                                    Property service history is fragmented and unreliable.
                                </p>

                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "24px" }}>
                                    {problemItems.map((item, i) => (
                                        <div key={i} style={{
                                            display: "flex", alignItems: "flex-start", gap: "12px",
                                            padding: "12px 14px", borderRadius: "10px",
                                            background: "rgba(220,53,69,0.04)",
                                            border: "1px solid rgba(220,53,69,0.10)",
                                        }}>
                                            <span style={{
                                                width: "22px", height: "22px", borderRadius: "50%",
                                                background: "rgba(220,53,69,0.12)",
                                                color: "#DC3545", fontSize: "13px", fontWeight: "700",
                                                display: "flex", alignItems: "center",
                                                justifyContent: "center", flexShrink: 0, marginTop: "1px",
                                            }}>
                                                {item.icon}
                                            </span>
                                            <span style={{ fontSize: "14px", color: C.mid, lineHeight: "1.5" }}>
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div data-animate="right" className="col-lg-6">
                        <div style={{
                            background: C.white, borderRadius: "20px",
                            border: `1px solid ${C.primaryBorder}`, height: "100%",
                            boxShadow: `0 4px 24px rgba(21,99,223,0.10)`, overflow: "hidden",
                        }}>
                            {/* Card header */}
                            <div style={{
                                padding: "20px 28px 18px",
                                borderBottom: `1px solid ${C.primaryBorder}`,
                                background: C.primarySoft,
                                display: "flex", alignItems: "center", gap: "12px",
                            }}>
                                <div style={{
                                    width: "40px", height: "40px", borderRadius: "10px",
                                    background: C.primaryLight, border: `1px solid ${C.primaryBorder}`,
                                    display: "flex", alignItems: "center",
                                    justifyContent: "center", fontSize: "18px", flexShrink: 0,
                                }}>
                                    ✅
                                </div>
                                <div style={{

                                    display: "flex",
                                    flexDirection: "column",
                                }}>

                                    <div style={{
                                        fontSize: "11px",
                                        textTransform: "uppercase",
                                        color: C.muted,
                                        fontWeight: "600",
                                        margin: 0,
                                        lineHeight: "1.5" // control spacing
                                    }}>
                                        What We Built
                                    </div>
                                    <h4 style={{
                                        fontSize: "22px",
                                        fontWeight: "800",
                                        color: C.dark,
                                        padding: 0,
                                        margin: 0,
                                        lineHeight: "1.2" // VERY important
                                    }}>
                                        The Solution
                                    </h4>
                                </div>
                            </div>

                            <div style={{ padding: "10px 28px 10px" }}>
                                <p style={{
                                    fontSize: "15px", fontWeight: "600",
                                    color: C.primary, margin: "18px 0 20px",
                                    lineHeight: "1.5",
                                }}>
                                    A centralized, verified property history platform.
                                </p>

                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "24px" }}>
                                    {solutionItems.map((item, i) => (
                                        <div key={i} style={{
                                            display: "flex", alignItems: "flex-start", gap: "12px",
                                            padding: "12px 14px", borderRadius: "10px",
                                            background: C.primaryLight,
                                            border: `1px solid ${C.primaryBorder}`,
                                        }}>
                                            <span style={{
                                                width: "22px", height: "22px", borderRadius: "50%",
                                                background: C.primary,
                                                color: "#fff", fontSize: "12px", fontWeight: "700",
                                                display: "flex", alignItems: "center",
                                                justifyContent: "center", flexShrink: 0, marginTop: "1px",
                                            }}>
                                                {item.icon}
                                            </span>
                                            <span style={{ fontSize: "14px", color: C.mid, lineHeight: "1.5" }}>
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── How It Works ── */}
                <div style={{
                    background: C.white, borderRadius: "24px",
                    border: `1px solid ${C.border}`,
                    boxShadow: C.cardShadow, padding: "44px 40px 40px",
                    marginTop: "16px",
                }}>
                    {/* Sub-header */}
                    <div style={{ textAlign: "center", marginBottom: "44px" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            background: C.primaryLight, border: `1px solid ${C.primaryBorder}`,
                            borderRadius: "100px", padding: "5px 16px", marginBottom: "14px",
                        }}>
                            <span style={{ fontSize: "12px", fontWeight: "600", color: C.primary, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                How It Works
                            </span>
                        </div>
                        <h3 style={{
                            fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: "800",
                            color: C.dark, margin: 0, letterSpacing: "-0.01em",
                        }}>
                            Three steps to complete property intelligence
                        </h3>
                    </div>

                    {/* Steps */}
                    <div data-stagger className="row g-4" style={{ position: "relative" }}>

                        {/* Connector line (desktop only) */}
                        <div style={{
                            position: "absolute", top: "44px", left: "calc(16.666% + 24px)",
                            width: "calc(66.666% - 48px)", height: "2px",
                            background: `linear-gradient(90deg, ${C.primary}, #0099CC)`,
                            opacity: 0.2, zIndex: 0,
                        }} className="d-none d-lg-block" />

                        {steps.map((step, i) => (
                            <div key={i} className="col-lg-4" style={{ position: "relative", zIndex: 1 }}>
                                <div style={{
                                    background: C.bg, borderRadius: "16px",
                                    border: `1px solid ${C.border}`,
                                    padding: "28px 24px", height: "100%",
                                    transition: "all 0.25s",
                                    cursor: "default",
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = C.primarySoft;
                                        e.currentTarget.style.borderColor = C.primaryBorder;
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.boxShadow = `0 12px 32px rgba(21,99,223,0.12)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = C.bg;
                                        e.currentTarget.style.borderColor = C.border;
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    {/* Number + Icon row */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                                        <div style={{
                                            width: "48px", height: "48px", borderRadius: "14px",
                                            background: C.primary,
                                            boxShadow: `0 4px 14px rgba(21,99,223,0.35)`,
                                            display: "flex", alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "20px", flexShrink: 0,
                                        }}>
                                            {step.icon}
                                        </div>
                                        <div style={{
                                            fontSize: "32px", fontWeight: "900",
                                            color: C.primaryLight,
                                            WebkitTextStroke: `1.5px ${C.primaryBorder}`,
                                            lineHeight: 1,
                                        }}>
                                            {step.number}
                                        </div>
                                        <div style={{ marginLeft: "auto" }}>
                                            <span style={{
                                                padding: "3px 10px", background: C.primaryLight,
                                                border: `1px solid ${C.primaryBorder}`,
                                                borderRadius: "100px", fontSize: "11px",
                                                fontWeight: "600", color: C.primary,
                                            }}>
                                                {step.tag}
                                            </span>
                                        </div>
                                    </div>

                                    <h5 style={{
                                        fontSize: "17px", fontWeight: "800",
                                        color: C.dark, marginBottom: "10px", lineHeight: "1.3",
                                    }}>
                                        {step.title}
                                    </h5>
                                    <p style={{
                                        fontSize: "14px", color: C.mid,
                                        lineHeight: "1.7", margin: 0,
                                    }}>
                                        {step.desc}
                                    </p>

                                    {/* Step indicator dot */}
                                    {i < steps.length - 1 && (
                                        <div style={{
                                            position: "absolute", top: "44px", right: "-8px",
                                            width: "16px", height: "16px", borderRadius: "50%",
                                            background: C.primary, border: `3px solid ${C.white}`,
                                            boxShadow: `0 0 0 2px ${C.primaryBorder}`,
                                            zIndex: 2,
                                        }} className="d-none d-lg-block" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA strip */}
                    <div style={{
                        marginTop: "36px", padding: "22px 28px",
                        background: `linear-gradient(135deg, ${C.primarySoft}, #deeafc)`,
                        borderRadius: "14px", border: `1px solid ${C.primaryBorder}`,
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
                    }}>
                        <div>
                            <div style={{ fontSize: "16px", fontWeight: "700", color: C.dark, marginBottom: "4px" }}>
                                Ready to see your property's full history?
                            </div>
                            <div style={{ fontSize: "14px", color: C.mid }}>
                                Search any property and unlock a verified report in minutes.
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                            <button style={{
                                padding: "11px 24px", background: C.primary,
                                border: "none", borderRadius: "10px", color: "#fff",
                                fontWeight: "700", fontSize: "14px", cursor: "pointer",
                                boxShadow: `0 4px 16px rgba(21,99,223,0.3)`,
                                transition: "transform 0.15s, box-shadow 0.15s",
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "translateY(-1px)";
                                    e.target.style.boxShadow = "0 6px 24px rgba(21,99,223,0.45)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "translateY(0)";
                                    e.target.style.boxShadow = "0 4px 16px rgba(21,99,223,0.3)";
                                }}
                            >
                                Search a Property →
                            </button>
                            <button style={{
                                padding: "11px 24px",
                                background: "transparent",
                                border: `1.5px solid ${C.primaryBorder}`,
                                borderRadius: "10px", color: C.primary,
                                fontWeight: "700", fontSize: "14px", cursor: "pointer",
                                transition: "all 0.15s",
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = C.primaryLight;
                                    e.target.style.borderColor = C.primary;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = "transparent";
                                    e.target.style.borderColor = C.primaryBorder;
                                }}
                            >
                                For Service Providers
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PropertySection;
