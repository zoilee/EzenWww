let site = prompt("네이버, 다음, 구글, 네이트 중에서 가장 즐겨 사용하는 포털의 이름은?");
let url;

if(site == "네이버"){
    url = "naver.com";
}else if(site == "다음"){
    url = "daum.net";
}else if(site == "구글"){
    url = "google.com";
}else if(site == "네이트"){
    url = "nate.com";
}else{
    alert("보기에는 없습니다.");
        location.reload()
}




/*switch(site) {
    case "네이버":
        url = "naver.com";
    break;
    case "다음":
        url = "daum.net";
    break;
    case "구글":
        url = "google.com";
    break;
    case "네이트":
        url = "nate.com";
    break;
    default:
        alert("보기에는 없습니다.");
        location.reload()
}*/

if(url){
    location.href="https://"+url;
}