import { Link } from "react-router-dom";
import "./about.style.css";

const About = () => {
    return(
        <section id="about">
            <h1>FENDY <span>SANJAYA</span></h1>
            <h5>+62-89804226969 <span>FNDSJY@GMAIL.COM</span></h5>
            <p>Recent college graduate with a degree in Informatics Engineering. I am very passionate about IT and programming. I am an energetic programmer skilled in JavaScript and web app design. With strong curiosity, I like to learn something new in my life, especially about IT and programming language.</p>
            <div className="col my-4">
                <Link to="https://www.linkedin.com/in/fendy-sanjaya-338324207" target="_blank">
                    <ion-icon name="logo-linkedin" aria-hidden="true" aria-label="LinkedIn"></ion-icon>
                </Link>
                <Link to="https://github.com/fndsjy" target="_blank" className="mx-2">
                    <ion-icon name="logo-github" aria-hidden="true" aria-label="Github"></ion-icon>
                </Link>
            </div>
        </section>
    );
}

export default About;