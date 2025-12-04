import { useEffect } from "react";

const Home = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4 mt-20">
        <div className="flex flex-col items-end">
          <h2 className="text-3xl font-bold mb-4 text-white">태권도의 대중화</h2>
          <p className="text-lg text-white text-right">
            일상과 태권도를 엮어 보다 쉽고 재밌고 친근하게<br/>
            태권도를 전달하는 역할을 합니다.
          </p>
          <button className="bg-[#A33D4F] text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-[#8F3546] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A33D4F] focus:ring-opacity-50">
            보러가기
          </button>
        </div>

        <div className="mt-[100px]">
          <h2 className="text-3xl font-bold mb-4 text-white">태권도 교육의 전문화</h2>
          <p className="text-lg text-white">
            태권도를 더 쉽고 정확한 방법으로 안전하게 수련할 수 있도록 합니다.<br/>
            태권도를 수련하는 수련생들에게 운동 그 이상의 가치를 알려줄수있게<br/>
            보다 재밌고 효과적인 커리큘럼으로 나누고 있습니다.
          </p>
          <button className="bg-[#A33D4F] text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-[#8F3546] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A33D4F] focus:ring-opacity-50">
            보러가기
          </button>
        </div>

        <div className="flex flex-col items-end mt-[100px]">
          <h2 className="text-3xl font-bold mb-4 text-white">태권도 공연의 예술화</h2>
          <p className="text-lg text-white text-right">
            태권도 본질을 지키되 무한한 이상을 벗어나<br/>
            새로운 형태의 예술을 모색합니다.
          </p>
          <button className="bg-[#A33D4F] text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-[#8F3546] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A33D4F] focus:ring-opacity-50">
            보러가기
          </button>
        </div>

        <div className="flex flex-row justify-center mt-[100px]">
          <div>
            <h1 className="text-[50px] text-white mr-[300px] mb-0 font-publicsans">태권도</h1>
            <h2 className="text-[30px] text-white font-saira">Teo Kwon Do</h2>
          </div>
          <div>
            <p className="text-lg text-white mb-4">
              고려 시대의 택견, 수박으로 불리던 태권도가 식민지 해방이후, 1916년 대한<br/>
              민국에서 적을 제압하기 위한 무술로서 자리잡게 되었습니다. 
            </p>
            <p className="text-lg text-white mb-4">
              인간이 맨몸으로 수련할 수 있게 창안된 무술로서의 태권도는 강했습니다. 무<br/>
              술의 본질이던 태권도는 ‘품’과 ‘세’로 형이 만들어져 , 스스로 수련할 수 있게<br/>
              되었고 스포츠 화가 이뤄지며 ‘겨루기’라는 이름으로 전성기를 맞이했습니다.
            </p>
            <p className="text-lg text-white mb-4">
              태권도가 흐르고 흘러 겨루기, 품새(세), 자유품새, 시범(격파, 위력격파, 기술<br/>
              격파), 태권무(태권체조, Kpop과의 결합) 등의 다양한 형태의 태권도가 생겨<br/>
              나기 시작했습니다.
            </p>
            <p className="text-lg text-white mb-4">
              단 하나의 무엇이 태권도의 대표적인 종목이라고 할 수 없듯<br/>
              이 모든 것이 바로 태권도입니다.
            </p>
            <p className="text-lg text-white mb-4">
              흐르고, 갈라지고, 모이기를 반복하지만 결국 태권도는 태권도입니다.<br/>
              한국의 국기인 태권도를, 전세계의 2억 인구가 넘게 수련하는 태권도를,<br/>
              그저 옳바른 의(義)를 담아 널리 알리고 싶은 마음입니다.
            </p>
            <p className="text-lg text-white mb-4">
              ‘태권도’라는 이름 아래 모인 우리는<br/>
              전세계 모든 이가 태권도로 하나가 되는 그날을 꿈꿉니다.
            </p>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-white text-center mt-[100px]">
            태권도로 소통하고, 나누며<br/>
            모두가 태권도로 연결되는 세상을 꿈꿉니다.
          </h1>

          {Array.from({ length: 4 }).map((_, index) => (
          <br key={index} /> // 반복되는 요소에는 고유한 'key' prop이 필요합니다.
          ))}
      </main>
    </div>
  );
}

export default Home;