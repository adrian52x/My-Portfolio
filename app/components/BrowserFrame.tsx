import React from 'react'

interface MacBrowserFrameProps {
  title?: string
  children: React.ReactNode
  gradientFrom?: string
  gradientTo?: string
}

export default function BrowserFrame({ 
  title = 'Browser', 
  children, 
  gradientFrom = 'from-blue-400', 
  gradientTo = 'to-purple-500' 
}: MacBrowserFrameProps) {
  return (
    <div className="m-8 flex items-center justify-center">
      <div className={`max-w-4xl w-full mx-auto rounded-lg overflow-hidden shadow-2xl ${gradientFrom} ${gradientTo} bg-gradient-to-br p-[2px]`}>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          {/* Title bar */}
          <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-medium text-gray-300">{title}</div>
            <div className="w-4"></div>
          </div>
          
          {/* Content area */}
          <div className="bg-gray-800 p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}