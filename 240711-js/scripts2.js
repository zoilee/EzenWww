//let num = 40;

// while(num>40){//false
//     console.log("while문은 실행 되나요?");
//     num--;
// }

// do{
//     document.write("while문은 실행 되나요?");
//     num--;
// }while(num>40);
// alert("이 내용은 줄바꿈해서 넣으려고 해요.\r\n 이렇게 하면 될까요?");
// for(let i = 1; i <= 10; i++){
//     document.write(i , "<br>");
// }


/**
 * 1부터 100까지 중 5의 배수는 빨강,
 * 7의 배수는 초록
 * 5의 배수이면서 7의 배수는 핑크
 */
/*
let i = 1;
while(i <= 100 ){
    if(i % 5 == 0 && i % 7 == 0){
        document.write("<p class='pink'>" + i + "</p>");
    }else if(i % 5 == 0){
        document.write("<p class='red'>" + i + "</p>");
    }else if(i % 7 == 0){
        document.write("<p class='green'>" + i + "</p>");
    }
    i++;
}
*/


/*
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
        document.write("<p class='pink'>" + i + "</p>");
    } else if (i % 5 == 0) {
        document.write("<p class='red'>" + i + "</p>");
    } else if (i % 7 == 0) {
        document.write("<p class='green'>" + i + "</p>");
    }
}
*/

/**
 * while for 문을 강제종료 break
 */

// 1부터 10까지 루프를 돌리다 6이나오면 루프를 빠져나오세요..!

// for (let i = 1; i <=10; i++){
//     if (i==6) break;
//     document.write(i);
// }

/**
 * continue --- 다음에 오는 코드는 무시하고 계속 해
 */
// for(let i = 1; i <= 10; i++){
//     if(i%2==0) continue;
//     document.write(i);
// }

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <=3; j++){
//         document.write("i"+i, "j"+j)
//     }
// }


for(let i = 1; i <= 9; i++){
    document.write("<div><h1>"+i+"단"+"<h1>");
    for(let j = 1; j <=9;j++){
        let o = i * j;
        document.write(i + "*" + j + "=" + o + "<br>")
    }
    document.write("</div>");
}