import Image from "next/image";
import { teamMembers } from "../components/teamData";

export default function TeamSection() {
    return (
        <section className="team-section">
            <h2>Our Executive Committee</h2>
            <div className="team-list">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={180}
                            height={180}
                            className="team-member-img"
                        />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <div className="social-links">
                            <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
