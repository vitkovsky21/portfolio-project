export class Site {
    id: number;
    image: any;
    title: string;
    link: any;
    github: any;

    constructor(id: number, image: any, title: string, link: any, github: any) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.link = link;
        this.github = github;
    }
}