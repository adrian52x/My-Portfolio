'use client'
import React, { useState } from 'react';

import { projects, ProjectParams } from '../data/projects';


const TerminalInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState<string | ProjectParams[]>([]);
    const [isFocused, setIsFocused] = useState(false);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
          const command = inputValue.trim();
          switch (command) {
              case 'ls':
                  setOutput(projects);
                  break;
              case 'date':
                    setOutput(new Date().toString());
                    break;    
              case 'clear':
                  setOutput([]);
                  break;
              default:
                  setOutput(`command not found: ${inputValue}`);
          }
          setInputValue('');
      }
    };

    const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };
  
    // useEffect(() => {
    //   const caret = document.querySelector('.custom-caret');
    //   if (caret) {
    //     caret.classList.add('blink');
    //   }
    // }, []);
  
    return (
        <div className="terminal-input">
            <span className='italic'>(commands: ls, date, clear)</span>
            <div className="flex">
                <div>~/</div>
                <div>&#36;</div>
                {!isFocused && <div className="ml-1 custom-caret bg-white w-1 h-6"/> }
                <input
                    className={`bg-transparent ml-2 text-orange-300 ${isFocused ? '' : 'caret-transparent'} focus:outline-none focus:border-none hover:cursor-pointer`}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                
            </div>
            {/* <pre className="text-orange-300 mt-2 whitespace-pre-wrap">{output}</pre> */}
            <pre className="text-orange-300 mt-2 whitespace-pre-wrap grid grid-cols-2 gap-x-6">
                {Array.isArray(output) ? (
                    output.map((project: { id: string; title: string }) => (
                        <div key={project.id}>
                            <a href={`/projects/${project.id}`} target="_blank" className="text-blue-500 hover:underline">
                                {project.title}
                            </a>
                        </div>
                    ))
                ) : (
                    output
                )}
            </pre>
        </div>
    );
};
  
export default TerminalInput;