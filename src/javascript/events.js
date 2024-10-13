$(document).ready(function(){


    replace_link();

    $(document).click(function(event) {
        toggle_sidebar(event);
    });

    $(document).on('mouseover', '#hamburger-button', () => {
        document.body.style.cursor = 'pointer';
    });

    $(document).on('mouseout', '#hamburger-button', () => {
        document.body.style.cursor = '';
    });
});

function toggle_sidebar(event) {
    let sidebar = document.getElementById('sidebar');
    let on = sidebar.style.visibility === "visible"

    if (on) {
        sidebar.style.visibility = "hidden";
    } else if (document.getElementById("hamburger-button").contains(event.target)
        || document.getElementById("sidebar").contains(event.target)) {
        sidebar.style.visibility = "visible";
    }
}

function replace_link() {
    let link = document.getElementById("Specific-Link")
    if (link) {
        document.getElementById("Generic-Link").replaceWith(link);
        link.style.display = "inline-block";
        document.getElementById("nav-links").style.display = "contents";
    }
}


