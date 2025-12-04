import logo from '../assets/logo.png';

const Footer = () => {

  return (
    <footer className="bg-neutral-800 text-white py-[30px]">
      <div className="container ml-[150px] flex items-center">
        <img src={logo} alt="Taekwon Logo" className="h-10 w-auto mr-6" />
        <div>
          <p className="text-sm">
            {/* &copy; {new Date().getFullYear()} Taekwon. All rights reserved. */}
            (22636) 인천광역시 서구 검단로 448 검단E편한세상 상가 3층
          </p>
          <p className="text-xs mt-2">
            TEL : 010-3776-2260 사업자등록번호 : 123-45-67890  단체명 : 한국체대석사태권도  대표자 : 김찬호
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;