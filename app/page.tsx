import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="home-main">
                <section className="intro">
                    <h1>Welcome to IEEE IAS-PES ENIT SBJC</h1>
                    <p className="tagline">Your journey into innovation and technology starts here.</p>
                    <a href="/about" className="about-link">About Us</a>
                </section>
            </main>
            <Footer />
        </div>
    );
}
