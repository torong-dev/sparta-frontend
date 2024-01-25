import React, { useState, useEffect } from "react";
import "../index.css";
import { instance } from "../../../api/api";
import Lecture from "../Lecture";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export default function AppDev() {
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
          params: { tag: "앱게임 개발" },
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
                  src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/icons/catalog/ic_donghyun.png"
                  alt="이동현"
                />
                <div className="recommend__head__content">
                  <div className="text-gray-700">이동현</div>
                  <div className="not-italic font-normal text-sm text-gray-400">
                    스파르타 플랫폼 개발 팀장
                  </div>
                </div>
              </div>
              {!show && (
                <>
                  <div className="main__recommend__body">
                    <div className="recommend__body__content">
                      <div className="not-italic font-normal text-base text-black">
                        나만의 앱/게임을 만들고 싶은 메이커 DNA가 있는
                        분이시군요, 그렇다면 명확합니다!
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
                        앱 개발은 ‘앱개발 종합반’, 모바일 게임은 ‘게임개발
                        종합반’을 들으시면 됩니다. 두 코스 모두 5주 안에 마켓에
                        배포할 수 있는 수준까지 배우니, 시중에 있는 다른
                        강의들을 완벽하게 압축시켜 놓은 강의라 할 수 있겠습니다.
                      </div>
                      <div className="not-italic font-normal text-base text-black">
                        다만 앱의 경우는 코딩을 처음 한다면 살짝 난이도가 있을
                        수 있어요. 걱정되는 분들은 ‘웹+앱 코딩 메이커’ 강의를
                        추천드립니다. 가격이 조금 있긴 한데.. 멋진 나를 위한
                        선물로는 괜찮지 않나요!
                      </div>
                    </div>
                    <div className="recommend__body__content2">
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          앱개발 종합반
                        </div>
                      </div>
                      <div className="body__content2__item">
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          게임개발 종합반
                        </div>
                        <span className="not-italic font-medium text-base text-lime-500">
                          (국비지원 무료)
                        </span>
                        <div className="content2__item__style">추천 강의</div>
                        <div className="not-italic font-medium text-base text-black">
                          [패키지] 웹 + 앱 코딩 메이커
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
                    lecture.courseTag === "앱게임 개발" && (
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
