// Document . ready
$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });


    //Animate scroll - activate

    AOS.init({
        duration: 1000   // values from 0 to 3000
    });

});