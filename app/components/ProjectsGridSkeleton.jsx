const ProjectsGridSkeleton = () => {
    return (
        <>
        
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="project animate-pulse rounded-lg shadow-md p-4"
          >
            <div className="h-48 bg-gray-600 rounded-md mb-4"></div>
            <div className="h-6 bg-gray-600 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-600 rounded-md w-1/2"></div>
          </div>
        ))}
        </>
    );
  };
  
  export default ProjectsGridSkeleton;