import { useEffect } from "react";
import time from "../../assets/time.jpg";

const ClassSchedule = () => {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <img src={time} alt="수업 시간표" className="w-[1000px] h-auto object-cover mb-4" />
    </div>
  );
}

export default ClassSchedule;