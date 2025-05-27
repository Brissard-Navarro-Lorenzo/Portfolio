import "../Styles/Tool/tool.css";

export default function Tool({ image, alt, technologie, couleur }) {
    return (
        <div className="tool-container" style={{ boxShadow: `3px 10px 6px -1px ${couleur}, -3px 2px 4px -2px ${couleur}` }}>
            <img src={image} alt={alt} />
            <h3>{technologie}</h3>
        </div>
    );
}
