https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

$(function(){
    getLocation();



    //카카오 맵
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({ 
        // 지도 중심좌표에 마커를 생성합니다 
        position: map.getCenter() 
    }); 
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
        
    // 클릭한 위도, 경도 정보를 가져옵니다 
    var latlng = mouseEvent.latLng; 
    
    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);
    
    var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    message += '경도는 ' + latlng.getLng() + ' 입니다';
    
    var resultDiv = document.getElementById('clickLatlng'); 
    resultDiv.innerHTML = message;
    let klat = latlng.getLat();
    let klng = latlng.getLng();
    getWeather(klat,klng);
    console.log(latlng.getLat(),latlng.getLng())
    });


});
// /function getWeather(lat,lon)
function getWeather(klat,klng){
    const url = "https://api.openweathermap.org/data/2.5/weather";
    // const url2 = "https://api.openweathermap.org/data/2.5/weather?lat=37.6438784&lon=126.6614272&units=metric&lang=kr&appid=8000c283e0e7a874a8aa82759c1ab72f"
    const apiKey = "8000c283e0e7a874a8aa82759c1ab72f";
    $.ajax({
        url: url,
        dataType: 'JSON',
        type: 'GET',
        data: {
            lat: klat,
            lon: klng,
            appid: apiKey,
            units: 'metric',
            lang: 'kr'
        },
        success:function(data){
            console.log(data);
            const img ="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
            $("#demo").html(data.name +","+data.main.temp + "<img src="+img+">");
        },
        error: function(xhr,status,error){
            console.log(error);
        }
    })
}



const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);

  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const lat =  position.coords.latitude;
  const lon = position.coords.longitude;
//   getWeather(lat,lon);
  
}

function showError(error){
    console.log(error);
}