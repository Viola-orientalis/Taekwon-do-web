import { useEffect, useRef } from "react";

const DirectionsMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // 이미 스크립트가 있으면 추가로 삽입하지 않음
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=d2292d28f22d159255f91d791b706da2&autoload=false";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            createMap();
          });
        }
      };
      return () => {
        document.head.removeChild(script);
      };
    } else {
      window.kakao.maps.load(() => {
        createMap();
      });
    }

    function createMap() {
      const container = mapRef.current;
      if (!container) return;
      container.style.width = "100%"; // width 명확히 지정
      container.style.minWidth = "400px";
      container.style.maxWidth = "964px";
      container.style.height = "585px";
      const options = {
        center: new window.kakao.maps.LatLng(37.613857, 126.667222),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(37.613857, 126.667222),
        map,
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4 mt-20">
        <p className="text-2xl font-bold mb-6 text-white">찾아오시는 길</p>
        <div
          id="map"
          ref={mapRef}
          style={{
            width: "100%",
            minWidth: "400px",
            maxWidth: "964px",
            height: "585px",
            border: "7px solid #fff",
            position: "relative",
            overflow: "hidden",
            background: "url('https://t1.daumcdn.net/mapjsapi/images/bg_tile.png')",
            margin: "0 auto",
          }}
        ></div>
      </main>
    </div>
  );
};

export default DirectionsMap;