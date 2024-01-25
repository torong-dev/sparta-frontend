import React, { useState, useEffect } from "react";
import "../index.css";
import api from "../../../api/api";
import Lecture from "../Lecture";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export default function NewYear() {
  const navigate = useNavigate();
  // 더보기 토글 state
  const [show, setShow] = useState(false);
  // 서버로부터 받아온 데이터 state
  const [data, setData] = useState([]);
  // 서버로부터 데이터 받아오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/catalog", {
          params: { tag: "새해에는 코딩" },
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
            <div className="catalog__main__recommend ">
              <div className="main__recommend__head">
                <img
                  className="recommend__head__img"
                  src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/icons/catalog/ic_jiwoong.png"
                  alt="최지웅"
                />
                <div className="recommend__head__content">
                  <div className="text-gray-700">최지웅</div>
                  <div className="not-italic font-normal text-sm text-gray-400">
                    스파르타 커리큘럼 팀장
                  </div>
                </div>
              </div>
              {!show && (
                <>
                  <div className="main__recommend__body">
                    <div className="recommend__body__content">
                      <div className="not-italic font-normal text-base text-black">
                        새해 목표로 코딩을 배우고 싶나요? 직관적이고 쉬운
                        강의부터 들어 보세요! 복잡하고 어려우면 포기하기
                        쉽거든요.
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
                        새해 목표로 코딩을 배우고 싶나요? 직관적이고 쉬운
                        강의부터 들어 보세요! 복잡하고 어려우면 포기하기
                        쉽거든요.
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        새해 목표를 이루고 싶은 분들께 ‘웹개발 종합반'을
                        추천드립니다. 웹사이트 개발 영역 중 눈으로 보이는 부분을
                        다루는 강의라 직관적이고 쉽게 배울 수 있어요. 수강하면
                        모바일 청첩장 정도는 뚝딱 만들 수 있답니다.
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        조금 더 심화된 강의를 원한다면? chatGPT를 이용해
                        웹사이트 완결판을 만드는 ‘[GPT] 웹개발 종합반’을
                        추천드립니다!
                      </div>
                    </div>
                    <div className="recommend__body__content2">
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          [왕초보] 웹개발 종합반
                          <span className="not-italic font-medium text-base text-lime-500">
                            (국비지원 무료)
                          </span>
                        </div>
                      </div>
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          "[GPT] 웹개발 종합반"
                        </div>
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
                    lecture.courseTag === "새해에는 코딩" && (
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
