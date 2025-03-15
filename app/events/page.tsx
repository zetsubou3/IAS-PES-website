"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import '../globals.css';

const upcomingEvents = [
    {
        title: 'PES Day',
        date: '2025-05-10',
        description: 'A special day dedicated to the Power and Energy Society, focusing on advancements and innovations in power and energy systems.',
        imageUrl: '/images/pes-day.jpg', // Add image if available
    },
];

const pastEvents = [
    {
        title: 'Green Bot Infosession',
        date: '2024-11-10',
        description: 'An informational session about the Green Bot project, focusing on sustainable technology initiatives.',
        imageUrl: '/images/events/green_bot.jpg', // Add image if available
    },
    {
        title: 'Celebrating 8 Years of IAS ENIT',
        date: '2023-05-20',
        description: 'A celebration marking the 8th anniversary of the IAS ENIT, highlighting achievements and future goals.',
        imageUrl: '/images/events/ias-anniversary.jpg', // Add image if available
    },
    {
        title: 'Aquaquest Infosession',
        date: '2023-07-15',
        description: 'An infosession discussing the Aquaquest project, aimed at innovative solutions in water management.',
        imageUrl: '/images/events/aquaquest.jpg', // Add image if available
    },
    {
        title: 'ENIF Infosession',
        date: '2023-09-05',
        description: 'An event providing insights into the ENIF project, focusing on industrial applications and energy solutions.',
        imageUrl: '/images/events/enif.jpg', // Add image if available
    },
    {
        title: 'TUNED Debate',
        date: '2023-06-30',
        description: 'A debate session as part of the TUNED event, encouraging discussions on engineering and technology topics.',
        imageUrl: '/images/events/tuned-debate.jpg', // Add image if available
    },
    {
        title: 'IASTAM 4.0 Participation',
        date: '2023-04-15',
        description: 'Participation in the IASTAM 4.0 event, showcasing advancements in industrial applications.',
        imageUrl: '/images/events/iastram.jpg', // Add image if available
    },
    {
        title: 'LinkedIn Workshop',
        date: '2023-02-10',
        description: 'A workshop aimed at enhancing professional networking skills using LinkedIn.',
        imageUrl: '/images/events/linkedin-workshop.jpg', // Add image if available
    },
    {
        title: 'IOTSPARK Infosession',
        date: '2023-08-22',
        description: 'An informational session on the IOTSPARK project, focusing on IoT innovations.',
        imageUrl: '/images/events/iotspark.jpg', // Add image if available
    },
    {
        title: 'IEEE IAS/PES PAC Participation',
        date: '2023-11-12',
        description: 'Participation in the IEEE IAS/PES PAC, discussing power and energy advancements.',
        imageUrl: '/images/events/pac.jpg', // Add image if available
    },
    {
        title: 'Panel Discussion',
        date: '2024-07-25',
        description: 'A panel discussion featuring experts in industrial applications and power systems.',
        imageUrl: '/images/events/panel-discussion.jpg'
    },
    {
        title: 'IAS Workshop',
        date: '2024-08-30',
        description: 'A workshop organized by the IAS chapter, focusing on industrial automation.',
        imageUrl: '/images/events/ias-workshop.jpg'
    },
    {
        title: 'High Performing Chapter Award',
        date: '2024-10-12',
        description: 'Recognition event for achieving the High Performing Chapter Award.',
        imageUrl: '/images/events/high-performing-award.jpg'
    },
    {
        title: 'Celebrating 6 Years of PES ENIT',
        date: '2022-05-20',
        description: 'Celebration marking the 6th anniversary of the PES ENIT chapter.',
        imageUrl: '/images/events/pes-anniversary.jpg'
    },
    {
        title: 'IES SYP Participation',
        date: '2023-11-22',
        description: 'Participation in the IES SYP event, focusing on young professionals in industrial electronics.',
        imageUrl: '/images/events/ies-syp.jpg'
    },
    {
        title: 'PESTGM Infosession',
        date: '2024-01-18',
        description: 'An infosession on PESTGM, discussing trends in power and energy.',
        imageUrl: '/images/events/pestgm.jpg'
    },
    {
        title: 'PES Zero Hunger Day',
        date: '2024-10-16',
        description: 'An event dedicated to addressing hunger issues, organized by the PES chapter.',
        imageUrl: '/images/events/zero-hunger.jpg'
    },
    {
        title: 'Safran Company Visit',
        date: '2023-12-05',
        description: 'A company visit to Safran, providing insights into aerospace technologies.',
        imageUrl: '/images/events/safran-visit.jpg'
    },
    {
        title: 'ITTT Workshop',
        date: '2024-02-28',
        description: 'An ITTT workshop focusing on innovative teaching techniques in technology.',
        imageUrl: '/images/events/ittt-workshop.jpg'
    },
    {
        title: 'COPx 1.0',
        date: '2024-04-22',
        description: 'The inaugural COPx event, discussing climate change and global energy challenges.',
        imageUrl: '/images/events/copx.jpg'
    },
    {
        title: 'SAP Workshop',
        date: '2023-09-15',
        description: 'A workshop on SAP software, focusing on enterprise resource planning.',
        imageUrl: '/images/events/sap-workshop.jpg'
    },
    {
        title: 'Webinar Series',
        date: '2023-11-10',
        description: 'A series of webinars covering various topics in industrial applications and power systems.',
        imageUrl: '/images/events/webinar-series.jpg'
    },
    {
        title: 'DevOps Workshop',
        date: '2024-03-05',
        description: 'A workshop on DevOps practices, aiming to improve development and operational efficiencies.',
        imageUrl: '/images/events/devops-workshop.jpg'
    },
    {
        title: 'Greenwheels Tunisia Section Forum',
        date: '2023-06-18',
        description: 'Participation in the Greenwheels forum, focusing on sustainable transportation solutions.',
        imageUrl: '/images/events/greenwheels-forum.jpg'
    },
    {
        title: 'SolidWorks Workshop',
        date: '2023-07-22',
        description: 'A workshop on SolidWorks, enhancing skills in 3D CAD design.',
        imageUrl: '/images/events/solidworks-workshop.jpg'
    },
    {
        title: 'Sponsoring Workshop',
        date: '2023-08-14',
        description: 'A workshop on securing sponsorships for technical events and projects.',
        imageUrl: '/images/events/sponsoring-workshop.jpg'
    },
    {
        title: 'Distinguished Lecture Program',
        date: '2023-10-20',
        description: 'A lecture series featuring distinguished speakers in the field of industrial applications.',
        imageUrl: '/images/events/distinguished-lecture.jpg'
    }
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
            <main className="events-main flex flex-col items-center">

                {/* Upcoming Events Section */}
                <section className="event-section">
                    <h1 className="event-title">Upcoming Events</h1>
                    <p className="event-description">
                        Stay tuned for our upcoming technology and innovation events.
                    </p>
                </section>

                {/* Upcoming Events Horizontal Scroll */}
                <div className="w-full flex justify-start overflow-x-auto py-6">
                    <div className="events-list flex space-x-6">
                        {currentUpcomingEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                imageUrl={event.imageUrl} // Add image
                            />
                        ))}
                    </div>
                </div>

                {/* Pagination for Upcoming Events */}
                <div className="pagination flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => setCurrentPageUpcoming(currentPageUpcoming - 1)}
                        disabled={currentPageUpcoming === 1}
                        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-300"
                    >
                        Previous
                    </button>
                    <span>Page {currentPageUpcoming} of {totalPagesUpcoming}</span>
                    <button
                        onClick={() => setCurrentPageUpcoming(currentPageUpcoming + 1)}
                        disabled={currentPageUpcoming === totalPagesUpcoming}
                        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-300"
                    >
                        Next
                    </button>
                </div>

                {/* Past Events Section */}
                <section className="event-section">
                    <h1 className="event-title">Past Events</h1>
                    <p className="event-description">
                        Take a look at some of our previous events.
                    </p>
                </section>

                {/* Past Events Horizontal Scroll */}
                <div className="w-full flex justify-start overflow-x-auto py-6">
                    <div className="events-list flex space-x-6">
                        {currentPastEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                imageUrl={event.imageUrl} // Add image
                            />
                        ))}
                    </div>
                </div>

                {/* Pagination for Past Events */}
                <div className="pagination flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => setCurrentPagePast(currentPagePast - 1)}
                        disabled={currentPagePast === 1}
                        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-300"
                    >
                        Previous
                    </button>
                    <span>Page {currentPagePast} of {totalPagesPast}</span>
                    <button
                        onClick={() => setCurrentPagePast(currentPagePast + 1)}
                        disabled={currentPagePast === totalPagesPast}
                        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-300"
                    >
                        Next
                    </button>
                </div>

            </main>
            <Footer />
        </div>
    );
}
