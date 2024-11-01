'use client';

import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-lg shadow-lg flex items-center"
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTopButton;