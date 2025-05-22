import "../Styles/SectionCompetences/sectioncompetences.css";
import competences from "../Donnees/competences.json";
import Competence from "./Competence";

export default function SectionCompetences() {
    return (
        <section className="section-competences">
            <div className="competences-text">
                <h2>Compétences</h2>
                <h3>Découvrez les compétences qui me permettent de transformer des idées en expériences numériques.</h3>
            </div>
            <div className="competences-content">
                <div className="slider-column">
                    <div className="slider-track">
                        {competences[0].images.map((categorie, index) => (
                            <Competence image={categorie} alt={`logo ${categorie}`} key={index} />
                        ))}
                    </div>
                    <div className="slider-track">
                        {competences[0].images.map((categorie, index) => (
                            <Competence image={categorie} alt={`logo ${categorie}`} key={index} />
                        ))}
                    </div>
                </div>
                <div className="slider-column">
                    <div className="slider-track reverse">
                        {competences[1].images.map((categorie, index) => (
                            <Competence image={categorie} alt={`logo ${categorie}`} key={index} />
                        ))}
                    </div>
                    <div className="slider-track reverse">
                        {competences[1].images.map((categorie, index) => (
                            <Competence image={categorie} alt={`logo ${categorie}`} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
