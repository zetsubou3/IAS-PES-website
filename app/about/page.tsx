"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import Image from "next/image";
import "../globals.css";

export default function About() {
    const [members, setMembers] = useState(0);
    const [activities, setActivities] = useState(0);

    useEffect(() => {
        // Smooth counting animation for members
        const memberCount = 100; // Target number for members
        const memberInterval = setInterval(() => {
            setMembers(prev => {
                if (prev < memberCount) {
                    return prev + 1;
                }
                clearInterval(memberInterval);
                return prev;
            });
        }, 10);

        // Smooth counting animation for annual activities
        const activityCount = 40; // Target number for activities
        const activityInterval = setInterval(() => {
            setActivities(prev => {
                if (prev < activityCount) {
                    return prev + 1;
                }
                clearInterval(activityInterval);
                return prev;
            });
        }, 20);

        // Cleanup the intervals when the component is unmounted
        return () => {
            clearInterval(memberInterval);
            clearInterval(activityInterval);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-about-page">

            <Navbar />

            {/* Hero Section */}
            <section className="hero-section relative w-full h-[60vh] flex items-center justify-center">
                <div className="absolute text-center hero-box">
                    <h1 className="text-5xl font-bold">About IEEE IAS-PES ENIT SBJC</h1>
                    <p className="text-lg mt-2">Empowering students in industrial applications, power, and energy.</p>
                </div>
            </section>

            {/* About Section */}
            <main className="flex-1 container mx-auto px-6 py-16 text-center">

                {/* Combined "Who We Are" and "What We Do" Section */}
                <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
                    {/* Who We Are */}
                    <div className="section-content">
                        <h2 className="text-3xl font-semibold text-green-600">Who We Are</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4">
                            The IEEE ENIT IAS-PES Joint Chapter brings together students at the National Engineering School
                            of Tunis (ENIT) to explore advancements in industrial applications, power systems, and energy
                            solutions. It was formed from the merger of the IEEE IAS ENIT Student Branch Chapter
                            (established in 2016) and the IEEE PES ENIT Student Branch Chapter (established in 2018),
                            building on their legacy of excellence to create a dynamic platform for knowledge exchange
                            and professional growth.
                        </p>
                    </div>

                    {/* What We Do */}
                    <div className="section-content mt-8">
                        <h2 className="text-3xl font-semibold text-orange-600">What We Do</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4">
                            We promote innovation by hosting technical workshops, seminars, and collaborative
                            projects that bridge the gap between academic knowledge and real-world challenges.
                            Our focus areas include renewable energy, smart grids, and industrial automation,
                            fostering a hands-on approach to addressing global energy and industry needs.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <h2>Our Impact</h2>
                    <div className="stats">
                        <div className="stat-box">
                            <div className="stat-number">{members}+</div>
                            <div className="stat-text">Members</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">{activities}+</div>
                            <div className="stat-text">Annual Activities</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">2023</div>
                            <div className="stat-text">Foundation Year</div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <div className="mt-16">
                    <TeamSection />
                </div>
            </main>

            <Footer />
        </div>
    );
}
