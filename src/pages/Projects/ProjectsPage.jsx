import './ProjectsPage.css';
import { projects } from '../../assets/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

/*
    TODO:
    - Make a project card for Animal Memory card flip game
*/

const ProjectsPage = () => {
  return (
    <section className='page' id='projects-page'>
      <h1>Projects</h1>
      {projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </section>
  );
};
export default ProjectsPage;
