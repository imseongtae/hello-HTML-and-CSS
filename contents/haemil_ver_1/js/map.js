(function(){

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(37.48089,126.8819856), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    var imageSrc = 'https://raw.githubusercontent.com/mchaemil/ham_study/master/img/%EB%A7%88%EC%BB%A41.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(63, 69), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(15, 30)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.48089,126.8819856); // 마커가 표시될 위치입니다
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition, 
        image: markerImage // 마커이미지 설정 
    });
    
    
    
    
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);  
    
    // !
    
    // 커스텀 오버레이에 표시할 내용입니다     
    // HTML 문자열 또는 Dom Element 입니다 
    var content = '<div class ="label"><span class="left"></span><span class="center">My Location!</span><span class="right"></span></div>';
    
    // 커스텀 오버레이가 표시될 위치입니다 
    var position = new kakao.maps.LatLng(37.48090,126.8821000);  
    
    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content   
    });
    
    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map);

})();
