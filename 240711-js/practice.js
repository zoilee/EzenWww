

// let o = 1; //셸에 들어갈 숫자

// for(i = 1; i <=5; i++){
//     if(i == 1){document.write("<table>")} //table 생성
//     document.write("<tr>");             // 열생성
//     for(j = 1; j <= 5; j++){      
//     document.write("<td>"+o+"</td>"); // 행 생성 및 셸에 숫자 대입
//     o++;}                             // 숫자 증감
       

//      document.write("</tr>");           //열 마감
    
//      if(i == 5){document.write("</table>")}; //table 마감
    
   

// }


let o = 1; //셸에 들어갈 숫자
document.write("<table>") //table 생성
for(i = 1; i <=5; i++){
     
    document.write("<tr>");             // 열생성
    for(j = 1; j <= 5; j++){      
    document.write("<td>"+o+"</td>"); // 행 생성 및 셸에 숫자 대입
    o++;}                             // 숫자 증감
       

     document.write("</tr>");           //열 마감
    
};

document.write("</table>");  //table 마감