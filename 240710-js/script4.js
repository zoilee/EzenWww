const id = "admin";
const pass = "1234";


let userid = prompt("아이디를 입력하세요.");
let userpass = prompt("비밀번호를 입력하세요.");

if(userid == id){

    if (userpass == pass){
        alert (userid + "님 환영합니다.");
        location.href="http://naver.com";}
    else{
        alert("패스워드가 일치하지 않습니다.");
        location.reload();
    }
}else {
    alert("아이디가 일치하지 않습니다.");
    location.reload();
}