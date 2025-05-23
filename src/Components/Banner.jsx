import "../Styles/Banner/banner.css";
import BannerImage from "../images/image_accueil.png";

export default function Banner() {
    return (
        <section className="banner">
            <img src={BannerImage} alt="Image d'accueil présentant différents langages" />
            <div className="banner_content">
                <h1>Bonjour je suis Lorenzo, développeur web passionné</h1>
                <h3>
                    Chaque projet commence par une idée.
                    <br />
                    Donnons-lui vie ensemble.
                </h3>
                <div className="banner_buttons">
                    <div className="buttons">
                        <a href="#">
                            <button className="white_button">En savoir plus</button>
                        </a>
                        <a href="#">
                            <button className="transparent_button">Contact</button>
                        </a>
                    </div>
                    <a href="#">
                        <button className="transparent_button">Consulter le CV</button>
                    </a>
                </div>
            </div>
        </section>
    );
}
