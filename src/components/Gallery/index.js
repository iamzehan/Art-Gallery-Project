import "./style.css";
import template from "./index.html";
import Details from "../Details";
export class Gallery {
  constructor(router) {
    this.router = router;
    this.gallery = document.createElement("div");
    this.gallery.classList.add("gallery");
    this.gallery.innerHTML = template;
    this.setupGalleryEvents();
  }
  getGallery() {
    return this.gallery;
  }
  setupGalleryEvents() {
    const pictures = this.gallery.querySelectorAll("div.img");
    pictures.forEach((picture, index) => {
      picture.addEventListener("click", () => {
        this.router.navigate(`/gallery/details/${index + 1}`);
      });
    });
  }
}