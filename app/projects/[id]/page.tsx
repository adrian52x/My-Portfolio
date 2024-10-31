import BrowserFrame from '@/app/components/BrowserFrame';
import { projects } from '@/app/data/projects';


interface ProjectPageProps {
    params: {
        projectId: string;
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {

    const { projectId } = await params;
    console.log(projectId);
    
    const project = projects.find((project) => project.id === projectId);

    return (
        <BrowserFrame title="Example Website">
            <h1 className="text-2xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-gray-600">This is some sample content inside the Mac browser frame.</p>
            {project ? (
                <img key={project.id} src={project.image} />
            ) : (
                <p>Project not found</p>
            )}
        </BrowserFrame>
    );

    
}