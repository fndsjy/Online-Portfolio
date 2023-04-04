import "./experienceEducation.style.css";

const ExperienceEducation = ({sectionTitle, header, title, date, shortDesc, longDesc}) => {
    return(
        <section id={sectionTitle}>
            <h1>{header}</h1>
            <div className="row">
                <div className="col">
                    <h4>{title}</h4>
                </div>
                <div className="col-lg-4">
                    <span>{date}</span>
                </div>
            </div>
            <h5>{shortDesc}</h5>
            <p id="long-desc">{longDesc}</p>
        </section>
    );
}

export default ExperienceEducation;