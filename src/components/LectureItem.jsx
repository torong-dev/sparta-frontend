import React from "react";

// 강의 섹션의 각 아이템을 렌더링하는 컴포넌트
const LectureItem = ({
  couresId,
  couresImgURL,
  couresTitle,
  couresDescription,
  courseFree,
}) => (
  <div className="home__leactures__grid" id={couresId}>
    <img
      className="home__leactures__grid-img"
      src={couresImgURL}
      alt="bucketlist"
    />
    <div className="home__lectures__btn__details">
      <button className="home__lectures__btn__details__btn">
        <img src="imgs/Home/home-lectures-thunder.svg" alt="thunder" />
        <span>&nbsp;바로 수강신청</span>
      </button>
      <div>
        <h3 className="home__lectures__content__title">{couresTitle}</h3>
        <p className="home__lectures__content__detail">{couresDescription}</p>
      </div>
      <p className="home__lectures__content__price">{courseFree}</p>
    </div>
  </div>
);

export default LectureItem;
