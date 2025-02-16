import { useState, useEffect } from "react";
import "./Projects.css";
import imageMap from "../../assets/imageLoader"; // Import danh sách ảnh

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  useEffect(() => {
    fetch("/data/project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.project))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <p>"Here are some of my featured projects."</p>
      <div className="project-cards">
        {currentProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={imageMap[project.image] || imageMap["default.jpg"]} 
              alt={project.name} 
              className="project-image" 
            />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p><span>Description: </span>{project.description}</p>
              <p><span>Tech Stack: </span>{project.used}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i} 
            className={`dot ${currentPage === i + 1 ? "active" : ""}`} 
            onClick={() => setCurrentPage(i + 1)}
          ></button>
        ))}
      </div>
    </section>
  );
}
export default Projects;
