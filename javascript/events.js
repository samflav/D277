
$(document).ready(function(){
    $(document).on('mouseover', '#hamburger-button', () => {
        document.body.style.cursor = 'pointer';
    });

    $(document).on('mouseout', '#hamburger-button', () => {
        document.body.style.cursor = '';
    });

    $(document).on('click', '#hamburger-button', () => {
        manage_sidebar();
    })
});

function manage_sidebar() {
    let sidebar = document.getElementById('sidebar');
   if (sidebar.style.visibility === "visible") {
       sidebar.style.visibility = "hidden";
   } else {
       sidebar.style.visibility = "visible";
   }
}

