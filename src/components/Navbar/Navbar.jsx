import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/index.css";

export default function Navbar() {
  return (
    <div className="navbar__section">
      <div className="navbar__services">
        <div className="navbar__services__hire__btn">개발자 채용 공고</div>
        <div className="navbar__services__btn__group">
          <div className="navbar__services__center__btn">고객센터</div>
          <div className="navbar__services__crp__btn">기업 서비스</div>
        </div>
      </div>
      <div className="navbar__menu">
        <div className="navbar__menu__items">
          <Link to="/">
            <img
              className="navbar__logo"
              src="imgs/sparta-navbar-logo.png"
              alt="logo"
            />
          </Link>
          <Link to="/catalog">
            <div className="navbar__menu__btn">전체 강의</div>
          </Link>
          <Link to="/">
            <div className="navbar__menu__btn">
              부트캠프 <div className="navbar__menu__btn__txt">국비</div>
            </div>
          </Link>
          <Link to="/">
            <div className="navbar__menu__btn">커뮤니티</div>
          </Link>
          <Link to="/">
            <div className="navbar__menu__btn">블로그</div>
          </Link>
          <Link to="/">
            <div className="navbar__menu__btn">이벤트</div>
          </Link>
        </div>
        <button className="navbar__login__btn">로그인</button>
      </div>
    </div>
  );
}
