import React from "react";

export default function Lecture({ props }) {
  const {
    courseTitle,
    courseDescription,
    coursePrice,
    courseImgURL,
    courseSupport,
  } = props;
  return (
    <div className="main__lecture__items">
      <div className="lecture__items__image">
        <img src={courseImgURL} alt="Loading..." />
      </div>

      <div className="lecture__items__body">
        <div className="lecture__items__content">
          <div className="not-italic text-base font-semibold">
            {courseTitle}
          </div>
          <div className="not-italic text-base font-normal">
            {courseDescription}
          </div>
        </div>
        <div className="lecture__items__footer">
          <div className="flex items-end g-1 self-stretch">{coursePrice}</div>
          <div>{courseSupport}</div>
        </div>
      </div>
    </div>
  );
}
