$(document).ready(function () {
    $(".card button").click(function (e) {
        $(".window").toggle();
    });

    $(".window").click(function (e) {
        $(this).hide();
    });
});
