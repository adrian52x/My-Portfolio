import BrowserFrame from '@/app/components/BrowserFrame';
import { projects } from '@/app/data/projects';
import { FaReact, FaNodeJs, FaDatabase, FaArrowLeft } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
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
    "Database": FaDatabase
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    
    const { id } = await params;
    console.log(id);
    
    const project = projects.find((project) => project.id === id);

    return (
        // <>
        //     {project ? (
        //         <>
        //             <BrowserFrame title={project.title}>
        //                 <img className="w-full max-h-[80vh]" key={project.id} src={project.image} />
        //             </BrowserFrame>

        //             {project.video && (
        //                 <>
        //                 <BrowserFrame>
        //                     <video className="w-full" controls>
        //                         <source src={project.video} type="video/mp4" />
        //                         Your browser does not support the video tag.
        //                     </video>
        //                 </BrowserFrame>
        //                 </>
        //             )}
        //         </>
        //     ) : (
        //         <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        //     )}
        // </>

    <div className="relative flex justify-between py-10 px-4">

        {/* Back Button */}
        <Link href="/">
            <div className="fixed top-2 left-4 bg-gray-800 text-white px-3 py-1 rounded-lg shadow-lg flex items-center">
                <FaArrowLeft/> 
            </div>    
        </Link>

        {/* Scroll to Top Button */}
        <ScrollToTopButton />


        <div className="mx-auto flex flex-col lg:flex-row items-start gap-14">
            {/* Technologies Section */}
            <div className="w-full lg:w-1/6  rounded-lg p-6 ">
                <div className="grid grid-cols-4 gap-14">
                {project?.technologies?.map((tech) => {
                    const Icon = technologyIcons[tech];
                    return <TechIcon key={tech} Icon={Icon} name={tech}  />;
                })}
                </div>
            </div>

            {/* BrowserFrame Section */}
            <div className="w-full lg:w-3/5">
                {project?.video && (
                    <BrowserFrame title={project.title}>
                        <video className="w-full min-h-[300px]" controls>
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </BrowserFrame>
                )}

                
                {project?.image?.map((img, index) => (
                    <BrowserFrame key={index} title={project.title}>
                        <img className="w-full max-h-[80vh]" src={img} />
                    </BrowserFrame>
                ))}
            </div>

        

            {/* Comment Section */}
            {project?.comments && (
                <div className="w-full lg:w-1/6 bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Comments</h3>
                    {project.comments.map((comment, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg p-4 text-gray-300 mb-4">
                            <p className="mb-2">{comment}</p>
                        </div>
                    ))}
                </div>
            )}
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
      <div className="flex flex-col items-center">
        <Icon className="text-4xl text-blue-500 mb-2" />
        <span className="text-sm text-gray-300">{name}</span>
      </div>
    )
  }