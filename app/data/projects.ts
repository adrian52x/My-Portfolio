export interface ProjectParams {
    id: string;
    title: string;
    image: string[];
    video?: string;
    technologies?: string[];
    comments?: string[];
}

export const projects: ProjectParams[] = [
    {
        id: "1",
        title: "Travel",
        image: ["/images/travel.jpg", "/images/travel.jpg"],
        technologies: ["React", "Node.js", "Tailwind", "Database"],
        comments: ["This setup ensures that there is consistent spacing between each comment, making the layout look cleaner and more organized.", 
            "This is another comment"]
    },
    {
        id: "2",
        title: "Node Download",
        image: ["/images/node-download.jpg", "/images/node-download.jpg"],
        technologies: ["Node.js", "Database"]
    },
    {
        id: "3",
        title: "NPM Veri",
        image: ["/images/npm-veri.jpg", "/images/npm-veri.jpg"],
        technologies: ["React", "Tailwind"]
    },
    {
        id: "4",
        title: "Manage App",
        image: ["/images/manage-app.png", "/images/manage-app.png"],
        technologies: ["React", "Node.js", "Database"]
    },
    {
        id: "5",
        title: "Text Editor",
        image: ["/images/texteditor.jpg", "/images/texteditor.jpg"],
        video: "/videos/floor-plan.mp4",
        technologies: ["React", "Tailwind"]
    },
    {
        id: "6",
        title: "CJ",
        image: ["/images/cj.png", "/images/cj.png"],
        technologies: ["React", "Node.js"]
    },
    {
        id: "7",
        title: "Travel",
        image: ["/images/travel.jpg", "/images/travel.jpg"],
        technologies: ["React", "Tailwind"]
    },
    {
        id: "8",
        title: "SS",
        image: ["/images/ss.png", "/images/ss.png"],
        technologies: ["React", "Node.js", "Database"]
    },
    {
        id: "9",
        title: "Manage App",
        image: ["/images/manage-app.png", "/images/manage-app.png"],
        technologies: ["React", "Node.js", "Tailwind", "Database"]
    },
];