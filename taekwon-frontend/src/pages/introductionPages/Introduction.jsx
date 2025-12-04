import React from 'react';
import { Outlet} from 'react-router-dom';

const Introduction = () => {
  return (
    <div>
      {/* 여기가 중요! 자식 라우트의 컴포넌트가 렌더링될 위치 */}
      <Outlet />
    </div>
  );
};

export default Introduction;