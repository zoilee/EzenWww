/// menu 작업
const menus = document.querySelectorAll(".menu")
const allsub = document.querySelectorAll('.sub')
menus.forEach(function(menu){
    menu.addEventListener("click",function(e){
        e.preventDefault();
        menus.forEach(function(item) {
            item.classList.remove("active");
            
        });
        menu.classList.add("active")
        allsub.forEach(function(sub){
            sub.style.display = "none";
        })
        const ul = menu.parentElement;
        const thissub = ul.querySelectorAll(".sub");

        thissub.forEach(function(sub1){
            sub1.style.display = "block";
        })
    })

})
//// 슬라이드작업
const imgs = document.querySelectorAll(".slide img")
let i = 0;
function fadeInOut(){
    imgs:eq(0).css
}