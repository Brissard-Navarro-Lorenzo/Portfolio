import Banner from "../../Components/Banner";
import Timeline from "../../Components/Timeline";
import Gallery from "../../Components/Gallery";
import Contact from "../../Components/Contact";
import SectionCompetences from "../../Components/SectionCompetences";

export default function Home() {
    return (
        <main>
            <Banner />
            <Timeline />
            <SectionCompetences />
            <Gallery />
            <Contact />
        </main>
    );
}
