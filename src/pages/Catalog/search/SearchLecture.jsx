import React from "react";

export default function SearchLecture({ props }) {
  const {
    courseTitle,
    courseDescription,
    coursePrice,
    courseImgURL,
    courseSupport,
  } = props;
  return (
    <div className="SearchLecture__items">
      <div className="SearchLecture__items__Img">
        <img src={courseImgURL} alt="Loading..." />
      </div>

      <div className="SearchLecture__items__body">
        <div className="SearchLecture__items__contents">
          <div className=" not-italic font-semibold text-base text-zinc-50">
            {courseTitle}
          </div>
          <div className=" not-italic font-normal text-base text-zinc-50">
            {courseDescription}
          </div>
        </div>
        <div className="SearchLecture__items__price">
          <div className=" font-medium text-base">{coursePrice}</div>
          <div>{courseSupport}</div>
        </div>
      </div>
    </div>
  );
}
