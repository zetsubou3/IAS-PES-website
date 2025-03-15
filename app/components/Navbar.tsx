import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}