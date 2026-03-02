'use client'

import { useRouter } from 'next/navigation';
import { ProjectParams } from "../data/projects";
import { useState } from 'react';
import { Loader } from './Loader';
import Image from 'next/image';
import { technologyIcons } from '../data/technologyIcons';

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

            {/* Link button for projects with links */}
            {project.link && (
                <div className="absolute top-3 left-3 z-10">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <div className="bg-gray-900/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-700">
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

            {/* Always-visible footer */}
            <div className="card-footer">
                <h2>{project.title}</h2>
                {project.year && <div className="card-year">{project.year}</div>}
            </div>

            {/* Hover overlay */}
            <div className="content">
                {/* <h1 className='bg-gray-900/60 p-1 rounded-md'>{project.title}</h1> */}
                <h1 className='bg-gray-900/40 py-1 px-2 rounded-lg'>{project.title}</h1>
                
                {/* Technology Icons */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                        {project.technologies.slice(0, 5).map((tech) => {
                            const Icon = technologyIcons[tech];
                            return Icon ? (
                                <div 
                                    key={tech}
                                    className="bg-gray-900/60 backdrop-blur-sm p-1.5 rounded-md border border-white/20"
                                    title={tech}
                                >
                                    <Icon className="text-white text-lg" />
                                </div>
                            ) : null;
                        })}
                    </div>
                )}
                
                <button
                    onClick={viewDetailsButton}
                    disabled={isLoading} // Disable button while loading
                    className='bg-gray-900/60'
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