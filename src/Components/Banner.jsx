import "../Styles/Banner/banner.css";
import image from "../images/accueil_image.webp";
import imagePetite from "../images/image_accueil_petite.webp";

export default function Banner() {
    return (
        <section className="banner">
            <img
                src={image}
                alt="Image d'accueil présentant différents langages"
                fetchPriority="high"
                srcSet={`${imagePetite} 1024w, ${image} 1920w`}
                sizes="(max-width: 1024px) 100vw, 1920px"
            />
            <div className="banner_content">
                <h1>Bonjour je suis Lorenzo, développeur web passionné</h1>
                <h2>
                    Chaque projet commence par une idée.
                    <br />
                    Donnons-lui vie ensemble.
                </h2>
                <div className="banner_buttons">
                    <div className="buttons">
                        <a href="#formations">
                            <button className="white_button">En savoir plus</button>
                        </a>
                        <a href="#contact">
                            <button className="transparent_button">Contact</button>
                        </a>
                    </div>
                    <a href={`${import.meta.env.BASE_URL}CV_Lorenzo_Brissard--Navarro.pdf`} target="_blank" rel="noopener noreferrer">
                        <button className="transparent_button">Consulter le CV</button>
                    </a>
                </div>
            </div>
        </section>
    );
}
