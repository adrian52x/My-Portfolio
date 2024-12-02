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
        title: "Parking Finder App (Concept)",
        mainImage: "/images/ParkingFinderApp/OAK-home.jpg",
        images: ["/images/ParkingFinderApp/OAK-home.jpg", "/images/ParkingFinderApp/OAK-map.jpg", "/images/ParkingFinderApp/OAK-map2.jpg", "/images/ParkingFinderApp/OAK-parkingSlots.jpg", "/images/ParkingFinderApp/OAK-profile.jpg"],
        technologies: ["Svelte", "Node.js", "Express", "MongoDB", "Tailwind"],
        comments: ["Period: 2022", "Concept project for a parking finder app"]
    },
    {
        id: "2",
        title: "Neural-network Image classifier",
        mainImage: "/images/image-classifier.png",
        images: ["/images/image-classifier.png"],
        technologies: ["Python", "TensorFlow", "Keras"],
        comments: ["Period: 2022", "Image classifier using neural networks"]
    },


    {
        id: "3",
        title: "Floor Plan (AGC Biologics)",
        isImportant: true,
        mainImage: "/images/floorplan/floorplan-main.jpg",
        images: ["/images/floorplan/floorplan-dev-steps.jpg", "/images/floorplan/vat83b-2.jpg", "/images/floorplan/vat83b-edit-room.jpg", "/images/floorplan/vat83b-search.jpg"],
        videos: ["/videos/floor-plan.mp4"],
        technologies: ["Svelte", "Node.js", "Express", "MongoDB", "Tailwind"],
        comments: ["Period: 2023", "Digital floor plan project for AGC Biologics", "Implemented frontend, backend, and CI/CD pipeline"]
    },

    {
        id: "4",
        title: "Travel Destinations",
        mainImage: "/images/travel/travel.jpg",
        images: ["/images/travel/travel.jpg", "/images/travel/travel-login.png", "/images/travel/travel-add.png"],
        videos: ["/videos/travel.mp4"],
        technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
        comments: ["Period: 2024", "Web app where users can save their travel destinations"]
    },
    {
        id: "5",
        title: "Simple Pokemon App",
        mainImage: "/images/pokemonApp/1.png",
        images: ["/images/pokemonApp/1.png", "/images/pokemonApp/2.png"],
        technologies: ["Vue.js", "API"],
        comments: ["Period: 2021", "Simple Pokemon app built in Vue.js for an interview task"]
    },
    {
        id: "6",
        title: "Ask & Share (Startup)",
        isImportant: true,
        mainImage: "/images/ask-share/askshare-mentors.png",
        images: ["/images/ask-share/askshare-mentors.png", "/images/ask-share/askshare-sessions.png"],
        videos: ["/videos/askshare-main.mp4", "/videos/askshare-meeting.mp4", "/videos/askshare-mentor.mp4"],
        technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind", "Stripe", "Webhooks"],
        comments: ["Period: 2024", "Project stopped at MVP stage", "This project is a platform for mentors and mentees to connect and share knowledge", "Based on airbnb business model"]
    },
    {
        id: "7",
        title: "DAOS",
        mainImage: "/images/daos/DAOS-main.png",
        images: ["/images/daos/DAOS-main.png", "/images/daos/DAOS-sog.png"],
        technologies: ["React", "Nest.js", "MongoDB", "Tailwind"],
        comments: ["Period: now (in progress)", "DAOS (Dansk Amatørorkester samvirke)"]
    },
    {
        id: "8",
        title: "My first E-Commerce",
        mainImage: "/images/e-com/1.png",
        images: ["/images/e-com/1.png", "/images/e-com/2.png", "/images/e-com/3.png", "/images/e-com/4.png", "/images/e-com/5.png"],
        technologies: ["Svelte", "Node.js", "Express", "Database"],
        comments: ["Period: 2021", "Simple e-commerce project built in Svelte"]
    },

    {
        id: "9",
        title: "C19 Test Center",
        mainImage: "/images/no-img.jpg",
        images: ["/images/c19.png"],
        technologies: ["Java Spring Boot", "Thymeleaf", "Database"],
        comments: ["Period: 2020", "Covid-19 Test Center project to book appointments"]
    },
];