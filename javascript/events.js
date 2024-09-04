
$(document).ready(function(){
    $(document).on('click', 'object', () => {
        console.log( "You clicked a paragraph!" );
    });
});

function hoverHandler() {
    console.log("hovered");
}