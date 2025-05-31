import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../Styles/Timeline/timeline.css";
import formations from "../Donnees/formations.json";

export default function Timeline() {
    return (
        <section className="formations" id="formations">
            <h2>Mes formations</h2>
            <VerticalTimeline>
                {formations.map((formation, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={<img className="timeline-picture" src={formation.image} alt={formation.image_alt} />}
                        icon={
                            <img
                                src={formation.logo}
                                alt={formation.logo_alt}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        }>
                        <h3 className="vertical-timeline-element-title">{formation.date}</h3>
                        <h3 className="vertical-timeline-element-subtitle">{formation.titre}</h3>
                        <p>{formation.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
}
