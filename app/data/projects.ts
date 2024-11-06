export interface ProjectParams {
    id: string;
    title: string;
    isImportant?: boolean;
    mainImage: string;
    images: string[];
    videos?: string[];
    technologies?: string[];
    comments?: string[];
}

export const projects: ProjectParams[] = [
    {
        id: "1",
        title: "Travel Destinations",
        mainImage: "/images/travel/travel.jpg",
        images: ["/images/travel/travel.jpg", "/images/travel/travel-login.png", "/images/travel/travel-add.png"],
        videos: ["/videos/travel.mp4"],
        technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
        comments: ["This setup ensures that there is consistent spacing between each comment, making the layout look cleaner and more organized.", 
            "This is another comment"]
    },
    {
        id: "2",
        title: "My first E-Commerce",
        mainImage: "/images/e-com/1.png",
        images: ["/images/e-com/1.png", "/images/e-com/2.png", "/images/e-com/3.png", "/images/e-com/4.png", "/images/e-com/5.png"],
        technologies: ["Svelte", "Node.js", "Express", "Database"]
    },
    {
        id: "3",
        title: "Simple Pokemon App",
        mainImage: "/images/pokemonApp/1.png",
        images: ["/images/pokemonApp/1.png", "/images/pokemonApp/2.png"],
        technologies: ["Vue.js", "API"]
    },
    {
        id: "4",
        title: "Ask & Share (Startup)",
        isImportant: true,
        mainImage: "/images/ask-share/askshare-mentors.png",
        images: ["/images/ask-share/askshare-mentors.png", "/images/ask-share/askshare-sessions.png"],
        videos: ["/videos/askshare-main.mp4", "/videos/askshare-meeting.mp4", "/videos/askshare-mentor.mp4"],
        technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind", "Stripe", "Webhooks"]
    },
    {
        id: "5",
        title: "Floor Plan (AGC Biologics)",
        isImportant: true,
        mainImage: "/images/floorplan/floorplan-main.jpg",
        images: ["/images/floorplan/floorplan-dev-steps.jpg", "/images/floorplan/vat83b-2.jpg", "/images/floorplan/vat83b-edit-room.jpg", "/images/floorplan/vat83b-search.jpg"],
        videos: ["/videos/floor-plan.mp4"],
        technologies: ["Svelte", "Node.js", "Express", "MongoDB", "Tailwind"]
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
        technologies: ["Svelte", "Node.js", "Express", "MongoDB", "Tailwind"]
    },
    {
        id: "8",
        title: "DAOS",
        mainImage: "/images/daos/DAOS-main.png",
        images: ["/images/daos/DAOS-main.png", "/images/daos/DAOS-sog.png"],
        technologies: ["React", "Nest.js", "MongoDB", "Tailwind"],
        comments: ["DAOS (Dansk Amatørorkester samvirke)"]
    },
    {
        id: "9",
        title: "idk App",
        mainImage: "/images/texteditor.jpg",
        images: ["/images/texteditor.jpg"],
        technologies: ["React", "Node.js", "Tailwind", "Database"]
    },
];