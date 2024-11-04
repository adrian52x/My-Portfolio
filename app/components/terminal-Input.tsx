'use client'
import React, { useState, useEffect } from 'react';

import { projects } from '../data/projects';


const TerminalInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (inputValue.trim() === 'ls') {
          setOutput(projects.map((project) => project.title).join('\n'));
        } else {
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
            <span>(type ls)</span>
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
            <pre className="text-orange-300 mt-2 whitespace-pre-wrap">{output}</pre>
        </div>
    );
};
  
export default TerminalInput;