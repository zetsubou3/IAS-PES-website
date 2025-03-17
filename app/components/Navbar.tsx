"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "../globals.css";
import Image from "next/image";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle scroll event to show/hide navbar
    const handleScroll = () => {
        // Show navbar only when at the top of the page
        if (window.scrollY === 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isVisible ? "" : "hidden"}`}>
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={150} height={80} />
                </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Navbar Links */}
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/events">Events</Link></li>
            </ul>
        </nav>
    );
}
