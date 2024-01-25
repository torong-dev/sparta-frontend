import React, { useState, useEffect } from "react";
import "../index.css";
import { instance } from "../../../api/api";
import Lecture from "../Lecture";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export default function DataBase() {
  const navigate = useNavigate();
  // 더보기 toggle state
  const [show, setShow] = useState(false);
  // 서버로부터 받아온 data state
  const [data, setData] = useState([]);
  // 서버로부터 데이터 받아오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/api/catalog", {
          params: { tag: "데이터" },
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
            <div className="catalog__main__recommend">
              <div className="main__recommend__head">
                <img
                  className="recommend__head__img"
                  src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/icons/catalog/ic_bokyung.png"
                  alt="김보경"
                />
                <div className="recommend__head__content">
                  <div className="text-gray-700">김보경</div>
                  <div className="not-italic font-normal text-sm text-gray-400">
                    스파르타 데이터 분석가
                  </div>
                </div>
              </div>
              {!show && (
                <>
                  <div className="main__recommend__body">
                    <div className="recommend__body__content">
                      <div className="not-italic font-normal text-base text-black">
                        데이터 분석 스킬은 크게 두 가지로 나눠볼 수 있는데요.
                        직장에서 가장 많이 쓰이는 SQL과 파이썬 통계 분석입니다.
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
                        데이터 분석 스킬은 크게 두 가지로 나눠볼 수 있는데요.
                        직장에서 가장 많이 쓰이는 SQL과 파이썬 통계 분석입니다.
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        우선 SQL이 접근하기는 훨~씬 쉬우니 ‘SQLD 자격증 대비반’
                        또는 ‘엑셀보다 쉽고 빠른 SQL’을 먼저 들어보는 것을
                        추천드립니다. 저희 SQL 수업은 필요한 것만 쏙쏙 빼서
                        가르치는 것으로 정평이 나있답니다! 😎
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        만약 데이터 분석가로 취업을 원하신다면? 정공법으로
                        가야죠, ‘데이터 분석 종합반’을 들으시면 딱이랍니다!
                      </div>
                    </div>
                    <div className="recommend__body__content2">
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          엑셀보다 쉽고 빠른 SQL
                        </div>
                      </div>
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          데이터 분석 종합반
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
                    lecture.courseTag === "데이터" && (
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
