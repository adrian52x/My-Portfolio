'use client'

import { useRouter } from 'next/navigation';
import { ProjectParams } from "../data/projects";
import { useState } from 'react';
import { Loader } from './Loader';
import Image from 'next/image';

const ProjectCard = ({ project }: { project: ProjectParams }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const viewDetailsButton = () => {
        setIsLoading(true);
        router.push(`/projects/${project.id}`);
    };

    return (
        <div className={`project ${project.isImportant ? 'important' : ''}`}>
            <Image key={project.id} src={project.mainImage} alt={project.title} width={500} height={300} priority />
            {/* <img key={project.id} src={project.mainImage}  /> */}
            <div className="content">
                <h1>{project.title}</h1>
                <button
                    onClick={viewDetailsButton}
                    disabled={isLoading} // Disable button while loading
                >
                    {isLoading ? <Loader /> : 'View details'}
                </button>
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