import React, { useState, useEffect } from "react";
import "../index.css";
import api from "../../../api/api";
import Lecture from "../Lecture";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export default function NoCode() {
  // 서버로부터 받아온 데이터 state
  const [data, setData] = useState([]);
  // 서버로 부터 데이터 받아오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/catalog", {
          params: { tag: "노코드" },
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
            {/* menu 눌렀을때 중첩라우팅 */}
          </div>
          <div className="catalog__main">
            <div className="catalog__main__recommend">
              <div className="main__recommend__head">
                <img
                  className="recommend__head__img"
                  src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/icons/catalog/ic_soonyoung.png"
                  alt="황순영"
                />
                <div className="recommend__head__content">
                  <div className="text-gray-700">황순영</div>
                  <div className="not-italic font-normal text-sm text-gray-400">
                    스파르타 사업 기획 팀장
                  </div>
                </div>
              </div>
              {!show && (
                <>
                  <div className="main__recommend__body">
                    <div className="recommend__body__content">
                      <div className="not-italic font-normal text-base text-black">
                        맞아요, 요샌 간단한 작업은 코딩 없이도 할 수 있어요!
                        ‘노코드’라는 말 들어보셨나요?
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
                        맞아요, 요샌 간단한 작업은 코딩 없이도 할 수 있어요!
                        ‘노코드’라는 말 들어보셨나요?
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        저라면 우선 ‘노코드 종합반’을 들어볼 거예요. 글로벌 유명
                        웹페이지 제작 툴 Webflow를 이용해서 웹서비스를 만들어
                        보는 수업이에요. 심지어 DB도 만들어 붙인답니다.
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        만약 노코드 업무 자동화에 좀 더 관심이 있다면? 역시
                        ChatGPT를 이용해야죠, ‘ChatGPT와 함께 노코드로 시작하는
                        업무 효율화’ 강의를 추천합니다!
                      </div>
                    </div>
                    <div className="recommend__body__content2">
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          노코드 종합반
                          <span className="not-italic font-medium text-base text-lime-500">
                            (국비지원 무료)
                          </span>
                        </div>
                      </div>
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          ChatGPT와 함께 노코드로 시작하는 업무효율화
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
                    lecture.courseTag === "노코드" && (
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
