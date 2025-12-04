import { useEffect } from "react";
import { Outlet} from 'react-router-dom';

const Shop = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4 mt-20">
        <h1 className="text-3xl font-bold mb-4 text-white">shop one page.</h1>
        <div className="text-lg text-white">
          {/* 여기가 중요! 자식 라우트의 컴포넌트가 렌더링될 위치 */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Shop;