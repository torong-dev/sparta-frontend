import React from "react";
import "../Footer/index.css";

export default function Footer() {
  return (
    <footer className="footer__section">
      <footer className="footer__section__container">
        <div className="footer__section__menu">
          <div className="footer__section__customer">
            <div className="footer__section__title">고객센터</div>
            <div>
              <div>홈페이지 우측 하단 [문의하기]를 통해</div>
              <div>1:1 채팅상담을 이용하실 수 있습니다.</div>
            </div>
          </div>
          <div className="footer__section__service">
            <div className="footer__section__title">서비스</div>
          </div>
          <div className="footer__section__family">
            <div className="footer__section__title">패밀리 사이트</div>
          </div>
          <div className="footer__section__corp">
            <div className="footer__section__title">기업 서비스</div>
          </div>
          <div className="footer__section__company">
            <div className="footer__section__title">회사</div>
          </div>
        </div>
        <div className="footer__contents">
          <ul className="footer__contents__bar">
            <div></div>
            <div></div>
          </ul>
          <div className="footer__contents__info">
            <section className="footer__contents__section">
              <div className="footer__contents__title"></div>
              <div className="footer__contents__etc"></div>
            </section>
            <p className="footer__contents__c"></p>
          </div>
        </div>
      </footer>
    </footer>
  );
}
