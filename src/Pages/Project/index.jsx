import projets from "../../Donnees/projets.json";
import "../../Styles/Project-page/project-page.css";
import { useParams, Navigate } from "react-router";
import Tool from "../../Components/Tool";
import Step from "../../Components/StepComponent";

export default function Project() {
    const { id } = useParams();
    const projetEnCours = projets.find((projet) => projet.id === id);
    if (!projetEnCours) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <main>
            <section className="banner-project">
                <img src={`${import.meta.env.BASE_URL}${projetEnCours.image}`} alt={`Image du projet ${projetEnCours.titre}`} />
                <div className="banner-project-content">
                    <h1>{projetEnCours.titre}</h1>
                    <a href={projetEnCours.lien} target="_blank" rel="noopener noreferrer">
                        <button>
                            <i className="fa-solid fa-eye"></i>
                            Voir le projet
                        </button>
                    </a>
                </div>
            </section>
            <section className="description-project" id="description">
                <div className="description-project-title">
                    <i className="fa-solid fa-file-lines"></i>
                    <h2>Description</h2>
                </div>
                <p>{projetEnCours.description_longue}</p>
            </section>
            <section className="tools-project" id="technos">
                <div className="tools-project-title">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <h2>Technologies utilisées</h2>
                </div>
                <div className="tools-project-content">
                    {projetEnCours.technologies.map((tech) => (
                        <Tool
                            image={`${import.meta.env.BASE_URL}${tech.logo}`}
                            alt={`Logo ${tech.nom}`}
                            technologie={tech.nom}
                            couleur={tech.bordure}
                            key={tech.nom}
                        />
                    ))}
                </div>
            </section>
            <section className="step-project" id="etapes">
                <div className="step-project-title">
                    <i className="fa-solid fa-list-check"></i>
                    <h2>Etapes du projet</h2>
                </div>
                <div className="step-project-content">
                    <Step tableau={projetEnCours.etapes} />
                </div>
            </section>
        </main>
    );
}
