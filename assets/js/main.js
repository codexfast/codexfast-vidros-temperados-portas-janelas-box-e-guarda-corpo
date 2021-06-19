$(window).scroll(() => {
    $("nav").toggleClass('scrolled', $(this).scrollTop() > 0);
})

$(document).ready(() => {
    $("nav").toggleClass('scrolled', $(this).scrollTop() > 0);

})
