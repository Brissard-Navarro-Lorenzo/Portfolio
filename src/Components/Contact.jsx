import "../Styles/Contact/contact.css";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-text">
                <h2>Contact</h2>
                <h3>
                    Envie de collaborer ? <br /> Contactez-moi
                </h3>
            </div>
            <div className="contact-content">
                <div className="email">
                    <i className="fa-regular fa-envelope"></i>
                    <h3>Email</h3>
                    <a href="mailto:lorenzonavarro06250@gmail.com">
                        <button>Envoyer un mail</button>
                    </a>
                </div>
                <div className="telephone">
                    <i className="fa-solid fa-phone"></i>
                    <h3>Téléphone</h3>
                    <a href="tel:0768703830">
                        <button>Appeler maintenant</button>
                    </a>
                </div>
            </div>
        </section>
    );
}
