import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Login from "../../pages/Login/Login.jsx";
import "../Navbar/index.css";

// 메뉴 버튼에 대한 컴포넌트
const NavbarBtn = ({ to, children, openInNewTab }) => (
  <Link to={to} target={openInNewTab ? "_blank" : "_self"}>
    <div className="navbar__menu__btn">{children}</div>
  </Link>
);

// Navbar 컴포넌트 정의
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // 로그인 모달 함수
  const loginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 드롭다운 메뉴 항목
  const dropdownContents = [
    { text: "기업 교육", link: "/" },
    { text: "외주 개발", link: "/" },
    { text: "신입 개발자 채용", link: "/" },
  ];

  return (
    <div className="navbar__section">
      <div className="navbar__services">
        <Link to="/">
          <div className="navbar__services__hire__btn">개발자 채용 공고</div>
        </Link>
        <div className="navbar__services__btn__group">
          <Link to="/">
            <div className="navbar__services__center__btn">고객센터</div>
          </Link>
          <div className="navbar__services_corp">
            <button
              onClick={toggleDropdown}
              className={`navbar__services__corp__btn ${
                isOpen ? "up" : "down"
              }`}
            >
              기업 서비스&nbsp;{isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {isOpen && (
              <div className="navbar__toggle-dropdown">
                {dropdownContents.map(({ text, link }, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={link}
                      className="navbar__toggle-dropdown__contents"
                    >
                      {text}
                    </a>
                    {/* 드롭다운 메뉴 항목들 사이에 선 추가, 마지막 항목에는 선을 추가하지 않음 */}
                    {index < dropdownContents.length - 1 && (
                      <div className="navbar__toggle-dropdown__line"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar__section__line"></div>
      <div className="navbar__menu">
        <div className="navbar__menu__items">
          <Link to="/">
            <img
              className="navbar__menu__logo"
              src="imgs/navbar-logo.png"
              alt="logo"
            />
          </Link>
          <NavbarBtn to="/catalog">전체 강의</NavbarBtn>
          <NavbarBtn
            to="https://nbcamp.spartacodingclub.kr/"
            openInNewTab="https://nbcamp.spartacodingclub.kr/"
          >
            부트캠프 <div className="navbar__menu__btn__txt">국비</div>
          </NavbarBtn>
          <NavbarBtn to="https://spartacodingclub.kr/community/freeboard/all?text=&sort=latest&week=&pageChunkSize=10&curPage=1">
            커뮤니티
          </NavbarBtn>
          <NavbarBtn to="https://spartacodingclub.kr/blog">블로그</NavbarBtn>
          <NavbarBtn to="https://spartacodingclub.kr/event">이벤트</NavbarBtn>
        </div>
        <button onClick={loginModal} className="navbar__menu__login__btn">
          로그인
        </button>
        {isLoginModalOpen && (
          <Login onClose={() => setIsLoginModalOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
