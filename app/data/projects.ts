export interface ProjectParams {
    id: string;
    title: string;
    isImportant?: boolean;
    mainImage: string;
    images: string[];
    videos?: string[];
    technologies?: string[];
    comments?: string[];
    link?: string;
}

export const projects: ProjectParams[] = [
    {
        id: "1",
        title: "Travel Destinations",
        mainImage: "/images/travel/travel.jpg",
        images: ["/images/travel/travel.jpg", "/images/travel/travel-login.png", "/images/travel/travel-add.png"],
        videos: ["/videos/travel.mp4"],
        technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
        comments: [
            "2024 / School project",
            "Web app where users can save their travel destinations and share them with others",
        ]
    },
    {
        id: "9",
        title: "My first E-Commerce",
        mainImage: "/images/e-com/1.png",
        images: ["/images/e-com/1.png", "/images/e-com/2.png", "/images/e-com/3.png", "/images/e-com/4.png", "/images/e-com/5.png"],
        technologies: ["Svelte", "Node.js", "Express", "Database"],
        comments: [
            "2021 / Personal project", 
            "Simple e-commerce project built in Svelte",
            "Users can add products to cart and checkout",
            "Basic CRUD operations for products",
        ]
    },
 
    {
        id: "2",
        title: "Neural-network Image classifier",
        mainImage: "/images/image-classifier.png",
        images: ["/images/image-classifier.png"],
        technologies: ["Python", "TensorFlow", "Keras"],
        comments: [
            "2022 / Personal project", 
            "Image classifier using neural networks",
            "Trained a model to classify written digits (MNIST dataset)",
            "Used TensorFlow and Keras for model training and evaluation",
        ]
    },


    {
        id: "3",
        title: "Floor Plan (AGC Biologics)",
        isImportant: true,
        mainImage: "/images/floorplan/floorplan-main.jpg",
        images: ["/images/floorplan/floorplan-dev-steps.jpg", "/images/floorplan/vat83b-2.jpg", "/images/floorplan/vat83b-edit-room.jpg", "/images/floorplan/vat83b-search.jpg"],
        videos: ["/videos/floor-plan.mp4"],
        technologies: ["Svelte", "Node.js", "Express", "MongoDB", "Tailwind"],
        comments: [
            "2023 / Real project",
            "Created a digital floor plan solution for AGC Biologics as part of my student assistant role",
            "Responsibilities included frontend development, backend architecture, and CI/CD pipeline implementation",
            "Dinamic creation of floor plans and rooms",
            "Dinamic search and filtering of rooms/intruments",
        ],
        link: "https://go.screenpal.com/watch/c0Qo3pVCaPH?redirect=true"    
    },


    {
        id: "6",
        title: "Ask & Share (Startup)",
        isImportant: true,
        mainImage: "/images/ask-share/askshare-mentors.png",
        images: ["/images/ask-share/askshare-mentors.png", "/images/ask-share/askshare-sessions.png"],
        videos: ["/videos/askshare-main.mp4", "/videos/askshare-meeting.mp4", "/videos/askshare-mentor.mp4"],
        technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind", "Stripe", "Webhooks"],
        comments: [
            "2024 / Startup project",
            "Ask & Share is a platform that connects mentors and mentees",
            "Users can book sessions with mentors and pay for them using Stripe", 
            "Project stopped at MVP stage", 
            "Based on airbnb business model"]
    },
    {
        id: "8",
        title: "Green-UX",
        mainImage: "/images/green-ux/green1.jpg",
        images: ["/images/green-ux/green1.jpg", "/images/green-ux/green2.jpg"],
        technologies: ["HTML", "CSS", "JavaScript" ],
        comments: [
            "2025 / School (UX/UI) project",
            "Green-UX is a project focused on sustainable UX/UI design",
        ],
        link: "https://green-ux.vercel.app/"
    },
    {
        id: "5",
        title: "Simple Pokemon App",
        mainImage: "/images/pokemonApp/1.png",
        images: ["/images/pokemonApp/1.png", "/images/pokemonApp/2.png"],
        technologies: ["Vue.js", "API"],
        comments: [
            "2021 / Interview task", 
            "Simple Pokemon app built in Vue.js for an interview task"
        ]
    },


    {
        id: "7",
        title: "DAOS",
        mainImage: "/images/daos/DAOS-main.png",
        images: ["/images/daos/DAOS-main.png", "/images/daos/DAOS-sog.png"],
        technologies: ["React", "Nest.js", "MongoDB", "Tailwind"],
        comments: [
            "2024 / Exam project", 
            "DAOS (Dansk Amatørorkester samvirke)",
            "Web app for managing amateur orchestras in Denmark",
            "Users can create ensembles and look for musicians",
        ]
    },
    {
        id: "11",
        title: "Mediclean [e-commerce]",
        isImportant: true,
        mainImage: "/images/mediclean/mediclean2.jpg",
        images: ["/images/mediclean/mediclean1.jpg", "/images/mediclean/mediclean2.jpg",  "/images/mediclean/mediclean3.jpg",  "/images/mediclean/mediclean4.jpg", "/images/mediclean/mediclean5.jpg", "/images/mediclean/mediclean6.jpg"],
        technologies: ["Next.js", "Tailwind", "Supabase", "PostgreSQL"],
        comments: [
            "2025 / Real project for a client", 
            "In progress...",
            "Demo: mediclean.vercel.app"
        ],
        link: "https://mediclean.vercel.app/"
    },
    {
        id: "4",
        title: "Parking Finder App (Concept)",
        mainImage: "/images/ParkingFinderApp/OAK-home.jpg",
        images: ["/images/ParkingFinderApp/OAK-home.jpg", "/images/ParkingFinderApp/OAK-map.jpg", "/images/ParkingFinderApp/OAK-map2.jpg", "/images/ParkingFinderApp/OAK-parkingSlots.jpg", "/images/ParkingFinderApp/OAK-profile.jpg"],
        technologies: ["Svelte", "Node.js", "Express", "MongoDB", "Tailwind"],
        comments: [
            "2022 / Exam project", 
            "Concept project for a parking finder app",
            "Developed a web app that allows users to find available parking spots",
            "Implemented a map view to display parking locations and availability",
        ]
    },
    {
        id: "10",
        title: "C19 Test Center",
        mainImage: "/images/no-img.jpg",
        images: ["/images/c19.png"],
        technologies: ["Java Spring Boot", "Thymeleaf", "Database"],
        comments: [
            "2020 / Exam project", 
            "Covid-19 Test Center project to book appointments",
            "Developed using Java Spring Boot and Thymeleaf",
            "Implemented basic CRUD operations for appointments",
            "Role-based access control for users",
        ]
    },


    
];