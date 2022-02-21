import { Site } from "../class/site";

export class TestData {

    static sites: Site[] = [
        {id: 1, image: "../../assets/images/img-1.jpeg", title: "CoffeeShop Website", link: 'https://portfolio-coffeeshop.web.app/', github: "https://github.com/vitkovsky21/coffee-shop-angular-css-bootstrap"},
        {id: 2, image: "../../assets/images/img-2.jpg", title: 'Shopping Website', link: 'https://portfolio-shoppingwebsite.web.app', github: "https://github.com/vitkovsky21/shopping-magazine"},
        {id: 3, image: "../../assets/images/img-3.jpg", title: 'TODO Website', link: 'https://portfolio-simpletodo.web.app/', github: "https://github.com/vitkovsky21/todo-angular"}
    ]

}