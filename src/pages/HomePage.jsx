import React from "react";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Fitur from "../components/Landing/Fitur";
import Rekomendasi from "../components/Landing/Rekomendasi";
import Contact from "../components/Landing/Contact";
import Footer from "../components/Landing/Footer";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Fitur />
            <Rekomendasi />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
