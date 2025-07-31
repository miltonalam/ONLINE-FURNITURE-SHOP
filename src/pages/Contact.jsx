import Footer from "../component/Footer/Footer";

const Contact = () => {
    return (
        <>
            <section>
                <div className="main-card">
                    <h2>Get in Touch</h2>
                    <div className="contact-info">
                        <div><b>Email:</b> support@urbanwood.com</div>
                        <div><b>Call:</b> ‪+91-760236755‬</div>
                        <div><b>Address:</b>Courtyard Pavilion, Navi Mumbai, Maharashtra</div>
                    </div>
                    <form>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required placeholder="Enter your name" />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" required placeholder="Enter your email" />
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" rows="4" placeholder="Type your message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;
