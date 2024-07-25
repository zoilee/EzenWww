
function slideShow(){
  
   const heroIn = document.querySelector(".hero-incut");
   const bannerBox = document.querySelectorAll(".banner");
   const bCount = bannerBox.length;
   let fBannerBox = bannerBox[0];
   let lBannerBox = bannerBox[bCount - 1];
   heroIn.classList.add("ani");  //ani 클래스를 추가한다 (-1330픽셀 이동)
   setTimeout(function(){
      //1. ani 클래스를 지운다
      heroIn.classList.remove("ani");
      //2. 첫번째 배너를 지우고 복제해서 마지막에 추가 한다.
      fBannerBox.remove();
      lBannerBox.insertAdjacentElement("afterend", fBannerBox);
      //3. left 포지션을 0으로 셋팅한다.
      heroIn.style.left = "0";

   }, 400);
   setTimeout(slideShow,5000);   
}


const mdate = document.querySelector(".mdate");

const nowDate =new Date(); 
mdate.innerText = (nowDate.toLocaleString());  //처음 시간불러오기




function updatetime(){                        //시간 계속 업데이트하기
   const nowDate =new Date(); 
   mdate.innerText = (nowDate.toLocaleString());
}


setInterval(updatetime, 1000);   //1초마다


slideShow();