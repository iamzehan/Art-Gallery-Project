import "./style.css";
import Gallery from "./components/Gallery";
import Details from "./components/Details";

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
const menuItems = document.querySelectorAll(".navigation a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    pageLoader(item);
  });
});

const pageLoader = (item) => {
  content.innerHTML = "";
  if (item.classList.contains("gallery")) {
    content.appendChild(Gallery);
  }
  if (item.classList.contains("about")) {
    content.appendChild(Details);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const active = document.querySelector(".navigation a.active");
  active.style.color = "whitesmoke";
  pageLoader(active);
});

const pictures = Gallery.querySelectorAll("div.img");
console.log(pictures);
pictures.forEach(picture=>{
  picture.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(Details);
  });
});
