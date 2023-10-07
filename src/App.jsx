import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import History from "./components/History";
import { MewldiEvents } from "./components/MewldiEvents";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Intro from "./components/MewlidVideo";
import Ustaz from "./components/Ustaz";
import MewlidCeremony from "./components/Activities";
function App() {
	return (
		<>
			<div className="">
				<Navbar />
				<Header />
				<History />
				<Ustaz />
				<MewldiEvents />
				<Testimonials />
				<Intro />
				<MewlidCeremony />
				<Gallery />
				<Footer />
			</div>
		</>
	);
}

export default App;
