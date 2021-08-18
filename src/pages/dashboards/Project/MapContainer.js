/*global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
      const options = {
         center: new kakao.maps.LatLng(35.019318, 126.717175),
         level: 10

      };
          // 마커를 생성
        let markerPosition  = options.center
        let marker = new kakao.maps.Marker({
          position: markerPosition
        });

        const map = new kakao.maps.Map(container, options);

        marker.setMap(map);
    }, []);


    return (
        <div id='myMap' style={{
            width: '1380px',
            height: '340px'
        }}></div>
    );
}

export default MapContainer;