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
        title: "Node Download",
        mainImage: "/images/node-download.jpg",
        images: ["/images/node-download.jpg", "/images/node-download.jpg"],
        technologies: ["Node.js", "Database"]
    },
    {
        id: "3",
        title: "NPM Veri",
        mainImage: "/images/npm-veri.jpg",
        images: ["/images/npm-veri.jpg", "/images/npm-veri.jpg"],
        technologies: ["React", "Tailwind"]
    },
    {
        id: "4",
        title: "Manage App",
        mainImage: "/images/manage-app.png",
        images: ["/images/manage-app.png", "/images/manage-app.png"],
        technologies: ["React", "Node.js", "Database"]
    },
    {
        id: "5",
        title: "Floor Plan (AGC Biologics)",
        mainImage: "/images/floorplan/floorplan-main.jpg",
        images: ["/images/floorplan/floorplan-dev-steps.jpg", "/images/floorplan/vat83b-2.jpg"],
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
        title: "Travel",
        mainImage: "/images/travel.jpg",
        images: ["/images/travel.jpg", "/images/travel.jpg"],
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
        title: "Manage App",
        mainImage: "/images/manage-app.png",
        images: ["/images/manage-app.png", "/images/manage-app.png"],
        technologies: ["React", "Node.js", "Tailwind", "Database"]
    },
];