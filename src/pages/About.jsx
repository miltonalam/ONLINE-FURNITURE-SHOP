import Footer from "../component/Footer/Footer";

const About = () => {
    return (
        <>
            <div className="about-card">
                <h2>Our Story</h2>
                <p>
                   <span class="UrbanWood-accent"><b>Urban Wood</b></span>  crafts timeless, sustainable furniture that blends modern design with natural materials. Each piece is thoughtfully made to elevate your space with quality, comfort, and style — because your home deserves furniture that feels as good as it looks.
                </p>
                <p className="team-list">
                    <b>Team Members: </b>
                    <span class="UrbanWood-accent"><b>Milton Alam Sk,Tanisha Saha,Kaif Ajmi,Pritam Kar,Vaskar Ghosh,Koyel Debnath</b></span>
                </p>
                <div className="about-stats-row">
                    <div>
                        <span className="about-highlight">1,0000000+</span><br />Orders Delivered
                    </div>
                    <div>
                        <span className="about-highlight">9,00000+</span><br />Happy Customers
                    </div>
                    <div>
                        <span className="about-highlight">4.9★</span><br />Customer Rating
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;