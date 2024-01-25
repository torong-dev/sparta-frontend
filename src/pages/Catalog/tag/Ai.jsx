import React, { useState, useEffect } from "react";
import "../index.css";
import api from "../../../api/api";
import Lecture from "../Lecture";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export default function Ai() {
  // 서버로부터 받아온 data state
  const [data, setData] = useState([]);
  // 서버로부터 데이터 받아오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/catalog", {
          params: { tag: "ai" },
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
  }, []);
  const navigate = useNavigate();
  // 더보기 toggle state
  const [show, setShow] = useState(false);
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
            <div className="catalog__main__recommend">
              <div className="main__recommend__head">
                <img
                  className="recommend__head__img"
                  src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/icons/catalog/ic_byungkwan.png"
                  alt="남병관"
                />
                <div className="recommend__head__content">
                  <div className="text-gray-700">남병관</div>
                  <div className="not-italic font-normal text-sm text-gray-400">
                    스파르타 CTO
                  </div>
                </div>
              </div>
              {!show && (
                <>
                  <div className="main__recommend__body">
                    <div className="recommend__body__content">
                      <div className="not-italic font-normal text-base text-black">
                        AI 시대를 대비하고 싶다면 역시 ChatGPT를 빼놓을 수 없죠.
                        요샌 AI에 대한 이론을 공부하는 것보다 이미 있는 툴들을
                        잘 활용하는 게 중요하답니다.
                      </div>
                    </div>
                  </div>

                  <div className="main__recommend__footer">
                    <button onClick={() => setShow(true)}>
                      <div className="recommend__footer__toggle">더보기</div>
                    </button>
                  </div>
                </>
              )}

              {show && (
                <>
                  <div className="main__recommend__body">
                    <div className="recommend__body__content">
                      <div className="not-italic font-normal text-base text-black">
                        AI 시대를 대비하고 싶다면 역시 ChatGPT를 빼놓을 수 없죠.
                        요샌 AI에 대한 이론을 공부하는 것보다 이미 있는 툴들을
                        잘 활용하는 게 중요하답니다.
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        우선 ‘ChatGPT 300% 활용하기’ 강의로 업무에 활용하는 법을
                        배우고, PPT 보고서 제작 효율을 높이는 ‘AI로 10분 만에
                        보고서 만들기’ 강의를 들어보세요.
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        흥미가 생겼다면 ChatGPT를 활용한 코딩 완결판! ‘[GPT]
                        웹개발 종합반’을 수강하고 AI+코딩 두 마리 토끼를
                        잡아보는 것을 추천드립니다!
                      </div>
                    </div>
                    <div className="recommend__body__content2">
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          ChatGPT 300% 활용하기
                          <span className="not-italic font-medium text-base text-lime-500">
                            (국비지원 무료)
                          </span>
                        </div>
                      </div>
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          [GPT] 웹개발 종합반
                        </div>
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          AI로 10분만에 보고서 만들기
                        </div>
                        <span className="font-medium not-italic font-base text-rose-700">
                          (무료)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="main__recommend__footer">
                    <button onClick={() => setShow(false)}>
                      <div className="recommend__footer__toggle">닫기</div>
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="catalog__main__lecture">
              <div className="main__lecture__title">
                <div className="flex gap-2">
                  <div className="not-italic font-semibold text-2xl text-rose-700">
                    추천강의
                  </div>
                </div>
              </div>
              <div className="main__lecture__style">
                {data.map((lecture) => {
                  return (
                    lecture.courseTag === "AI" && (
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
