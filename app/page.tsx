import { projects } from "../app/data/projects";
import ProjectsGrid from './components/ProjectsGrid';

export default function Home() {

    return (
        <>
            <div className="layout">
                    <div className="terminal bg-white/10 rounded-lg mb-4">
                        <br />text <br /> text <br /> text <br /> text <br /> text <hr /> <hr /> <br /> text <br /> <br />
                    </div>
                    
                    <ProjectsGrid projects={projects}/>

            </div>
        </>
    );

    
}
