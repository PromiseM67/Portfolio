console.log("Hello World");

const aboutLink = document.querySelector(".AboutLink");
const projectsLink = document.querySelector(".ProjectsLink");
const contactLink = document.querySelector(".ContactLink");

aboutLink.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#8338ec";
    console.log("About Link Hovered");
});

aboutLink.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "#3a86ff";
});

projectsLink.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#ffbe0b";
});

projectsLink.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "#3a86ff";
});

contactLink.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "#ff006e";
});

contactLink.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "#3a86ff";
});