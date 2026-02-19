console.log("Hello World");

// Define colors for each page
const pageColors = {
    home: "#3a86ff",
    about: "#000000",
    projects: "#ffbe0b",
    contact: "#ff006e"
};
const white = "#FFFFFF"


let currentActivePage = 'home';

const aboutLink = document.querySelector(".AboutLink");
const projectsLink = document.querySelector(".ProjectsLink");
const contactLink = document.querySelector(".ContactLink");

// Helper function to set background color
function setBackground(color) {
    document.body.style.backgroundColor = color;
}

// Hover effects
aboutLink.addEventListener("mouseenter", () => setBackground(pageColors.about));
aboutLink.addEventListener("mouseleave", () => setBackground(pageColors[currentActivePage]));

projectsLink.addEventListener("mouseenter", () => setBackground(pageColors.projects));
projectsLink.addEventListener("mouseleave", () => setBackground(pageColors[currentActivePage]));

contactLink.addEventListener("mouseenter", () => setBackground(pageColors.contact));
contactLink.addEventListener("mouseleave", () => setBackground(pageColors[currentActivePage]));

// Navigation Logic
const navButtons = document.querySelectorAll(".navLink a");
const pages = document.querySelectorAll(".page");
const backButtons = document.querySelectorAll(".backButton");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.page;
        console.log("Navigating to:", targetId);

        // Update active page and color
        currentActivePage = targetId;
        setBackground(pageColors[currentActivePage]);
        if (currentActivePage=="about"){
            document.body.style.color = white
        };

        // Switch visible section
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(targetId).classList.add("active");
    });
});

// Back Button Logic
backButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Going back to Home");
        
        // Update active page and color
        currentActivePage = 'home';
        setBackground(pageColors.home);

        // Switch visible section
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById('home').classList.add("active");
    });
});
