import "./About.scss";
import ProjectCards from "../../helper/Components/ProjectCards";
const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="bio-text">
          <h1 className="bio-title">BIO</h1>
          <p className="bio-pha">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            obcaecati laborum praesentium ex eveniet, sequi necessitatibus saepe
            nam qui quaerat debitis, minus consectetur inventore alias!
          </p>
        </div>
      </section>
      <ProjectCards />
    </>
  );
};

export default About;
