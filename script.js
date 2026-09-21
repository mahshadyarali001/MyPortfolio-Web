

const sections = {
    "about-text": "about-content",
    "services-text": "services-content",
    "resume": "resume-content"
};




const tabs = document.querySelectorAll(".tabs-nav a");
const contents = document.querySelectorAll(".container-text > .content");




tabs.forEach(tab => {

    tab.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = sections[this.id];

        if (!targetId) {
            return;
        }

        contents.forEach(content => {
            content.classList.remove("active");
        });



        const targetContent = document.getElementById(targetId);

        if (targetContent) {
            targetContent.classList.add("active");
        }

    });

});


const aboutContent = document.getElementById("about-content");

if (aboutContent) {
    aboutContent.classList.add("active");
}
