import "../Styles/Gallery/gallery.css";
import projets from "../Donnees/projets.json";
import Projet from "./Projet";
import { Link } from "react-router";

export default function Gallery() {
    return (
        <section className="projets" id="projets">
            <h2>Mes projets</h2>
            <div className="projets-content">
                {projets.map((projet) => (
                    <Link to={`/project/${projet.id}`} key={projet.id}>
                        <Projet
                            image={`${import.meta.env.BASE_URL}${projet.image}`}
                            titre={projet.titre}
                            description={projet.description_courte}
                            couleur={projet.couleur}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
