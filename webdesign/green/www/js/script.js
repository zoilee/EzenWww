$(function(){
    $("nav").hover(function(){
        $(".sub-nav").stop().fadeToggle();
    });

    setInterval(slideShow,3000);

    $(".popup").click(function(e){
        e.preventDefault(); //요소의 기능을 없앰
        $(".notice-popup").fadeIn(500);
    });
    
    $(".close").click(function(){
        $(".notice-popup").fadeOut();
    });

    $(".family-select").change(function(){
        const values = $(this).val();
        if(values == "#"){
            alert("사이트 이름을 선택 하세요.");
        }else{
            window.open("about:blank").location.href=values;
        }
    });

}); //jquery    
function slideShow(){
    $(".heroin").animate({
        "left":"-1200px"
    },500, function(){
        $(".heroin img:eq(0)").clone().appendTo(".heroin");
        $(".heroin img:eq(0)").remove();
        $(".heroin").css("left",0);
    })
};