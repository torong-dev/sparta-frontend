import React, { useState, useEffect } from "react";
import "../index.css";
import { instance } from "../../../api/api";
import Lecture from "../Lecture";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export default function Automation() {
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
          params: { tag: "업무자동화" },
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
                  src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/icons/catalog/ic_jooyoung.png"
                  alt="박주영"
                />
                <div className="recommend__head__content">
                  <div className="text-gray-700">박주영</div>
                  <div className="not-italic font-normal text-sm text-gray-400">
                    스파르타 플랫폼 기획 팀장
                  </div>
                </div>
              </div>
              {!show && (
                <>
                  <div className="main__recommend__body">
                    <div className="recommend__body__content">
                      <div className="not-italic font-normal text-base text-black">
                        ‘직장인들의 코딩은 칼퇴를 부른다’라는 말이 있습니다.
                        업무 자동화 자체가 그리 어려운 작업은 아니어서, 완전
                        왕초보도 괜찮아요!
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
                        ‘직장인들의 코딩은 칼퇴를 부른다’라는 말이 있습니다.
                        업무 자동화 자체가 그리 어려운 작업은 아니어서, 완전
                        왕초보도 괜찮아요!
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        우선 누구나 가볍게 시작해 봄직한 ‘비개발자도 할 수 있는
                        ChatGPT 활용 파이썬 업무 자동화’ 강의를 들어보면
                        어떨까요?
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        주식 투자를 하고 계신다면 ‘금융인을 위한 파이썬 업무
                        자동화’ 강의도 추천드려요. 실시간 데이터를 기반으로 내가
                        원하는 종목들을 추출하거나 분석할 수 있어요! 무려
                        “백테스팅”까지 배운다는..!
                      </div>
                    </div>
                    <div className="recommend__body__content2">
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          비개발자도 할 수 있는 ChatGPT 활용 파이썬 업무자동화
                        </div>
                      </div>
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          금융인을 위한 파이썬 업무자동화
                          <span className="not-italic font-medium text-base text-lime-500">
                            (국비지원 무료)
                          </span>
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
                    lecture.courseTag === "업무자동화" && (
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
