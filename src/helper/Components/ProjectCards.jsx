import "./projectcard.scss";
import { aboutData } from "../aboutData.js";

const ProjectCards = () => {
  return (
    <section className="project-card">
      <div className="container-project-card">
        <div className="pha">
          <h3>2022 - 2023</h3>
          <h4>CLARUSWAY.</h4>
          <h5>Front End Developer</h5>
          {aboutData.map((item) => (
            <li>{item.description}</li>
          ))}
        </div>

        <div className="pha">
          <h3>2019 - 2023</h3>
          <h4>Ataturk University.</h4>
          <h5>Turkish language and literature</h5>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
