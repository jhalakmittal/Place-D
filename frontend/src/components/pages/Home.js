// import '../../AppHome.css'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import Cards from '../Cards'
import Navbar from "../Navbar";
function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;