import "./style.css";
import Navigo from "navigo";
import { Gallery } from "./components/Gallery";
import Details from "./components/Details";
import Home from "./components/Home";

// Configure router for GitHub Pages
const base = "/Art-Gallery-Project/";
const router = new Navigo(base, { hash: true }); // Using hash-based routing for GitHub Pages
const header = document.querySelector("header");
const menuHider = document.querySelector(".menu-hider");
const menu = document.querySelector("nav");
const reach = document.querySelector(".reach");
const message = document.querySelector(".message");
const others = document.querySelectorAll(".reach > span:not(.message)");

menuHider.addEventListener("click", () => {
  reach.classList.toggle("slide");
  menu.classList.toggle("hide");
  header.classList.toggle("hide");
  menuHider.classList.toggle("hide");
  if (menuHider.textContent === "expand_more")
    menuHider.textContent = "expand_less";
  else menuHider.textContent = "expand_more";
});

message.addEventListener("click", () => {
  message.classList.toggle("active");
  others.forEach((other) => {
    other.classList.toggle("hide");
    other.classList.toggle("show");
  });
});

const content = document.querySelector(".content");

// Define routes
router
  .on("/", () => {
    content.innerHTML = "";
    content.appendChild(new Home().getHome());
    updateActiveLink("home");
  })
  .on("/gallery", () => {
    content.innerHTML = "";
    const gallery = new Gallery(router);
    content.appendChild(gallery.getGallery());
    updateActiveLink("gallery");
  })
  .on("/about", () => {
    content.innerHTML = "";
    updateActiveLink("about");
  })
  .on("/gallery/details/:id", (match) => {
    content.innerHTML = "";
    content.appendChild(Details);
    updateActiveLink("gallery");
  })
  .notFound(() => {
    // Redirect to home page if route not found
    router.navigate('/');
  });

// Initialize router
document.addEventListener("DOMContentLoaded", () => {
  router.resolve();
});

// Update active link in navigation
function updateActiveLink(routeName) {
  const menuItems = document.querySelectorAll(".navigation a");
  menuItems.forEach((item) => {
    if (item.classList.contains(routeName)) {
      item.classList.add("active");
      item.style.color = "whitesmoke";
    } else {
      item.classList.remove("active");
      item.style.color = "";
    }
  });
}

// Setup click events for navigation
const menuItems = document.querySelectorAll(".navigation a");
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const route = item.classList[0] === "home" ? "/" : `/${item.classList[0]}`;
    router.navigate(route);
  });
});
