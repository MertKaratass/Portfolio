import "./About.scss";
import ProjectCards from "../../helper/Components/ProjectCards";
const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="bio-text">
          <h1 className="bio-title">BIO</h1>
          <p className="bio-pha">
            I put the rich layers of my Turkish Language and Literature
            education into practice with my teaching internship, and in this
            process, my deep love for education and literature was reinforced.
            However, my great curiosity for technology led me to new horizons,
            to Front-End Developer training. The basic skills I acquired there,
            such as HTML, CSS and JavaScript, laid a solid foundation for me to
            take an active role in the digital world. This journey, which
            combines the depth of literature with the innovative dynamism of
            technology, enlightens my creativity and analytical thinking,
            enlightening me to achieve my professional goals.
          </p>
        </div>
      </section>
      <ProjectCards />
    </>
  );
};

export default About;
