import "./skills.style.css"

const Skills = ({title, desc, skillsCol1, skillsCol2}) => {
    return(
        <section id="skills">
            <h1>{title}</h1>
            <h5>{desc}</h5>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-lg-1">
                            <ion-icon name="checkmark-circle-sharp"></ion-icon>
                        </div>
                        <div className="skill-name col">
                            <p>{skillsCol1}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-lg-1">
                            <ion-icon name="checkmark-circle-sharp"></ion-icon>
                        </div>
                        <div className="skill-name col">
                            <p>{skillsCol2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;