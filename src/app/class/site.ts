import { Categories } from "./categories";

export class Site {
    id: number;
    image: any;
    title: string;
    link?: any;
    github: any;
    category: Categories

    constructor(id: number, image: any, title: string, link: any, github: any, category: Categories) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.link = link;
        this.github = github;
        this.category = category
    }
}