import { Categories } from "../class/categories";
import { Site } from "../class/site";

export class TestData {

    static categories: Categories[] = [
        {id: 1, name: 'Vue.js', image: '../../assets/images/icon-01.jpg'},
        {id: 2, name: 'Angular', image: '../../assets/images/icon-01.jpg'},
        {id: 3, name: 'React', image: '../../assets/images/icon-01.jpg'},
        {id: 4, name: 'Other', image: '../../assets/images/icon-01.jpg'}
    ]

    static sites: Site[] = [
        {
            id: 1, 
            image: "../../assets/images/img-7.bmp", 
            title: "Parfumdelame Shop", 
            link: 'https://parfumdelame-sample3.web.app/', 
            github: "https://github.com/vitkovsky21/parfumdelame", 
            category: TestData.categories[1]
        },
        {
            id: 2, 
            image: "../../assets/images/img-11.jpeg", 
            title: "Highcharts Website", 
            link: 'https://highcharts-testing.web.app/', 
            github: 'https://github.com/vitkovsky21/test-pr',
            category: TestData.categories[1]
        },
        {
            id: 3, 
            image: "../../assets/images/img-8.jpg", 
            title: 'Messenger', 
            link: 'https://cosmic-valkyrie-60368c.netlify.app/', 
            github: 'https://github.com/vitkovsky21/middle.messenger.praktikum.yandex',
            category: TestData.categories[3]
        },
        {
            id: 4, 
            image: "../../assets/images/img-9.jpeg", 
            title: "Vue.js Shop", 
            link: 'https://62f3d5c9fa4c5d009f9cdbbc--strong-cuchufli-53c054.netlify.app/', 
            github: "https://github.com/vitkovsky21/vue-shop",
            category: TestData.categories[0]
        },
        {
            id: 5, 
            image: "../../assets/images/img-1.jpeg", 
            title: "CoffeeShop Website", 
            link: 'https://portfolio-coffeeshop.web.app/', 
            github: "https://github.com/vitkovsky21/coffee-shop-angular-css-bootstrap",
            category: TestData.categories[1]
        },
        {
            id: 6, 
            image: '../../assets/images/img-10.jpeg', 
            title: 'Adding Products App', 
            link: 'https://6300e2c873d24550151fa470--transcendent-biscuit-566432.netlify.app/', 
            github: 'https://github.com/vitkovsky21/developer-test',
            category: TestData.categories[0]
        },
        {
            id: 7, 
            image: "../../assets/images/img-4.jpg", 
            title: 'Course Assignment Project', 
            link: 'https://portfolio-courseassignment.web.app', 
            github: "https://github.com/vitkovsky21/conFusion",
            category: TestData.categories[1]
        },
        {
            id: 8, 
            image: "../../assets/images/img-3.jpg", 
            title: 'TODO Table', 
            link: 'https://portfolio-simpletodo.web.app/', 
            github: "https://github.com/vitkovsky21/todo-angular",
            category: TestData.categories[1]
        },
        {
            id: 9, 
            image: "../../assets/images/img-2.jpg", 
            title: 'Shopping Website', 
            link: 'https://portfolio-shoppingwebsite.web.app', 
            github: "https://github.com/vitkovsky21/shopping-magazine",
            category: TestData.categories[1]
        },
        {
            id: 10, 
            image: "../../assets/images/img-5.jpg", 
            title: 'My Portfolio Website Itself :)', 
            link: 'https://portfolio-b-vladislav.web.app/', 
            github: "https://github.com/vitkovsky21/portfolio-project",
            category: TestData.categories[1]
        }
    ]

}