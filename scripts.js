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



const navButtons = document.querySelectorAll(".navLink a");
const pages = document.querySelectorAll(".page");

navButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const targetId = button.dataset.page; //stores the value from the data page set
        console.log("button clicked")
        console.log(targetId)

        pages.forEach(page=>{
            page.classList.remove('active');
        })

        document.getElementById(targetId)
                .classList.add("active")
    });

});