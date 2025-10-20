'use client'

import { useRouter } from 'next/navigation';
import { ProjectParams } from "../data/projects";
import { useState } from 'react';
import { Loader } from './Loader';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaSync, FaExchangeAlt, FaJava, FaLeaf, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiStripe, SiSvelte, SiVuedotjs, SiNestjs, SiTensorflow, SiKeras, SiSupabase, SiPostgresql } from 'react-icons/si';

const technologyIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "React": FaReact,
    "Node.js": FaNodeJs,
    "Tailwind": SiTailwindcss,
    "Database": FaDatabase,
    "JavaScript": FaJsSquare,
    "Express": SiExpress,
    "MongoDB": SiMongodb,
    "Next.js": SiNextdotjs,
    "Stripe": SiStripe,
    "Webhooks": FaSync,
    "Svelte": SiSvelte,
    "Vue.js": SiVuedotjs,
    "API": FaExchangeAlt,
    "Nest.js": SiNestjs,
    "Java Spring Boot": FaJava,
    "Thymeleaf": FaLeaf,
    "Python": FaPython,
    "TensorFlow": SiTensorflow,
    "Keras": SiKeras,
    "HTML": FaHtml5,
    "CSS": FaCss3,
    "Supabase": SiSupabase,
    "PostgreSQL": SiPostgresql,
};

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
                        <div className="bg-neutral-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-white/30 hover:bg-black/90 hover:border-white/50 transition-all duration-200">
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
                
                {/* Technology Icons */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                        {project.technologies.slice(0, 5).map((tech) => {
                            const Icon = technologyIcons[tech];
                            return Icon ? (
                                <div 
                                    key={tech}
                                    className="bg-neutral-800 backdrop-blur-sm p-1.5 rounded-md border border-white/20"
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