/*if(confirm("한대 맞으실래요?")){
    document.write("빡!!!!");
}else{
    document.write("쓰담쓰담");
}*/

/**
 * 12,1,2 = 스키타는 계절 겨울이네요.
 * 3,4,5 = 햇살 가득한 봄이네요.
 * 6,7,8 = 바닷가가 그리운 여름이네요.
 * 9,10,11 = 독서의 계절 가을이에요.
 */


const mon = prompt("지금은 몇 월인가요?");
let rs;
if( mon >= 3 && mon <= 5   ){
    rs ="햇살 가득한 봄이네요.";
}else if( mon >= 6 && mon <= 8 ){
    rs ="바닷가가 그리운 여름이네요.";
}else if( mon >= 9 && mon <= 11 ){
    rs ="독서의 계절 가을이에요."
}else{
    rs ="스키타는 계절 겨울이네요."
}
if(rs){
    document.write(rs)
}