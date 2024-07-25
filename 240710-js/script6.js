/* let i = 1;

while(i <= 10) {
    document.write("숫자" + i + "는 11보다 작습니다." + "<br>");
    i++;
}
document.write("|||||| 끝 |||||"); */


let o = 0;
let i = 1;
while( i <= 10) {
    o += i;
    i++;
}
document.write("1부터 10까지 합은" + o + '입니다.');



let i1 = 1;

while( i1 <= 30) {
    if(i1 % 2 == 0 && i1 % 6 == 0){
        document.write("<br>", i1)
    }
    i1++;
}
