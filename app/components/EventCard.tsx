// components/EventCard.tsx
import '../globals.css';
import Image from "next/image";

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;  // New prop for image
}

export default function EventCard({ title, date, description, imageUrl }: EventCardProps) {
    return (
        <div className="event-card">
            <Image src={imageUrl} alt={title} className="event-image" />
            <h2>{title}</h2>
            <p className="event-date">{date}</p>
            <p>{description}</p>
        </div>
    );
}
