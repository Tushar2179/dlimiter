/* * * * * * * * * * * * * * * * * 
 *                               *
 * Copyright Krushn Dayshmookh.  *
 *                               *
 * * * * * * * * * * * * * * * * */





$(document).ready(function () {
    $(".button-collapse").sideNav();
    $("ul.tabs").tabs();


    /* ====================== Random Wave Color Prototype ========================== */
    var wavy, color;
    $("#placeholder-for-map").click(function () {
        $("#main-map").removeClass(wavy); //remove the previous class assignment to avoid conflict
        var value = Math.random(); // Generates a random no
        if (value < 0.5) {
            color = "red"; // Assign color depending upon te random no
        } else {
            color = "green";
        }
        wavy = "waves-" + color; //variable to create string in form of materialize class syntax
        $("#main-map").addClass(wavy); // add the new class
    });
    /* ====================== *************************** ========================== */



});
