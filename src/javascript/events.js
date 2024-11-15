$(document).ready(function(){

    if ($('#nav-placeholder').length > 0) {  //Only for dev reasons, when it is pushed to the server it replaces the placeholder with the navbar
        $('#nav-placeholder').load("/assets/nav.html", function() {
            replace_link();
        });
    } else {
        replace_link();
    }

    $(document).click(function(event) {
        toggle_sidebar(event);
    });

    $(document).on('mouseover', '#hamburger-button', () => {
        document.body.style.cursor = 'pointer';
    });

    $(document).on('mouseout', '#hamburger-button', () => {
        document.body.style.cursor = '';
    });

    $(document).on('input', '#c-email', () => {
        validate_emails();
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
        link.style.display = "inline-block";
        document.getElementById("Generic-Link").replaceWith(link);
    }
    document.getElementById("nav-links").style.display = "inline-block";
}

function validate_emails() {
    if (document.getElementById("email").value.trim() === document.getElementById("c-email").value.trim()) {
        document.getElementById("email-error").style.display = "none";
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("email-error").style.display = "contents";
        document.getElementById("submit").disabled = true;
    }
}


