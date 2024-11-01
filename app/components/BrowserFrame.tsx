import React from 'react'

interface MacBrowserFrameProps {
  title?: string
  children: React.ReactNode
  video?: boolean
}

export default function BrowserFrame({ 
  title = '', 
  children,
  video = false, 
}: MacBrowserFrameProps) {
  //${gradientFrom} ${gradientTo} bg-gradient-to-br
  return (
    <>
    <div className="flex items-center justify-center">
      <div className={`max-w-6xl w-full mx-auto rounded-lg overflow-hidden shadow-custom bg-gray-900 p-[4px]`}>
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
          <div className="bg-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
    

    <div className="flex justify-center py-10">
        <div className="w-full max-w-7xl flex items-center">
          <div className="flex-grow h-0.5 bg-gray-500"></div>
          <div className="w-4 h-4 bg-gray-500 transform rotate-45"></div>
          <div className="flex-grow h-0.5 bg-gray-500"></div>
        </div>
    </div>
   </>
  )
}