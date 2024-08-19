
$(function(){
    $(".nav_box>ul>li").mouseover(function(){
        $(".sub_menu",this).stop().slideDown('fast');
    })
    $(".nav_box>ul>li").mouseout(function(){
        $(".sub_menu",this).stop().slideUp('fast');
    })
}); 
