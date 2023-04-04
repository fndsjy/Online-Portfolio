import React from "react";
import "./nav.style.css";

const Nav = () => {
    return(
        <section id="nav">
            <nav className="nav flex-column">
                <a href="/#about">ABOUT</a>
                <a href="/#experience">EXPERIENCE</a>
                <a href="/#education">EDUCATION</a>
                <a href="/#skills">SKILLS</a>
                <a href="/#interests">INTERESTS</a>
                <a href="/#awards">AWARDS</a>
            </nav>
        </section>
    );
}

export default Nav;