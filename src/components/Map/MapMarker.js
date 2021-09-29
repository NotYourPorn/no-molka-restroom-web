/** @format */

import React from "react";

function displayMarker(place) {
  // 마커를 생성하고 지도에 표시
  let marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(place.y, place.x),
  });

  // 마커에 클릭이벤트를 등록
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커를 클릭하면 장소명이 인포윈도우에 표출
    infowindow.setContent(
      '<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>"
    );
    infowindow.open(map, marker);
  });
}
