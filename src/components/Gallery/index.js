import './style.css';
import template from './index.html';
const Gallery = document.createElement("div");
Gallery.classList.add("gallery");

Gallery.innerHTML = template;
console.log(Gallery);
export default Gallery;