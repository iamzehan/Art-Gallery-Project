import './style.css';
import template from './index.html';

export default class Home{
    constructor(){
        this.home = document.createElement("div");
        this.home.innerHTML = template;
    }
    getHome(){
        return this.home;
    }
}