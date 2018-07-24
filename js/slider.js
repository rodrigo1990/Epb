$(document).ready(function(){
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    nav:false,
    dots:true,
    items:3,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:1
        }


    }
})
});