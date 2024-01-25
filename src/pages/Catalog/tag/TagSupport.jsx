import React, { useState, useEffect } from "react";
import "../index.css";
import { instance } from "../../../api/api";
import Lecture from "../Lecture";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";

export default function TagSupport() {
  const navigate = useNavigate();
  // 서버로 부터 받아온 data state
  const [data, setData] = useState([]);
  // 서버로 부터 데이터 받아오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/api/catalog", {
          params: { tag: "국비지원" },
        });
        console.log("response 값 확인하기 => ", response);
        setData(response.data);
      } catch (error) {
        if (error.response) {
          const errorStatus = error.response.status;
          const errorMessage = error.response.errorMessage;

          if (errorStatus === 404 || errorStatus === 500) {
            alert(errorMessage);
            navigate("/error");
          }
        }
      }
    };
    fetchData();
  }, [navigate]);
  return (
    <div>
      <div className="catalog">
        <div className="catalog__section">
          <div className="catalog__menu">
            <div className="catalog__menu__items">
              <button onClick={() => navigate("/catalog")}>
                <div className="catalog__menu__btn">전체</div>
              </button>
              <button onClick={() => navigate("/catalog/tagsupport")}>
                <div className="catalog__menu__btn">국비지원</div>
              </button>
              <button onClick={() => navigate("/catalog/newyear")}>
                <div className="catalog__menu__btn">새해에는 코딩</div>
              </button>
              <button onClick={() => navigate("/catalog/ai")}>
                <div className="catalog__menu__btn">AI</div>
              </button>
              <button onClick={() => navigate("/catalog/appdev")}>
                <div className="catalog__menu__btn">앱∙게임 개발</div>
              </button>
              <button onClick={() => navigate("/catalog/database")}>
                <div className="catalog__menu__btn">데이터</div>
              </button>
              <button onClick={() => navigate("/catalog/automation")}>
                <div className="catalog__menu__btn">업무 자동화</div>
              </button>
              <button onClick={() => navigate("/catalog/nocode")}>
                <div className="catalog__menu__btn">노코드</div>
              </button>
              <button onClick={() => navigate("/catalog/search")}>
                <div className="catalog__menu__search__btn">
                  <GoSearch /> &nbsp;검색
                </div>
              </button>
            </div>
          </div>
          <div className="catalog__main">
            <button className="catalog__main__banner">
              <div className="catalog__banner__content">
                <p className="banner__content__style1">
                  국비지원 받는 방법, 궁금하다면?
                </p>
                <div className="catalog__banner__innerContent">
                  <p className="banner__content__style2">가이드 보기</p>
                  <p>
                    <MdArrowForwardIos />
                  </p>
                </div>
              </div>
              <div className="catalog__banner__img">
                <span className="banner__img__style">
                  <img
                    src="https://spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2FTeamSparta-Inc%2Fscc-frontend%2Fassets%2Fimages%2Fcatalog%2Fbanners%2Fkdc_card.png&w=3840&q=75"
                    alt="course thumbnail"
                  ></img>
                </span>
              </div>
            </button>

            <div className="catalog__main__lecture">
              <div className="main__lecture__style">
                {data.map((lecture) => {
                  return (
                    lecture.courseSupport === true && (
                      <Lecture key={lecture.courseId} props={lecture} />
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
