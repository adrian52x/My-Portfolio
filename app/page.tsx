import { projects } from "../app/data/projects";
import ProjectsGrid from './components/ProjectsGrid';

import { Roboto, Quantico } from 'next/font/google'
import TypingEffect from "./components/TypingEffect";
 
const quantico = Quantico({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

    return (
        <>
            {/* <div className=" layout"> */}
            <div className={`layout ${quantico.className}`}>
                    <div className="terminal bg-white/10  mb-4">
                        <div className="bg-gray-800 px-4 py-2 rounded-t-lg flex items-center justify-between">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"/>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                                <div className="w-3 h-3 rounded-full bg-green-500"/>
                            </div>
                        
                        </div>
                        
                        <div className="terminal-content p-4 space-y-4">
                            <div className="flex space-x-2">
                                <div>&gt;</div> 
                                <TypingEffect phrases={['Adrian Enachi', 'Software Engineer']} />
                            </div>
                            <div className="location">
                                <div className="flex space-x-2">
                                    <div>&gt;</div> 
                                    <div>Adrian.currentLocation</div>
                                </div>
                                <div className="text-orange-300">"Copenhagen, DK"</div>
                            </div>

                            <div className="contactInfo">
                                <div className="flex space-x-2">
                                    <div>&gt;</div> 
                                    <div>Adrian.contactInfo</div>
                                </div>
                                <div className="text-orange-300 flex space-x-2">
                                    &#91;
                                    <a href="mailto:enachi.adrian52@gmail.com" className="block hover:underline">
                                        "enachi.adrian52@gmail.com"
                                    </a>,
                                    <a href="https://www.linkedin.com/in/adrian-enachi-314955205/" target="_blank" rel="noopener noreferrer" className="block hover:underline">
                                        "LinkedIn"
                                    </a>,
                                    <a href="https://github.com/adrian52x" target="_blank" rel="noopener noreferrer" className="block hover:underline">
                                        "GitHub"
                                    </a>
                                    &#93;
                                </div>
                            </div>

                            <div className="interests">
                                <div className="flex space-x-2">
                                    <div>&gt;</div> 
                                    <div>Adrian.interests</div>
                                </div>
                                <div className="text-orange-300">&#91;"text, text, text, text"&#93;</div>
                            </div>

                            <div className="education">
                                <div className="flex space-x-2">
                                    <div>&gt;</div> 
                                    <div>Adrian.education</div>
                                </div>
                                <div className="text-orange-300">&#91;"text, text, text, text",</div>
                                <div className="text-orange-300">"text, text, text, text"&#93;</div>

                            </div>


                            
                            <br /> text <br /> text <br /> text <br /> text <hr /> <hr /> <br /> text <br /> <br />
                        </div>
                        
                    </div>
                    
                    <ProjectsGrid projects={projects}/>

            </div>
        </>
    );

    
}
