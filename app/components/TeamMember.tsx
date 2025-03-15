import Image from "next/image";

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    facebook: string;
    linkedin: string;
}

export default function TeamMember({
                                       name,
                                       role,
                                       image,
                                       facebook,
                                       linkedin,

                                   }: TeamMemberProps) {
    return (
        <div className="team-member">
            <Image
                src={image}
                alt={name}
                width={180}
                height={180}
                className="team-member-img"
            />
            <h3>{name}</h3>
            <p>{role}</p>
            <div className="social-links">
                <a href={facebook} target="_blank" className="social-icon facebook" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i> {/* Font Awesome Facebook Icon */}
                </a>

                <a href={linkedin} target="_blank" className="social-icon linkedin" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i> {/* Font Awesome LinkedIn Icon */}
                </a>

            </div>
        </div>
    );
}
