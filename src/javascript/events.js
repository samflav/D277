$(document).ready(function(){

    let path = window.location.pathname;
    console.log(path);
    $("#nav-placeholder").load("/assets/nav.html");

    $(document).click(function(event) {
        if (document.getElementById("hamburger-button").contains(event.target)
            || document.getElementById("sidebar").contains(event.target)) {
            manage_sidebar();
        } else {
            manage_sidebar("close");
        }
    });

    $(document).on('mouseover', '#hamburger-button', () => {
        document.body.style.cursor = 'pointer';
    });

    $(document).on('mouseout', '#hamburger-button', () => {
        document.body.style.cursor = '';
    });
});

function manage_sidebar(method="none") {
    let sidebar = document.getElementById('sidebar');
    if (method === "none") {
        if (sidebar.style.visibility === "visible") {
            sidebar.style.visibility = "hidden";
        } else {
            sidebar.style.visibility = "visible";
        }
    }

    if (method === "close") {
        sidebar.style.visibility = "hidden";
    }
}


