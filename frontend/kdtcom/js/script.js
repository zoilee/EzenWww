$(function(){
    $(window).on('load', function(){
        $('.photos-gallery').pycsLayout({
            pictureContainer:".picture",
            gutter:5,
            idealHeight: 140
        });
    })

});