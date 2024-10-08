$(document).ready(function(){

    let nav_path = ""
    if (window.location.pathname.includes("D277")) {
        nav_path = "/D277/src/assets/nav.html" //put here to fix routing in my IDE...
    } else {
        nav_path = "/assets/nav.html"
    }

    $("#nav-placeholder").load(nav_path, function() {
        let link = document.getElementById("Specific-Link")
        if (link) {
            document.getElementById("Generic-Link").replaceWith(link);
            link.style.visibility = "visible";
        }
    });

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


