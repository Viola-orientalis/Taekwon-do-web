import { useEffect } from "react";
import logo from '../../assets/logo.png';

const Rreeting = () => {

  return (
    <div className="flex flex-col min-h-screen container p-4">
      <div className="flex items-center justify-center mt-[20px] mb-[20px]">
        <h1 className="text-[25px] font-bold mr-[100px] mb-0 leading-tight" style={{ color: 'rgba(150,150,150,1)' }}>최고의 태권도 지도진들로 모인<br/>인천서구 "N0.1" 태권도장</h1>
        <img src={logo} alt="Taekwon Logo" className="h-[130px] w-auto mb-0 align-middle ml-[100px] filter grayscale" style={{ filter: 'grayscale(1) brightness(0.6)', opacity: 1 }} />
      </div>
      <div style={{
        background: 'linear-gradient(to bottom, rgba(118,117,117,1), rgba(67,66,66,1), rgba(41,41,41,1), rgba(29,28,28,1), rgba(22,22,22,1), rgba(16,16,16,1))',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
        padding: '2rem'
      }}>
        <div className="flex items-center justify-center mt-[50px] mb-[50px]">
          <p className="text-white font-songmyung mr-[50px] text-[20px]">
            MISSION
          </p>
          <span className="block w-[150px] h-px bg-white my-2"></span>
          <p className="text-white font-songmyung text-[28px] ml-[70px]">
            시작을 하기위해 필요한것. 용기이다<br/>
            네가 하고 싶은 일이 있다면 체력부터 길러라
          </p>
        </div>
        <div className="flex items-center justify-center mt-[50px] mb-[50px]">
          <p className="font-extrabold text-[30px] mb-[50px]">
            <span style={{color:'rgba(93,93,93,1)'}}>태권도는 단순 무술 스포츠를 넘어서</span><br/>
            <span style={{color:'rgba(129,129,129,1)'}}>문화 예술로서 한류 열풍의 중심에 자리 잡고 있습니다.</span><br/>
            <span style={{color:'rgba(172,172,172,1)'}}>전세계 2억 이상의 수련생이 있는 태권도,</span><br/>
            <span style={{color:'rgba(199,199,199,1)'}}>대한민국 국민이라면 누구나 알고있는 태권도,</span><br/>
            <span style={{color:'rgba(255,255,255,1)'}}>이런 태권도를 여러분들께 선물합니다.</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[50px] mb-[50px]">
        <p className="text-white font-saira text-[130px] text-center" style={{ color: 'rgba(68,68,68,1)' }}>
          Korea Seoksa
        </p>
        <div className="text-white flex flex-row items-center justify-center text-center gap-4 mb-[70px] font-bold text-[40px]">
          <p className="ml-[220px]">
            기존 틀을 깨는
          </p>
          <span className="block w-[500px] h-px bg-white my-2 ml-[30px]"></span>
        </div>
        <div className="text-white flex flex-row items-center justify-center text-center gap-4 font-bold text-[40px]">
          <span className="block w-[300px] h-px bg-white my-2"></span>
          <p className="ml-[30px] mr-[250px]">
            신개념 태권도 퍼포먼스!
          </p>
        </div>
        <p className="text-white font-saira text-[130px] text-center" style={{ color: 'rgba(68,68,68,1)' }}>
          Taekwondo
        </p>
      </div>
      <div className="flex flex-row justify-center items-start gap-16 mt-8 mb-8">
        <div className="text-white text-center w-[610px]">
          <p className="text-[30px] font-bold mb-[20px]">
            초등학생 없는 | 유치부 전용 수업
          </p>
          <p className="text-[20px] mb-[50px]">
            5~7세 만으로 구성된 전용 수업!<br/>
            초등학생과 분리된 수업으로 수업의 질 향상과<br/>
            집중적인 교육 및 관리가 이루어집니다.
          </p>
        </div>
        <div className="text-white text-center w-[610px]">
          <p className="text-[30px] font-bold mb-[20px]">
            전문인성 교육 프로그램
          </p>
          <p className="text-[20px] mb-[50px]">
            매주 아이들의 올바른 인성과 마음을 키워주는 수업 진행<br/>
            지도진들 또한 꾸준한 교육을 통해 모든 수업에 아이들이<br/>
            바르게 행동할 수 있도록 지도하고 있습니다.<br/>
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-start gap-16 mt-8 mb-8">
        <div className="text-white text-center w-[610px]">
          <p className="text-[30px] font-bold mb-[20px]">
            유아체육 전문 프로그램 운영
          </p>
          <p className="text-[20px] mb-[50px]">
            주 1회 색다른 수업으로 호기심과 올바른 성장!<br/>
            전문 강사의 수업으로 아이들의 성장에 맞게 프로그램 운영함으로서<br/>
            호기심과 자신감을 키워줍니다.
          </p>
        </div>
        <div className="text-white text-center w-[610px]">
          <p className="text-[30px] font-bold mb-[20px]">
            태권도 전문 시범단 운영 | 태권십 영웅단
          </p>
          <p className="text-[20px] mb-[50px]">
            세계 최대규모 어린이 태권도 시범단!<br/>
            전국 5000명의 최대규모 태권도 시범단으로써 국가적인 행사 및<br/>
            해외 시범 경험으로 자신감과 자긍심을 키워갑니다.<br/>
          </p>
        </div>
      </div>
      <div >
        <p className="text-white font-saira text-[130px] text-center mt-[50px] mb-[50px]" style={{ color: 'rgba(68,68,68,1)' }}>
            Korea Seoksa
            Taekwondo
        </p>
      </div>
    </div>
  );
}

export default Rreeting;