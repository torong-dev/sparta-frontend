import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import { fetchCourseData } from "../../api/api.js";
import LectureItem from "../../components/LectureItem";
import "../Home/index.css";

const Home = () => {
  const titlesRef = useRef(null);
  const [courseData, setCourseData] = useState([]);

  //강의 데이터를 비동기적으로 가져오고 상태 업데이트
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourseData();
        setCourseData(data);
      } catch (errer) {}
    };

    // 컴포넌트가 마운트 될 때, fetchData 함수를 호출
    fetchData();
  }, []);

  // 메인 타이틀 애니메이션 효과
  useEffect(() => {
    const titles = titlesRef.current.children;
    let index = 0;
    let timeoutId;

    // 각 h1 요소를 순차적으로 보이게 하고, 초기 상태로 되돌리는 함수
    const animateTitles = () => {
      if (index < titles.length) {
        // 이전 h1 요소 숨김
        if (index > 0) {
          titles[index - 1].style.opacity = 0;
        }
        titles[index].style.transform = `translateY(${-100 * index}%)`;
        // 현재 h1을 보이게 하고 다음 인덱스로 이동
        titles[index].style.opacity = 1;
        index++;
      } else {
        // 모든 h1 숨김
        index = 0;
        timeoutId = setTimeout(() => {
          for (const title of titles) {
            title.style.transform = `translateY(0)`;
            title.style.opacity = 0;
          }
          titles[0].style.opacity = 1;
          // 다시 시작
          animateTitles();
        }, 300);

        return;
      }

      // 3초 간격으로 다음 애니메이션 시작
      setTimeout(animateTitles, 3000);
    };

    // 초기 애니메이션 시작
    animateTitles();

    // 컴포넌트가 언마운트되면 인터벌을 정리하고, 비동기 처리 중인 코드를 중지합니다.
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="home__main">
        {/* 메인 */}
        <div className="home__main__container">
          <section className="home__main__section">
            <div className="home__main__content">
              <div className="home__main__title">
                <div className="home__main__first-title" ref={titlesRef}>
                  <h1 className="home__main__first-contents__1st">
                    반복되는 업무가 지겨운 경현이도
                  </h1>
                  <h1 className="home__main__first-contents__2nd">
                    내 아이디어로 돈 벌고 싶은 신지도
                  </h1>
                  <h1 className="home__main__first-contents__3rd">
                    개발자 없이 앱 만들고 싶은 대규도
                  </h1>
                  <h1 className="home__main__first-contents__4th">
                    ChatGPT 잘 쓰고 싶은 지현이도
                  </h1>
                  <h1 className="home__main__first-contents__5th">
                    대한민국을 코딩의 땅으로
                  </h1>
                </div>
                <h1 className="home__main__second-title">
                  스파르타클론코딩클럽{" "}
                  <img
                    src="imgs/Home/home-rtanny.png"
                    alt="rtanny"
                    className="home__main__second-icon"
                  />
                </h1>
              </div>
              <div className="home__main__grids">
                <div className="home__main__grid">
                  <img
                    src="imgs/Home/home-main-juya.png"
                    alt="juya"
                    className="home__main__grid__img"
                  />
                  <p>코딩 스터디</p>
                </div>
                <div className="home__main__grid">
                  <img
                    src="imgs/Home/home-main-kprt.png"
                    alt="kprt"
                    className="home__main__grid__img"
                  />
                  <p>IT 자격증</p>
                </div>
                <div className="home__main__grid">
                  <div className="home__main__grid__title">0원수강</div>
                  <img
                    src="imgs/Home/home-main-kdc.svg"
                    alt="kdc"
                    className="home__main__grid__img"
                  />
                  <p>국비 강의</p>
                </div>
                <div className="home__main__grid">
                  <div className="home__main__grid__title">전액 무료</div>
                  <img
                    src="imgs/Home/home-main-kdt.svg"
                    alt="kdt"
                    className="home__main__grid__img"
                  />
                  <p>국비 취업</p>
                </div>
                <div className="home__main__grid">
                  <img
                    src="imgs/Home/home-main-ai.svg"
                    alt="ai"
                    className="home__main__grid__img"
                  />
                  <p>AI</p>
                </div>
                <div className="home__main__grid">
                  <img
                    src="imgs/Home/home-main-app.svg"
                    alt="app"
                    className="home__main__grid__img"
                  />
                  <p>나만의 앱</p>
                </div>
                <div className="home__main__grid">
                  <img
                    src="imgs/Home/home-main-data.svg"
                    alt="data"
                    className="home__main__grid__img"
                  />
                  <p>데이터 분석</p>
                </div>
                <div className="home__main__grid">
                  <img
                    src="imgs/Home/home-main-automation.svg"
                    alt="automation"
                    className="home__main__grid__img"
                  />
                  <p>업무 자동화</p>
                </div>
              </div>
            </div>
            <img
              src="imgs/Home/home-ajh.png"
              alt="AhnJaeHong"
              className="home__main__section__img__ajh"
            />
          </section>
        </div>
        {/* 캐러셀 */}
        <div className="home__cards__container">
          <section className="home__cards__section">
            <Carousel>
              <Carousel.Item>
                <img src="imgs/Home/home-cards-1.png" alt="1" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="imgs/Home/home-cards-2.png" alt="2" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="imgs/Home/home-cards-3.png" alt="3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="imgs/Home/home-cards-4.png" alt="4" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="imgs/Home/home-cards-5.png" alt="5" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="imgs/Home/home-cards-6.png" alt="6" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="imgs/Home/home-cards-7.png" alt="7" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="imgs/Home/home-cards-8.png" alt="8" />
              </Carousel.Item>
            </Carousel>
          </section>
        </div>
        {/* 강의 */}
        <div className="home__lectures__container">
          <section className="home__lectures__section">
            <div className="home__lectures__contents">
              <h2 className="home__lectures__title">
                처음이라면 무료로 시작해보세요
              </h2>
              <h2 className="home__lectures__detail">
                따라만 하면 1시간만에 결과물 완성!
              </h2>
            </div>
            <div className="home__lectures__grids">
              {/* Mock 데이터 */}
              {/* <LectureItem
                courseImgURL="imgs/Home/home-lectures-bucketlist.png"
                courseTitle="2024 나만의 버킷리스트 만들기"
                courseDescription="올해는 어떤 목표를 이뤄볼까? 버킷리스트로 코딩에 입문해봐요"
                courseFree="무료"
              /> */}
              {/* API에서 가져온 강의 데이터를 매핑하여 동적으로 렌더링 */}
              {courseData &&
                courseData.map((course) => (
                  <LectureItem
                    key={course.courseId}
                    courseId={course.courseId}
                    courseImgURL={course.courseImgURL}
                    courseTitle={course.courseTitle}
                    courseDescription={course.courseDescription}
                    courseFree={course.courseFree}
                  />
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
