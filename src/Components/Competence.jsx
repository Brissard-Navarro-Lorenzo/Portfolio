import "../Styles/Competence/competence.css";

export default function Competence({ image, alt }) {
    return (
        <div className="competence-box">
            <img src={image} alt={alt} />
        </div>
    );
}
