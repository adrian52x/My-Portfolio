'use client'

import { useRouter } from 'next/navigation';
import { ProjectParams } from "../data/projects";


const ProjectCard = ({ project }: { project: ProjectParams }) => {
    const router = useRouter();

    const viewDetailsButton = () => {
        router.push(`/projects/${project.id}`);
    };

    return (
        <div className={`project shadow-md hover:shadow-orange-400 transition-shadow duration-300  ${project.isImportant ? 'shadow-emerald-700' : ''}`}>
            <img key={project.id} src={project.mainImage}  />
            <div className="content">
                <h1>{project.title}</h1>
                <button onClick={() => viewDetailsButton()}>View details</button>
            </div>
        </div>
    );
}



const ProjectsGrid = ({ projects }: { projects: ProjectParams[] }) => {
    return (
        <>
            {projects.map((project: ProjectParams) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </>
    );
  };
  
  export default ProjectsGrid;