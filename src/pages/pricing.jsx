import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingSection from "../components/PricingSection";
import { initMain } from "../js/main";
import { initShortcodes } from "../js/shortcodes";
import { initCarousels } from "../js/carousel";
import { initRangeSliders } from "../js/rangle-slider";
import { initAnimationHeading } from "../js/animation_heading";

const Pricing = () => {
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
    }, []);

    return (
        <div id="wrapper">
            <div id="pagee" className="clearfix">
                <Header />

                <section
                    className="flat-title-page"
                    style={{ backgroundImage: "url(https://homelengo.vercel.app/images/page-title/page-title-2.jpg)" }}
                >
                    <div className="container">
                        <div className="breadcrumb-content">
                            <ul className="breadcrumb">
                                <li><a href="/" className="text-white">Home</a></li>
                                <li className="text-white">/ Pricing</li>
                            </ul>
                            <h1 className="text-center text-white title">Pricing</h1>
                            <p className="text-center text-white body-2 mt-12">
                                Unlock verified property reports with transparent pricing before you buy.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="mt-5">
                    <PricingSection />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Pricing;
