import { projectImages } from "../../helper/imageData";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project-img">
        {projectImages.map((item) => (
          <div className="image-area">
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
