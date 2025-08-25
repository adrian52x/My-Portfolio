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
            
            {/* Link button for projects with links */}
            {project.link && (
                <div className="absolute top-3 left-3 z-10">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <div className="bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-white/30 hover:bg-black/90 hover:border-white/50 transition-all duration-200">
                            🔗 DEMO
                        </div>
                    </a>
                </div>
            )}
            
            {/* Featured sticker for important projects */}
            {project.isImportant && (
                <div className="absolute top-0 right-0 z-10">
                    <div className="border-l-[50px] border-l-transparent border-t-[50px] border-t-orange-400 relative">
                        <span className="absolute -top-12 right-2 text-white text-lg font-bold transform rotate-50">
                            ★
                        </span>
                    </div>
                </div>
            )}
            
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