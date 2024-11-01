import BrowserFrame from '@/app/components/BrowserFrame';
import { projects } from '@/app/data/projects';


interface ProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {

    const { id } = await params;
    console.log(id);
    
    const project = projects.find((project) => project.id === id);

    return (
        <>
            {project ? (
                <>
                    <BrowserFrame title={project.title}>
                        <img className="w-full" key={project.id} src={project.image} />
                    </BrowserFrame>

                    {project.video && (
                        <BrowserFrame title={project.title}>
                            <video className="w-full" controls>
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </BrowserFrame>
                    )}
                </>
            ) : (
                <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            )}
        </>
    );

    
}