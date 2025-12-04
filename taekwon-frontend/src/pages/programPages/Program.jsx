import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import programe7 from "../../assets/7year/7_programe.jpg";
import programe7_1 from "../../assets/7year/7_programe1.jpg";
import programe7_2 from "../../assets/7year/7_programe2.jpg";
import programe7_3 from "../../assets/7year/7_programe3.jpg";
import programe7_4 from "../../assets/7year/7_programe4.jpg";

const images = [programe7_1, programe7_2, programe7_3, programe7_4, programe7];

const Program = () => {
  const location = useLocation();
  const showImages = location.pathname === '/program';

  return (
    <div>
      {showImages && (
        <div className="w-full overflow-x-auto py-4">
          <div className="flex flex-nowrap gap-4 min-w-max">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`프로그램 이미지 ${idx + 1}`}
                className="flex-shrink-0 object-cover" // h-60 제거
                style={{ width: '550px', height: 'auto', minWidth: 'auto' }} // 변경된 스타일
              />
            ))}
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Program;