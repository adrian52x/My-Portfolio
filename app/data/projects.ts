export interface ProjectParams {
    id: string;
    title: string;
    image: string;
    video?: string;
}

export const projects: ProjectParams[] = [
    {
        id: "1",
        title: "Travel",
        image: "/images/travel.jpg",
    },
    {
        id: "2",
        title: "Node Download",
        image: "/images/node-download.jpg",
    },
    {
        id: "3",
        title: "NPM Veri",
        image: "/images/npm-veri.jpg",
    },
    {
        id: "4",
        title: "Manage App",
        image: "/images/manage-app.png",
    },
    {
        id: "5",
        title: "Text Editor",
        image: "/images/texteditor.jpg",
        video: "/videos/floor-plan.mp4",
    },
    {
        id: "6",
        title: "CJ",
        image: "/images/cj.png",
    },
    {
        id: "7",
        title: "Travel",
        image: "/images/travel.jpg",
    },
    {
        id: "8",
        title: "SS",
        image: "/images/ss.png",
    },
    {
        id: "9",
        title: "Manage App",
        image: "/images/manage-app.png",
    },
]