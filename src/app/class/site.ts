export class Site {
    id: number;
    image: any;
    title: string;
    link: any;

    constructor(id: number, image: any, title: string, link: any) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.link = link;
    }
}