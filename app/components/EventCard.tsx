import '../globals.css';
import Image from "next/image";

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}

export default function EventCard({ title, date, description, imageUrl }: EventCardProps) {
    return (
        <div className="event-card">
            <Image
                src={imageUrl}
                alt={title}
                width={150}  // Set a fixed width
                height={150} // Set a fixed height
                className="event-image object-cover"
            />
            <h2>{title}</h2>
            <p className="event-date">{date}</p>
            <p>{description}</p>
        </div>
    );
}
