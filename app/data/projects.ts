export interface ProjectParams {
    id: string;
    title: string;
    mainImage: string;
    images: string[];
    video?: string;
    technologies?: string[];
    comments?: string[];
}

export const projects: ProjectParams[] = [
    {
        id: "1",
        title: "Travel",
        mainImage: "/images/travel.jpg",
        images: ["/images/travel.jpg", "/images/travel.jpg"],
        technologies: ["React", "Node.js", "Tailwind", "Database"],
        comments: ["This setup ensures that there is consistent spacing between each comment, making the layout look cleaner and more organized.", 
            "This is another comment"]
    },
    {
        id: "2",
        title: "My first E-Commerce",
        mainImage: "/images/e-com/1.png",
        images: ["/images/e-com/1.png", "/images/e-com/2.png", "/images/e-com/3.png", "/images/e-com/4.png", "/images/e-com/5.png"],
        technologies: ["Node.js", "Database"]
    },
    {
        id: "3",
        title: "Simple Pokemon App",
        mainImage: "/images/pokemonApp/1.png",
        images: ["/images/pokemonApp/1.png", "/images/pokemonApp/2.png"],
        technologies: ["React", "Tailwind"]
    },
    {
        id: "4",
        title: "idk App",
        mainImage: "/images/node-download.jpg",
        images: ["/images/node-download.jpg"],
        technologies: ["React", "Node.js", "Database"]
    },
    {
        id: "5",
        title: "Floor Plan (AGC Biologics)",
        mainImage: "/images/floorplan/floorplan-main.jpg",
        images: ["/images/floorplan/floorplan-dev-steps.jpg", "/images/floorplan/vat83b-2.jpg", "/images/floorplan/vat83b-edit-room.jpg", "/images/floorplan/vat83b-search.jpg"],
        video: "/videos/floor-plan.mp4",
        technologies: ["React", "Tailwind"]
    },
    {
        id: "6",
        title: "CJ",
        mainImage: "/images/cj.png",
        images: ["/images/cj.png"],
        technologies: ["React", "Node.js"]
    },
    {
        id: "7",
        title: "Parking Finder App (Concept)",
        mainImage: "/images/ParkingFinderApp/OAK-home.jpg",
        images: ["/images/ParkingFinderApp/OAK-home.jpg", "/images/ParkingFinderApp/OAK-map.jpg", "/images/ParkingFinderApp/OAK-map2.jpg", "/images/ParkingFinderApp/OAK-parkingSlots.jpg", "/images/ParkingFinderApp/OAK-profile.jpg"],
        technologies: ["React", "Tailwind"]
    },
    {
        id: "8",
        title: "SS",
        mainImage: "/images/ss.png",
        images: ["/images/ss.png", "/images/ss.png"],
        technologies: ["React", "Node.js", "Database"]
    },
    {
        id: "9",
        title: "idk App",
        mainImage: "/images/texteditor.jpg",
        images: ["/images/texteditor.jpg"],
        technologies: ["React", "Node.js", "Tailwind", "Database"]
    },
];