import Navbar from './components/Navbar';
import Footer from './components/Footer';
import  './globals.css';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="home-main">
                <section className="intro">
                    <h1>Welcome to IEEE IAS-PES ENIT SBJC</h1>
                    <p>Your journey into innovation and technology starts here.</p>
                </section>
                {/* Additional homepage sections can go here */}
            </main>
            <Footer />
        </div>
    );
}
