import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PROPERTIES } from "../data/properties";
import { initMain } from "../js/main";
import { initShortcodes } from "../js/shortcodes";
import { initCarousels } from "../js/carousel";
import { initRangeSliders } from "../js/rangle-slider";
import { initAnimationHeading } from "../js/animation_heading";
import { initScrollAnimations } from "../animations";

const scoreColor = (score) => (score >= 90 ? "#16A34A" : score >= 75 ? "#1563df" : "#D97706");

const PropertyDetails = () => {
    const { id } = useParams();
    const property = PROPERTIES.find((item) => item.id === id);

    useEffect(() => {
        if (window.jQuery) {
            const $ = window.jQuery;
            try {
                initMain($);
                initShortcodes($);
                initCarousels($);
                initRangeSliders($);
                initAnimationHeading($);
            } catch (err) {
                console.error("Plugin initialization error:", err);
            }
        }

        if (window.WOW) {
            new window.WOW().init();
        }

        initScrollAnimations();
    }, []);

    if (!property) {
        return (
            <div id="wrapper">
                <div id="pagee" className="clearfix">
                    <Header />
                    <section className="flat-section">
                        <div className="container text-center">
                            <h2>Property not found</h2>
                            <p className="text-variant-1 mt-12">The requested property detail does not exist.</p>
                            <Link to="/all-properties" className="tf-btn primary size-1 mt-20">Back to All Properties</Link>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        );
    }

    return (
        <div id="wrapper">
            <div id="pagee" className="clearfix">
                <Header />

                <section
                    className="flat-title-page"
                    style={{ backgroundImage: "url(https://homelengo.vercel.app/images/page-title/page-title-1.jpg)" }}
                >
                    <div className="container">
                        <div className="breadcrumb-content">
                            <ul className="breadcrumb">
                                <li><a href="/" className="text-white">Home</a></li>
                                <li><a href="/all-properties" className="text-white">/ All Properties</a></li>
                                <li className="text-white">/ Property Details</li>
                            </ul>
                            <h1 className="text-center text-white title">Property Details</h1>
                            <p className="text-center text-white body-2 mt-12">
                                Single property profile with verified history and records.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="flat-section">
                    <div className="container">
                        <div style={{ background: "#fff", border: "1px solid #d8e6f7", borderRadius: "18px", overflow: "hidden", boxShadow: "0 12px 34px rgba(21,99,223,0.1)" }}>
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <img src={property.img} alt={property.address} style={{ width: "100%", height: "100%", minHeight: "360px", objectFit: "cover" }} />
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ padding: "34px" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                                            <span style={{ background: "rgba(21,99,223,0.08)", border: "1px solid rgba(21,99,223,0.2)", color: "#1563df", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", fontWeight: "700" }}>
                                                {property.type}
                                            </span>
                                            <span style={{ fontWeight: "800", color: scoreColor(property.score), fontSize: "16px" }}>
                                                Score {property.score}
                                            </span>
                                        </div>

                                        <h3 style={{ marginBottom: "10px" }}>{property.address}</h3>
                                        <p className="text-variant-1" style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "24px" }}>
                                            {property.tag}
                                        </p>

                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                                            <div style={{ background: "#f3f7fd", border: "1px solid #d8e6f7", borderRadius: "10px", padding: "12px" }}>
                                                <div style={{ fontSize: "12px", color: "#8fa3bf" }}>Verified Records</div>
                                                <div style={{ fontSize: "18px", fontWeight: "800" }}>{property.records}</div>
                                            </div>
                                            <div style={{ background: "#f3f7fd", border: "1px solid #d8e6f7", borderRadius: "10px", padding: "12px" }}>
                                                <div style={{ fontSize: "12px", color: "#8fa3bf" }}>Property ID</div>
                                                <div style={{ fontSize: "18px", fontWeight: "800" }}>{property.id}</div>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                                            <button className="tf-btn primary size-1">Unlock Full Report - $30</button>
                                            <Link to="/all-properties" className="tf-btn btn-line">Back to All Properties</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default PropertyDetails;
