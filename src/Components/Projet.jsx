import "../Styles/Projet/projet.css";

export default function Projet({ image, titre, description, lien, couleur }) {
    return (
        <div className="projet-container" style={{ border: `3px solid ${couleur}` }}>
            <img src={image} alt={`Image du projet ${titre}`} />
            <div className="projet-texte">
                <h3 style={{ color: `${couleur}` }}>{titre}</h3>
                <p>{description}</p>
                <div className="projet-lien">
                    <p>Voir le projet</p>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    );
}
