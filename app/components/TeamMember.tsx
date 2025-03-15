interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
    return (
        <div className="team-member">
            <img src={image} alt={name} className="team-member-img" />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}
