import React from 'react';
import { Link } from 'react-router-dom';

const Navie = ({ menuContentMaxWidthClass, headerContentPaddingClass }) => {
    return (
        <div className={`w-full mx-auto ${headerContentPaddingClass}`}>
            {/* Navie의 ul에 상단 패딩을 pt-4 (16px)로 더 확보하여 상위 메뉴 텍스트와 확실히 분리합니다. */}
            {/* 하단 패딩은 필요에 따라 조절하세요. */}
            <ul className={`grid grid-cols-5 gap-x-8 w-full ${menuContentMaxWidthClass} mx-auto pt-20 pb-2`}>
                <li className="w-full">
                    <Link to="/introduction/Rreeting" className="block text-white hover:underline text-center py-2">인사말</Link>
                    <Link to="/introduction/MasterList" className="block text-white hover:underline text-center py-2">지도진 소개</Link>
                    <Link to="/introduction/DirectionsMap" className="block text-white hover:underline text-center py-2">오시는 길</Link>
                </li>
                <li className="w-full">
                    <Link to="/program/WeeklyPlanner" className="block text-white hover:underline text-center py-2">주간수련계획표</Link>
                    <Link to="/program/ClassSchedule" className="block text-white hover:underline text-center py-2">수업시간표</Link>
                </li>
                <li className="w-full">
                    <Link to="/photo/Event" className="block text-white hover:underline text-center py-2">행사</Link>
                    <Link to="/photo/DailyMoments" className="block text-white hover:underline text-center py-2">일상</Link>
                </li>
                <li className="w-full">
                    <Link to="/shop/Dobok" className="block text-white hover:underline text-center py-2">도복</Link>
                    <Link to="/shop/Belt" className="block text-white hover:underline text-center py-2">띠</Link>
                    <Link to="/shop/SeasonalUniform" className="block text-white hover:underline text-center py-2">동하복</Link>
                </li>
                <li className="w-full">
                    <Link to="/service/NoticeBoard" className="block text-white hover:underline text-center py-2">공지사항</Link>
                    <Link to="/service/ReviewSection" className="block text-white hover:underline text-center py-2">후기</Link>
                    <Link to="/service/Contact" className="block text-white hover:underline text-center py-2">문의</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navie;