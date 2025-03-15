"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "../globals.css";
import Image from "next/image";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        // Show navbar only when at the top of the page
        if (window.scrollY === 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
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
            <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/events">Events</Link></li>
            </ul>
        </nav>
    );
}
