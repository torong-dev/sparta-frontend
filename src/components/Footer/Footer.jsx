import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Footer/index.css";

export default function Footer() {
  return (
    <footer className="footer__section">
      <footer className="footer__section__container">
        <div className="footer__menu">
          <div className="footer__menu__customer">
            <div className="footer__menu__title">고객센터</div>
            <div className="footer__menu__contents__container">
              <div className="footer__menu__contents">
                홈페이지 우측 하단 [문의하기]를 통해
              </div>
              <div className="footer__menu__contents">
                1:1 채팅상담을 이용하실 수 있습니다.
              </div>
              <div className="footer__menu__contents">
                (전화상담을 원하시는 경우,
              </div>
              <div className="footer__menu__contents">
                채팅상담을 통해 신청부탁드립니다.)
              </div>
              <div className="footer__menu__br"></div>
              <div className="footer__menu__contents">채팅 상담 운영시간 :</div>
              <div className="footer__menu__contents">월요일 14:00-17:30</div>
              <div className="footer__menu__contents">
                화~금요일 10:30-17:30
              </div>
              <div className="footer__menu__br"></div>
              <div className="footer__menu__contents">
                (점심시간 12:30-14:00 / 주말,공휴일 휴무)
              </div>
              <div className="footer__menu__br"></div>
              <a
                href="https://support.spartacodingclub.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__customer__icon"
              >
                <RiCustomerService2Line />
                &nbsp; 고객센터 바로가기
              </a>
            </div>
          </div>
          <div className="footer__menu__service">
            <div className="footer__menu__title">서비스</div>
            <div className="footer__menu__common__container">
              <Link to="/catalog">
                <div className="footer__menu__contents">전체 강의</div>
              </Link>
              <a
                href="https://nbcamp.spartacodingclub.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                국비지원 부트캠프
              </a>
              <a
                href="https://spartacodingclub.kr/nb"
                className="footer__menu__contents"
              >
                국비지원 강의
              </a>
              <a
                href="https://spartacodingclub.kr/community/freeboard/all?text=&sort=latest&week=&pageChunkSize=10&curPage=1"
                className="footer__menu__contents"
              >
                커뮤니티
              </a>
              <a
                href="https://spartacodingclub.kr/blog"
                className="footer__menu__contents"
              >
                블로그
              </a>
              <a
                href="https://spartacodingclub.kr/event"
                className="footer__menu__contents"
              >
                이벤트
              </a>
            </div>
          </div>
          <div className="footer__menu__family">
            <div className="footer__menu__title">패밀리 사이트</div>
            <div className="footer__menu__common__container">
              <a
                href="https://hanghae99.spartacodingclub.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                항해99
              </a>
              <a
                href="https://spartacodingclub-military.oopy.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                군 장병 무료 강의
              </a>
              <a
                href="https://swjungle.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                SW사관학교 정글
              </a>
              <a
                href="https://easygpt.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                easyGPT
              </a>
            </div>
          </div>
          <div className="footer__menu__corp">
            <div className="footer__menu__title">기업 서비스</div>
            <div className="footer__menu__common__container">
              <a
                href="https://b2b.spartacodingclub.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                기업 교육
              </a>
              <a
                href="https://www.sparta-builders.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                외주 개발
              </a>
              <a
                href="https://intellipick.spartacodingclub.kr/company"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                신입 개발자 채용
              </a>
            </div>
          </div>
          <div className="footer__menu__company">
            <div className="footer__menu__title">회사</div>
            <div className="footer__menu__common__container">
              <a
                href="https://form.typeform.com/to/LL8xi5Om?typeform-source=cjaz35khlrr.typeform.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                강의 튜터 지원
              </a>
              <a
                href="https://spartacodingclub.career.greetinghr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                부트캠프 튜터 지원
              </a>
              <a
                href="https://sparta-career-b2b.oopy.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                협력사 지원
              </a>
              <div className="footer__menu__company__container">
                <a
                  href="https://career.spartacodingclub.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__menu__contents"
                >
                  인재 채용
                </a>
                <div className="footer__menu__company__blank"></div>
                <div className="footer__menu__company__contents">채용중</div>
              </div>
              <a
                href="https://inblog.ai/teamsparta"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu__contents"
              >
                팀블로그
              </a>
            </div>
          </div>
        </div>
        <div className="footer__section__line"></div>
        <section className="footer__etc">
          <ul className="footer__etc__menu">
            <div className="footer__etc__menu__left__container">
              <li className="footer__etc__menu__title">
                <a
                  href="https://teamsparta.notion.site/7b1dc644460946f08bab08b794de685f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  개인정보처리방침
                </a>
              </li>
              <li className="footer__etc__menu__contents">
                <a
                  href="https://teamsparta.notion.site/247d57da1322424d8e8c551df21a048e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  서비스 이용약관
                </a>
              </li>
              <li className="footer__etc__menu__contents">
                <a
                  href="https://teamsparta.notion.site/6abff2edf5b04abebeed5c97e194b6f3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  환불 규정
                </a>
              </li>
            </div>
            <div className="footer__etc__menu__right__container">
              <div className="footer__etc__menu__right__icon__container">
                <a
                  href="https://www.instagram.com/spartacodingclub"
                  className="footer__etc__menu__icon"
                >
                  <FaInstagram className="footer__etc__menu__insta" />
                </a>
                <a
                  href="https://m.blog.naver.com/PostList.nhn?blogId=spartacoding&categoryName=%EC%88%98%EA%B0%95%EC%83%9D%C2%A0%EC%86%94%EC%A7%81%ED%9B%84%EA%B8%B0&categoryNo=6&logCode=0&tab=1"
                  className="footer__etc__menu__icon"
                >
                  <SiNaver className="footer__etc__menu__naver" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC2Fh3XoQYNYTba-cigq5cAA"
                  className="footer__etc__menu__icon"
                >
                  <FaYoutube className="footer__etc__menu__youtube" />
                </a>
              </div>
              <div className="footer__etc__menu__right__brand__container">
                <img
                  src="imgs/footer-brand.png"
                  alt="brand"
                  className="footer__etc__menu__brand"
                />
                <div className="footer__etc__menu__brand__txt">
                  2022-23 올해의 브랜드 대상
                  <br /> 코딩교육 부문 2년 연속 1위
                </div>
              </div>
            </div>
          </ul>
          <div className="footer__etc__contents">
            <section className="footer__etc__contents__section">
              <h4 className="footer__etc__contents__title__txt">
                팀스파르타(주) 사업자 정보
              </h4>
              <dl className="footer__etc__contents__txt">
                <div className="footer__etc__contents__txt__ceo">
                  <dt>대표자:</dt>
                  <dd>이범규</dd>
                  <span>|</span>
                </div>
                <div className="footer__etc__contents__txt__eid">
                  <dt>사업자등록번호:</dt>
                  <dd>783-86-01715</dd>
                  <span>|</span>
                </div>
                <div className="footer__etc__contents__txt__bn">
                  <dt>통신판매업 신고번호:</dt>
                  <dd>2020-서울강남-02300</dd>
                  <span>|</span>
                </div>
                <div className="footer__etc__contents__txt__en">
                  {/* noopener 및 noreferrer를 추가하여 보안을 강화 */}
                  <a
                    href="https://drive.google.com/file/d/1xtT3BX_uowATTC7X788a0EYYTkVx551r/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    평생교육시설 신고번호: 제 661호
                  </a>
                </div>
                <div className="footer__etc__contents__txt__addr">
                  <dt>주소:</dt>
                  <dd>서울특별시 강남구 테헤란로44길 8 12층</dd>
                  <span>|</span>
                </div>
                <div className="footer__etc__contents__txt__email">
                  <dt>이메일:</dt>
                  <dd>contact@teamsparta.co</dd>
                  <span>|</span>
                </div>
                <div className="footer__etc__contents__txt__tel">
                  <dt>전화:</dt>
                  <dd>1522-8016</dd>
                </div>
              </dl>
            </section>
            <p className="footer__etc__contents__c">
              Copyright ©2022 TEAMSPARTA. All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </footer>
  );
}
