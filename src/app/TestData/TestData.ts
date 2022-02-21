import { Site } from "../class/site";

export class TestData {

    static sites: Site[] = [
        {id: 1, image: "../../assets/images/img-1.jpeg", title: "CoffeeShop Website", link: 'https://portfolio-coffeeshop.web.app/', github: "https://github.com/vitkovsky21/coffee-shop-angular-css-bootstrap"},
        {id: 2, image: "../../assets/images/img-2.jpg", title: 'Shopping Website using client-server communication', link: 'https://portfolio-shoppingwebsite.web.app', github: "https://github.com/vitkovsky21/shopping-magazine"},
        {id: 3, image: "../../assets/images/img-5.jpg", title: 'My Portfolio Website Itself :)', link: 'https://portfolio-vladislav.web.app/', github: "#"},
        {id: 4, image: "../../assets/images/img-3.jpg", title: 'TODO Website (simple TODO project using bootstrap)', link: 'https://portfolio-simpletodo.web.app/', github: "https://github.com/vitkovsky21/todo-angular"},
        {id: 5, image: "../../assets/images/img-4.jpg", title: 'Course Assignment Project using Angular Material and Heroku', link: 'https://portfolio-courseassignment.web.app', github: "https://github.com/vitkovsky21/conFusion"}
    ]

}