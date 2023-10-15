/*Typewriter Effect*/

// Get the title element
const titleElement = document.getElementById("typewriter-text");
const text = titleElement.innerText;
titleElement.innerText = "";

// Function to simulate the typewriter effect
function typeWriterEffect(text, i) {
    if (i < text.length) {
        titleElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriterEffect(text, i);
        }, 100); // Adjust the speed by changing the value (in milliseconds)
    }
}

// Start the typewriter effect when the page loads
window.onload = function () {
    typeWriterEffect(text, 0);
};


/*Scrolling Effect*/
document.addEventListener("DOMContentLoaded", function () {
    const researchSection = document.getElementById("research");
    const projectsSection = document.getElementById("projects");
    const projectsTable = document.getElementById("projects-table");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 75) {
            researchSection.classList.remove("hidden");
        }
        if (scrollPosition > 200) {
            projectsSection.classList.remove("hidden");
        }
        if (scrollPosition > 200) {
            projectsTable.classList.remove("hidden");
        }
    });
});
