import About from "../../atoms/about/About";
import Awards from "../../atoms/awards/Awards";
import ExperienceEducation from "../../atoms/experience and education/ExperienceEducation";
import Interests from "../../atoms/interests/Interests";
import Skills from "../../atoms/skills/Skills";

const FloatRight = () => {
    return(
        <div className="float-right">
            <About />
            <ExperienceEducation
                sectionTitle="experience"
                header="EXPERIENCE"
                title="ELECTRONIC DATA PROCESSING"
                date="August 2021 - present"
                shortDesc="PT. Maspion Group"
                longDesc={[
                    "Understanding database program",
                    " Maintanancing network, server, and data",
                    " Troubleshooting program, hardware, and software "
                ]}
            />
            <ExperienceEducation
                sectionTitle="experience"
                title="UI/UX DESIGNER"
                date="February 2022 - present"
                shortDesc="PT. Telkomsel"
                longDesc={[
                    "Evaluating user requirements",
                    " Illustrating design ideas using storyboards, process flows",
                    " Designing graphic user interface elements"
                ]}
            />
            <ExperienceEducation
                sectionTitle="experience"
                title="Lab Assistant"
                date="March 2023 - present"
                shortDesc="Mikroskil University"
                longDesc={[
                    "Preparing for lab sessions",
                    " Helping students to understand the modules",
                    " Be responsible for the cleanliness of the lab"
                ]}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ExperienceEducation
                sectionTitle="education"
                header="EDUCATION"
                title="METHODIST EL-SHADDAY SCHOOL"
                date="2006 - 2020"
                shortDesc="SD - SMA"
                longDesc=""
            />
            <ExperienceEducation
                sectionTitle="education"
                title="MIKROSKIL UNIVERSITY"
                date="2020 - present"
                shortDesc="Informatics Engineering"
                longDesc=""
            />
            <ExperienceEducation
                sectionTitle="education"
                title="FSW Binar Academy"
                date="August 2022 - December 2022"
                shortDesc="Study Independent Batch 3"
                longDesc=""
            />
            <ExperienceEducation
                sectionTitle="education"
                title="Front End Development with React"
                date="February 2023 - present"
                shortDesc="Study Independent Batch 4"
                longDesc=""
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Skills 
                title="SKILLS"
                desc="Soft Skills and Hard Skills"
                skillsCol1="Microsoft Office"
                skillsCol2="SQLDatabase"
            />
            <Skills
                skillsCol1="Python Programming Language"
                skillsCol2="C Programming Language"
            />
            <Skills 
                skillsCol1="HTML5 CSS Bootstrap"
                skillsCol2="Design Thinking"
            />
            <Skills
                skillsCol1="English" 
                skillsCol2="UI/UX Design in Figma"
            />
            <Interests />
            <Awards 
                title="AWARDS &amp; CERTIFICATIONS"
                awardsTitle="1nd of Google's Coding Competitions"
            />
            <Awards
                awardsTitle="2nd of The ICFP Programming Contest"
            />
            <Awards
                awardsTitle="2nd of The Internet Problem Solving Contest"
            />
        </div>
    );
}

export default FloatRight;