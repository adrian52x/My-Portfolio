import BrowserFrame from '@/app/components/BrowserFrame';
import { projects } from '@/app/data/projects';
import { FaReact, FaNodeJs, FaDatabase, FaArrowLeft, FaJsSquare, FaSync, FaExchangeAlt, FaJava, FaLeaf, FaPython, FaHtml5, FaCss3  } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiStripe, SiSvelte, SiVuedotjs, SiNestjs, SiTensorflow, SiKeras, SiSupabase, SiPostgresql  } from 'react-icons/si'
import Link from 'next/link';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';

interface ProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

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

export default async function ProjectPage({ params }: ProjectPageProps) {
    
    const { id } = await params;
    
    const project = projects.find((project) => project.id === id);

    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        
        {/* Back Button */}
        <Link href="/">
            <div className="fixed top-6 left-6 z-50 bg-gray-800/90 backdrop-blur-sm text-white px-4 py-3 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-2">
                <FaArrowLeft className="text-sm"/> 
                <span className="text-sm font-medium">Back to Portfolio</span>
            </div>    
        </Link>

        {/* Scroll to Top Button */}
        <ScrollToTopButton />

        {/* Hero Section */}
        <div className="relative pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {project?.title}
                </h1>
                
                {/* Project Demo Link */}
                {project?.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-700/60 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600/30"
                    >
                        🚀 View Demo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Technologies Sidebar */}
                <div className="lg:col-span-3">
                    <div className="sticky top-24 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            🛠️ Technologies
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                            {project?.technologies?.map((tech) => {
                                const Icon = technologyIcons[tech];
                                return <TechIcon key={tech} Icon={Icon} name={tech} />;
                            })}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-6 space-y-8">
                {project?.videos?.map((video, index) => (
                    <BrowserFrame key={index} title={project.title}>
                        <video className="w-full min-h-[350px]" controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </BrowserFrame>
                ))}

                
                {project?.images?.map((img, index) => (
                    <BrowserFrame key={index} title={project.title}>
                        {/* <Image key={index} src={img} alt={project.title} width={1200} height={300} /> */}
                        <img className="w-full max-h-[80vh]" src={img} />
                    </BrowserFrame>
                ))}
                </div>

                {/* Comments Sidebar */}
                {project?.comments && (
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                💬 Project Details
                            </h3>
                            <div className="space-y-4">
                                {project.comments.map((comment, index) => (
                                    <div key={index} className="bg-gray-700/50 rounded-lg p-4 text-gray-300 border border-gray-600/30">
                                        <p className="text-sm leading-relaxed">{comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    </div>
 
    );
}

interface TechIconProps {
    Icon: React.ComponentType<{ className?: string }>;
    name: string;
}

function TechIcon({ Icon, name }: TechIconProps) {
    return (
      <div className="group flex flex-col items-center p-3 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
        <Icon className="text-3xl text-blue-400 mb-2 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs text-gray-300 font-medium text-center leading-tight">{name}</span>
      </div>
    )
}