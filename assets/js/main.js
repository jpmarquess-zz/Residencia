$('.carousel').carousel({
    interval: 2000
});

var $document = $(document);
$document.scroll(function () {
    $("nav").toggleClass("navbar-scroll", $document.scrollTop() >= 100);
});