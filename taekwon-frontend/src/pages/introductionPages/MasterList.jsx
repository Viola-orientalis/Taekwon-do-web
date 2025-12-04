import { useEffect } from "react";

const MasterList = () => {

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow container mx-auto p-4 mt-20">
        <div className="flex flex-col items-end">
          <h2 className="text-3xl font-bold mb-4 text-white">관장 | 김00</h2>
          <p className="text-lg text-white text-right">
            -現 00대학교 겨루기 선수<br/>
            -現 00태권도장 8년 사범<br/>
            -현 12년째 00태권도장 관장
          </p>
          <p className="text-lg text-white text-right">
            아이들에게 양질의 수업과 행복한 시간이 될수있도록<br />
            최선을다해 지도하도록하겠습니다.
          </p>
        </div>

        <div className="mt-[100px] flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4 text-white">부관장 | 임00</h2>
          <p className="text-lg text-white text-left mb-[30px]">
            -現 00대학교 시범단 선수<br/>
            -現 00태권도장 5년 사범<br/>
            -現 00태권도장 3년 관장<br/>
            -현 00태권도장 부관장
          </p>
          <br />
          <p className="text-lg text-white text-left mb-[50px]">
            아이들에게 양질의 수업과 행복한 시간이 될수있도록<br />
            최선을다해 지도하도록하겠습니다.
          </p>
        </div>

        <div className="flex flex-col items-end">
          <h2 className="text-3xl font-bold mb-4 text-white">사범 | 김00</h2>
          <p className="text-lg text-white text-right mb-[30px]">
            -現 00시범단 3년 단원<br/>
            -現 000협회 시범단 코치<br/>
            -현 5년째 00태권도장 사범
          </p>
          <p className="text-lg text-white text-right mb-[50px]">
            운동을 효율적으로 부상없이 할수있도록<br />
            최선을다해 지도하겠습니다.
          </p>
        </div>

        <div className="mt-[100px] flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4 text-white">사범 | 박00</h2>
          <p className="text-lg text-white text-left mb-[30px]">
            -現 00고등학교 겨루기 선수<br/>
            -현 00태권도장 사범
          </p>
          <p className="text-lg text-white text-left mb-[50px]">
            수업에 온 아이들이 1시간만큼은 유익하고 유쾌한<br />
            시간을 보내기를 바라며 열정과 사랑으로 지도하겠습니다.
          </p>
        </div>
      </main>

    </div>
  );
}

export default MasterList;