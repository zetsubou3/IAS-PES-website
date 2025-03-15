"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../globals.css";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled to the bottom of the page
            const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
            const bottomPosition = document.documentElement.offsetHeight;

            if (scrollPosition >= bottomPosition) {
                setIsVisible(true); // Show footer when scrolled to the bottom
            } else {
                setIsVisible(false); // Hide footer when not at the bottom
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className={`footer ${isVisible ? "visible" : "hidden"}`}>
            <p>&copy; {new Date().getFullYear()} IEEE IAS-PES ENIT SBJC. All Rights Reserved.</p>
            <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=61557516737236" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/company/ieee-pes-ias-enit-student-branch-joint-chapter/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/ieee.ias.pes.enit.sbc/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
}
