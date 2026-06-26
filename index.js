function showPage(event, page) {

    event.preventDefault();

    // Hide all pages
    document.querySelectorAll(".page").forEach(section => {
        section.classList.remove("active");
    });

    // Show selected page
    document.getElementById(page).classList.add("active");

    // Remove active from all nav links
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
    });

    // Add active to clicked link
    event.target.classList.add("active");
}

function showPage(event, page){

    event.preventDefault();

    document.querySelectorAll(".page").forEach(section=>{
        section.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");

    document.querySelectorAll("nav a").forEach(link=>{
        link.classList.remove("active");
    });

    event.target.classList.add("active");
}