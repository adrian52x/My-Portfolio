'use client'

import React, { useState, useEffect, useCallback } from 'react'

interface BrowserFrameProps {
    title?: string
    children: React.ReactNode
}

export default function BrowserFrame({ title = '', children }: BrowserFrameProps) {
    const [modalSrc, setModalSrc] = useState<string | null>(null);

    const closeModal = useCallback(() => setModalSrc(null), []);

    useEffect(() => {
        if (!modalSrc) return;
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [modalSrc, closeModal]);

    const renderedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === 'img') {
        const imgProps = child.props as React.ImgHTMLAttributes<HTMLImageElement>;
        return React.cloneElement(child as React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>, {
            title: 'Click to enlarge',
            className: `${imgProps.className ?? ''} cursor-zoom-in`,
            onClick: () => setModalSrc(imgProps.src ?? null),
        });
        }
        return child;
});

    return (
        <>
        <div className="flex items-center justify-center">
            <div className="max-w-6xl w-full mx-auto rounded-lg overflow-hidden shadow-custom bg-gray-900 p-[4px]">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                    {/* Title bar */}
                    <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="text-sm text-gray-300 uppercase font-semibold" >
                            {
                                React.isValidElement(children) && (children as React.ReactElement).type === 'img' ? (
                                    <span>Image</span>
                                ) : <span>Video</span>
                            }
                        </div>
                    </div>

                    {/* Content area */}
                    <div className="bg-gray-700">
                        {renderedChildren}
                    </div>
                </div>
            </div>
        </div>

        {/* Styled HR */}
        <div className="flex justify-center py-10">
            <div className="w-full max-w-7xl flex items-center">
                <div className="flex-grow h-0.5 bg-gray-500" />
                <div className="w-4 h-4 bg-gray-500 transform rotate-45" />
                <div className="flex-grow h-0.5 bg-gray-500" />
            </div>
        </div>

        {/* Image Modal */}
        {modalSrc && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
                onClick={closeModal}
            >
                <div
                    className="relative max-w-[92vw] max-h-[92vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={closeModal}
                        aria-label="Close modal"
                        className="absolute -top-4 -right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 border border-gray-600 text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200 shadow-lg"
                    >
                        ✕
                    </button>

                    {/* Image */}
                    <img
                        src={modalSrc}
                        alt="Enlarged view"
                        className="max-w-full max-h-[90vh] rounded-lg object-contain shadow-2xl border border-white/10"
                    />
                </div>
            </div>
        )}
        </>
    );
}