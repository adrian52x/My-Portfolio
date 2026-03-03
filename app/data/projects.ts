export interface ProjectParams {
    id: string;
    title: string;
    year: number;
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
        year: 2024,
        mainImage: "/images/travel/travel.jpg",
        images: ["/images/travel/travel.jpg", "/images/travel/travel-login.png", "/images/travel/travel-add.png"],
        videos: ["/videos/travel.mp4"],
        technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
        comments: [
            "2024 / School project",
            "Web app where users can save their travel destinations and share them with others",
        ],
        link: "https://travel-destinations-project.vercel.app/"
    },
    {
        id: "8",
        title: "Green-UX",
        year: 2025,
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
        id: "2",
        title: "Neural-network Image classifier",
        year: 2022,
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
        id: "5",
        title: "Simple Pokemon App",
        year: 2021,
        mainImage: "/images/pokemonApp/1.png",
        images: ["/images/pokemonApp/1.png", "/images/pokemonApp/2.png"],
        technologies: ["Vue.js", "API"],
        comments: [
            "2021 / Interview task", 
            "Simple Pokemon app built in Vue.js for an interview task"
        ]
    },

    {
        id: "3",
        title: "Digital Floor Plan (AGC Biologics)",
        year: 2023,
        isImportant: true,
        mainImage: "/images/floorplan/floorplan_thumbnail.jpg",
        images: ["/images/floorplan/floorplan-dev-steps.jpg", "/images/floorplan/vat83b-2.jpg", "/images/floorplan/vat83b-edit-room.jpg", "/images/floorplan/vat83b-search.jpg", "/images/floorplan/floorplan_new.jpg"],
        videos: ["/videos/floor-plan.mp4"],
        technologies: ["Svelte", "Node.js", "Express", "MongoDB", "Tailwind"],
        comments: [
            "2023 / Internal tool for AGC Bio",
            "Fully interactive digital solution used across the facility",
            "Powerful search & filtering lets staff instantly locate any room or instrument on the map",
            "Built end-to-end — from database architecture and REST API to a responsive Svelte frontend"
        ],
        link: "https://go.screenpal.com/watch/c0Qo3pVCaPH?redirect=true"    
    },
    {
        id: "11",
        title: "www.dezinfect.md [e-commerce]",
        year: 2025,
        isImportant: true,
        mainImage: "/images/mediclean/mediclean2.jpg",
        images: ["/images/mediclean/dezinfect1.jpg", "/images/mediclean/dezinfect2.jpg", "/images/mediclean/mediclean2.jpg",  "/images/mediclean/mediclean3.jpg",  "/images/mediclean/mediclean4.jpg", "/images/mediclean/mediclean5.jpg", "/images/mediclean/mediclean6.jpg", "/images/mediclean/dezinfect3.jpg"],
        technologies: ["Next.js", "Tailwind", "Supabase", "PostgreSQL"],
        comments: [
            "2025 / Freelance project", 
            "www.dezinfect.md",
            "E-commerce website for disinfectants, cleaning products and medical equipment",
        ],
        link: "https://www.dezinfect.md"
    },
    
    {
        id: "6",
        title: "Ask & Share (Startup)",
        year: 2024,
        isImportant: false,
        mainImage: "/images/ask-share/askshare-mentors.png",
        images: ["/images/ask-share/askshare-mentors.png", "/images/ask-share/askshare-sessions.png"],
        videos: ["/videos/askshare-main.mp4", "/videos/askshare-meeting.mp4", "/videos/askshare-mentor.mp4"],
        technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind", "Stripe", "Webhooks"],
        comments: [
            "2024 / Startup project",
            "Ask & Share is a platform that connects mentors and mentees",
            "Users can book sessions with mentors and pay for them using Stripe", 
            "Project stopped at MVP stage", 
            "Based on airbnb business model"],
        link: "https://ask-share.netlify.app/"

    },


    {
        id: "7",
        title: "DAOS",
        year: 2024,
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
        id: "9",
        title: "My first E-Commerce",
        year: 2021,
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
        id: "14",
        title: "Modular authoring system (Ramboll)",
        year: 2026,
        mainImage: "/images/ramboll/ramboll_thumbnail.jpg",
        images: ["/images/ramboll/ramboll1.jpg", "/images/ramboll/ramboll2.jpg", "/images/ramboll/ramboll3.jpg", "/images/ramboll/ramboll4.jpg"],
        technologies: [ "React", "Next.js", "Nest.js", "PostgreSQL", "Docker", "MinIO" ],
        comments: [
            "Prototype developed as a bachelor project in collaboration with Ramboll — Incept Sustainability Team", 
            "The platform lets authors build structured e-learning content from scratch through a guided UI.",
            "E-learnings are composed of reusable content blocks.",
            "System is modular and scalable.",
        ]
    },
    {
        id: "13",
        title: "AI Surveillance System",
        year: 2025,
        mainImage: "/images/camera-ai/camera1.jpg",
        images: ["/images/camera-ai/camera1.jpg", "/images/camera-ai/camera2.jpg", "/images/camera-ai/camera3.jpg"],
        videos: ["/videos/camera-ai.mp4"],
        technologies: ["React", "Express", "TensorFlow", "Websockets", "Discord"],
        comments: [
            "2025 / Personal project", 
            "Home surveillance system that turns any device with a camera into a security monitor",
            "AI continuously detects persons for 4-6 seconds before triggering Discord alerts with screenshots",
            "Frontend built with Next.js and React using COCO-SSD (TensorFlow.js model) for real-time object detection",
            "Backend powered by Express and Socket.io for WebSocket communication between cameras and admin dashboard",
            "Admin dashboard displays all connected cameras with live video feeds",
        ]
    },
    {
        id: "15",
        title: "Wash World - Mobile App",
        year: 2025,
        mainImage: "/images/no-img.jpg",
        images: [],
        technologies: [ "React Native", "Expo Router", "Nest.js", "PostgreSQL" ],
        comments: [
            "TO BE ADDED",
            "2025 / Exam project",
        ]
    },
    {
        id: "12",
        title: "DREAM BAR",
        year: 2026,
        mainImage: "/images/dreambar/dreambar.jpg",
        images: ["/images/dreambar/dreambar.jpg", "/images/dreambar/dreambar3.jpg", "/images/dreambar/dreambar2.jpg", "/images/dreambar/dreambar4.jpg"],
        technologies: ["React", "Tailwind"],
        comments: [
            "2026 / Freelance project", 
            "Digital menu website for a local business in Moldova",
            "Interactive menu with categories, pricing, and modern design",
            "Mobile-responsive layout for customer convenience",
        ],
        link: "https://dreambar.vercel.app/"
    },
    {
        id: "4",
        title: "Parking Finder App (Concept)",
        year: 2022,
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
        title: "C-19 Test Center",
        year: 2020,
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