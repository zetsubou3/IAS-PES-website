"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import '../globals.css';


const upcomingEvents = [
    {
        title: 'Stay Tuned!',
        date: '',
        description: 'Check back soon for updates!',
        imageUrl: '/images/events/stay-tuned.png', // You can replace this with a placeholder image
    },
    {
        title: 'Stay Tuned!',
        date: '',
        description: 'Check back soon for updates!',
        imageUrl: '/images/events/stay-tuned.png', // You can replace this with a placeholder image
    },
    {
        title: 'Stay Tuned!',
        date: '',
        description: 'Check back soon for updates!',
        imageUrl: '/images/events/stay-tuned.png', // You can replace this with a placeholder image
    },
];

const pastEvents = [

    {
        title: 'GreenCon 3.0',
        date: '2025-02-26',
        description: 'An event where the brightest minds will compete to propose the most innovative and sustainable technological solutions to tackle a pressing environmental challenge.',
        imageUrl: '/images/events/greencon.jpg', // Add image if available
    },
    {
        title: 'Public Speaking Workshop',
        date: '2025-02-12',
        description: 'Through interactive exercises and expert guidance, participants enhanced their communication skills and gained the confidence to speak with impact. ',
        imageUrl: '/images/events/public-speaking.jpg', // Add image if available
    },

    {
        title: 'Green Bot Infosession',
        date: '2024-11-26',
        description: 'An informational session about the Green Bot project, focusing on sustainable technology initiatives.',
        imageUrl: '/images/events/green_bot.jpg', // Add image if available
    },
    {
        title: 'Aquaquest Infosession',
        date: '2024-11-24',
        description: 'An infosession discussing the Aquaquest project, aimed at innovative solutions in water management.',
        imageUrl: '/images/events/aquaquest.jpg', // Add image if available
    },
    {
        title: 'Celebrating 8 Years of IAS ENIT',
        date: '2024-11-23',
        description: 'A celebration marking the 8th anniversary of the IAS ENIT, highlighting achievements and future goals.',
        imageUrl: '/images/events/ias-anniversary.jpg', // Add image if available
    },

    {
        title: 'ENIF Infosession',
        date: '2024-11-20',
        description: 'An event providing insights into the ENIF project, focusing on industrial applications and energy solutions.',
        imageUrl: '/images/events/enif.jpg', // Add image if available
    },
    {
        title: 'TUNED Debate',
        date: '2024-11-17',
        description: 'A debate session as part of the TUNED event, encouraging discussions on engineering and technology topics.',
        imageUrl: '/images/events/tuned-debate.jpg', // Add image if available
    },
    {
        title: 'LinkedIn Workshop',
        date: '2024-11-09',
        description: 'A workshop aimed at enhancing professional networking skills using LinkedIn.',
        imageUrl: '/images/events/linkedin-workshop.jpg', // Add image if available
    },
    {
        title: 'IOTSPARK Infosession',
        date: '2024-11-06',
        description: 'An informational session on the IOTSPARK project, focusing on IoT innovations.',
        imageUrl: '/images/events/iotspark.jpg', // Add image if available
    },
    {
        title: 'IASTAM 4.0 Participation',
        date: '2024-10-13',
        description: 'Participation in the IASTAM 4.0 event, showcasing advancements in industrial applications.',
        imageUrl: '/images/events/iastram.jpg', // Add image if available
    },


    {
        title: 'IAS Workshop',
        date: '2024-10-10',
        description: 'A workshop organized by the IAS chapter, focusing on industrial automation.',
        imageUrl: '/images/events/ias-workshop.jpg'
    },
    {
        title: 'High Performing Chapter Award',
        date: '',
        description: 'Recognition event for achieving the High Performing Chapter Award.',
        imageUrl: '/images/events/award.jpg'
    },
    {
        title: 'Celebrating 6 Years of PES ENIT',
        date: '2024-08-14',
        description: 'Celebration marking the 6th anniversary of the PES ENIT chapter.',
        imageUrl: '/images/events/pes-anniversary.jpg'
    },

    {
        title: 'Safran Company Visit',
        date: '2024-05-08',
        description: 'A company visit to Safran, providing insights into aerospace technologies.',
        imageUrl: '/images/events/safran-visit.jpg'
    },
    {
        title: 'PES Zero Hunger Day',
        date: '2024-05-05',
        description: 'An event dedicated to addressing hunger issues, organized by the PES chapter.',
        imageUrl: '/images/events/zero-hunger.jpg'
    },
    {
        title: 'ITTT Workshop',
        date: '2024-05-05',
        description: 'An ITTT workshop focusing on innovative teaching techniques in technology.',
        imageUrl: '/images/events/ittt-workshop.jpg'
    },
    {
        title: 'SAP Workshop',
        date: '2024-05-04',
        description: 'A workshop on SAP software, focusing on enterprise resource planning.',
        imageUrl: '/images/events/sap-workshop.jpg'
    },
    {
        title: 'Webinar Series',
        date: '2024-04-23',
        description: 'A series of webinars covering various topics in industrial applications and power systems.',
        imageUrl: '/images/events/webinar-series.jpg'
    },
    {
        title: 'COPx 1.0',
        date: '2024-04-22',
        description: 'The inaugural COPx event, discussing climate change and global energy challenges.',
        imageUrl: '/images/events/copx.jpg'
    },
    {
        title: 'Solidworks Workshop',
        date: '2024-04-16',
        description: 'A workshop on SolidWorks covering 3D modeling, assembly design, and engineering analysis for practical applications.',
        imageUrl: '/images/events/solidworks-workshop.jpg'
    },
    {
        title: 'Sponsoring Workshop',
        date: '2024-04-03',
        description: 'A workshop on securing sponsorships for technical events and projects.',
        imageUrl: '/images/events/sponsoring-workshop.jpg'
    },

    {
        title: 'Distinguished Lecture Program',
        date: '2024-03-31',
        description: 'A lecture series featuring distinguished speakers in the field of industrial applications.',
        imageUrl: '/images/events/distinguished-lecture.jpg'
    },

    {
        title: 'DevOps Workshop',
        date: '2024-03-05',
        description: 'A workshop on DevOps practices, aiming to improve development and operational efficiencies.',
        imageUrl: '/images/events/devops-workshop.jpg'
    },



];


const EVENTS_PER_PAGE = 6;

export default function Events() {
    const [currentPageUpcoming, setCurrentPageUpcoming] = useState(1);
    const [currentPagePast, setCurrentPagePast] = useState(1);

    const totalPagesUpcoming = Math.ceil(upcomingEvents.length / EVENTS_PER_PAGE);
    const totalPagesPast = Math.ceil(pastEvents.length / EVENTS_PER_PAGE);

    const startIndexUpcoming = (currentPageUpcoming - 1) * EVENTS_PER_PAGE;
    const currentUpcomingEvents = upcomingEvents.slice(startIndexUpcoming, startIndexUpcoming + EVENTS_PER_PAGE);

    const startIndexPast = (currentPagePast - 1) * EVENTS_PER_PAGE;
    const currentPastEvents = pastEvents.slice(startIndexPast, startIndexPast + EVENTS_PER_PAGE);

    return (
        <div>
            <Navbar />
            <main className="events-main flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24">

                {/* Upcoming Events Section */}
                <section className="event-section">
                    <h1 className="event-title text-3xl sm:text-4xl md:text-5xl font-bold text-center">Upcoming Events</h1>
                    <p className="event-description text-lg sm:text-xl md:text-2xl text-center mb-6">
                        Stay tuned for our upcoming technology and innovation events.
                    </p>
                </section>

                {/* Upcoming Events Horizontal Scroll */}
                <div className="w-full flex justify-start overflow-x-auto py-6">
                    <div className="events-list flex space-x-6 lg:space-x-12">
                        {currentUpcomingEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                imageUrl={event.imageUrl || '/images/default-placeholder.png'}
                            />
                        ))}
                    </div>
                </div>

                {/* Pagination for Upcoming Events */}
                <div className="pagination flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => setCurrentPageUpcoming(currentPageUpcoming - 1)}
                        disabled={currentPageUpcoming === 1}
                        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                        aria-label="Previous Page of Upcoming Events"
                    >
                        Previous
                    </button>
                    <span className="text-lg">Page {currentPageUpcoming} of {totalPagesUpcoming}</span>
                    <button
                        onClick={() => setCurrentPageUpcoming(currentPageUpcoming + 1)}
                        disabled={currentPageUpcoming === totalPagesUpcoming}
                        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                        aria-label="Next Page of Upcoming Events"
                    >
                        Next
                    </button>
                </div>

                {/* Past Events Section */}
                <section className="event-section mt-16">
                    <h1 className="event-title text-3xl sm:text-4xl md:text-5xl font-bold text-center">Past Events</h1>
                    <p className="event-description text-lg sm:text-xl md:text-2xl text-center mb-6">
                        Take a look at some of our previous events.
                    </p>
                </section>

                {/* Past Events Horizontal Scroll */}
                <div className="w-full flex justify-start overflow-x-auto py-6">
                    <div className="events-list flex space-x-6 lg:space-x-12">
                        {currentPastEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                imageUrl={event.imageUrl || '/images/default-placeholder.png'}
                            />
                        ))}
                    </div>
                </div>

                {/* Pagination for Past Events */}
                <div className="pagination flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => setCurrentPagePast(currentPagePast - 1)}
                        disabled={currentPagePast === 1}
                        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                        aria-label="Previous Page of Past Events"
                    >
                        Previous
                    </button>
                    <span className="text-lg">Page {currentPagePast} of {totalPagesPast}</span>
                    <button
                        onClick={() => setCurrentPagePast(currentPagePast + 1)}
                        disabled={currentPagePast === totalPagesPast}
                        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                        aria-label="Next Page of Past Events"
                    >
                        Next
                    </button>
                </div>

            </main>
            <Footer />
        </div>
    );
}

