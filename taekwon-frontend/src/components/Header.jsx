import logo from '../assets/logo.png';
import Navie from "./Navie";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [modal, setModal] = useState(null);

    // *** 중요: 개발자 도구 이미지에서 확인된 Header의 실제 높이인 118px로 업데이트합니다. ***
    const headerHeight = 118; // 이미지에서 확인된 실제 헤더 높이

    // Navie가 헤더 바로 아래에 깔끔하게 시작하도록 1px 정도 더 내려서 안전 마진을 줍니다.
    const navieTopPosition = headerHeight + 1; // 렌더링 오차 방지를 위한 추가 마진

    const menuContentMaxWidthClass = "max-w-5xl";
    const headerContentPaddingClass = "px-16 xl:px-24";

    return (
        <>
            <header
                className="fixed top-0 left-0 w-full bg-neutral-800 text-white py-4 shadow-md z-20"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className={`w-full mx-auto flex items-center justify-between flex-nowrap ${headerContentPaddingClass}`}>
                    <div className="flex-shrink-0">
                        <Link to="/" className="block hover:opacity-80 transition duration-300 ease-in-out">
                            <img
                                src={logo}
                                alt="사이트 로고"
                                className="h-10 w-auto"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x40/A33D4F/FFFFFF?text=Logo+Error"; e.target.alt="로고 이미지 로드 실패"; }}
                            />
                        </Link>
                    </div>

                    <nav className="flex-grow flex-shrink-0 flex justify-center">
                        <ul className={`grid grid-cols-5 gap-x-8 w-full ${menuContentMaxWidthClass} mx-auto`}>
                            <li className="w-full text-center">
                                <Link to="/introduction" className="block text-lg hover:underline transition duration-300 ease-in-out py-1 rounded-md">Introduction</Link>
                            </li>
                            <li className="w-full text-center">
                                <Link to="/program" className="block text-lg hover:underline transition duration-300 ease-in-out py-1 rounded-md">Program</Link>
                            </li>
                            <li className="w-full text-center">
                                <Link to="/photo" className="block text-lg hover:underline text-center py-1 rounded-md">Photo</Link>
                            </li>
                            <li className="w-full text-center">
                                <Link to="/shop" className="block text-lg hover:underline transition duration-300 ease-in-out py-1 rounded-md">Shop</Link>
                            </li>
                            <li className="w-full text-center">
                                <Link to="/service" className="block text-lg hover:underline transition duration-300 ease-in-out py-1 rounded-md">Service</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex-shrink-0">
                        <button
                            className="bg-[#A33D4F] text-white font-semibold py-2 px-6 rounded-md shadow-md
                                       hover:bg-[#8F3546] transition duration-300 transform hover:scale-105
                                       focus:outline-none focus:ring-2 focus:ring-[#A33D4F] focus:ring-opacity-50"
                            onClick={() => setModal('signup')}
                        >
                            가입하기
                        </button>
                    </div>
                </div>
            </header>

            {isHovering && (
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`fixed top-[${navieTopPosition}px] w-full z-10 bg-neutral-800 bg-opacity-95 shadow-md transition-all duration-200`}
                >
                    <Navie
                        menuContentMaxWidthClass={menuContentMaxWidthClass}
                        headerContentPaddingClass={headerContentPaddingClass}
                    />
                </div>
            )}
        </>
    );
}

export default Header;