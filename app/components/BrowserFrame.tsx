'use client'

import React, { useState }  from 'react'

interface BrowserFrameProps {
  title?: string
  children: React.ReactNode
  video?: boolean
}

export default function BrowserFrame({ 
  title = '', 
  children,
}: BrowserFrameProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');

  const openModal = (imgSrc: string) => {
    setModalImgSrc(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImgSrc('');
  };

  return (
    <>
    <div className="flex items-center justify-center ">
        <div className={`max-w-6xl w-full mx-auto rounded-lg overflow-hidden shadow-custom  bg-gray-900 p-[4px]`}>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
                {/* Title bar */}
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-300">{title}</div>
                    <div className="w-4"></div>
                </div>
                
                {/* Content area */}
                <div className="bg-gray-700 cursor-pointer">
                    {/* {children} */}
                    
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child) && child.type === 'img') {
                        return React.cloneElement(child as React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>, {
                            title: 'Click to enlarge',
                            onClick: () => openModal(child.props.src),
                        });
                        }
                        return child;
                    })}
                    
                </div>
            </div>
        </div>
    </div>
    

    {/* Styled HR - to separate frames */}
    <div className="flex justify-center py-10">
        <div className="w-full max-w-7xl flex items-center">
            <div className="flex-grow h-0.5 bg-gray-500"/>
            <div className="w-4 h-4 bg-gray-500 transform rotate-45"/>
            <div className="flex-grow h-0.5 bg-gray-500"/>
        </div>
    </div>

    {/* Image Modal */}
    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          {/* Close Button - Fixed to screen, not image */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 z-[60] bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
          >
            ✕ Close
          </button>
          
          {/* Image Container */}
          <img src={modalImgSrc} className="max-w-[90vw] max-h-[90vh] object-contain" />
        </div>
      )}

   </>
  )
}