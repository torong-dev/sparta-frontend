import React, { useState } from "react";
import "../index.css";
import data from "../cate.json";
import SearchLecture from "./SearchLecture";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function Catalog() {
  const lectures = data;
  // input state
  const [value, setValue] = useState("");
  // input onChangeHandler
  const inputOnChangeHandler = (event) => {
    setValue(event.target.value);
  };
  // input에 입력한 값을 엔터를 눌러 값과 일치하는 강의를 렌더링
  const navigate = useNavigate();
  return (
    <div>
      <div className="search">
        <div className="search__section">
          <div className="search__main">
            <div className="search__main__inputSection">
              <div className="search__main__inputSectionStyle">
                <div className="flex items-center relative">
                  <input
                    value={value}
                    onChange={inputOnChangeHandler}
                    // onKeyUp={}
                    className="search__main__inputStyle"
                    placeholder="어떤 강의를 찾고 계신가요?"
                  />
                  {value && (
                    <button
                      onClick={() => {
                        setValue("");
                        navigate("/catalog/search");
                      }}
                    >
                      <IoCloseCircleOutline className=" -ml-5" />
                    </button>
                  )}
                </div>
                <div className="search__main__popularity">
                  <span className=" font-medium text-sm text-rose-700">
                    인기 검색어
                  </span>
                  <div className="search__main__popularityItems">
                    <button
                      className="search__main__popularityBtn"
                      onClick={() => navigate("/catalog/search/python")}
                    >
                      파이썬
                    </button>
                    <button
                      className="search__main__popularityBtn"
                      onClick={() => navigate("/catalog/search/sql")}
                    >
                      SQL
                    </button>
                    <button
                      className="search__main__popularityBtn"
                      onClick={() => navigate("/catalog/search/chatgpt")}
                    >
                      ChatGPT
                    </button>
                    <button
                      className="search__main__popularityBtn"
                      onClick={() => navigate("/catalog/search/data")}
                    >
                      데이터
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/catalog")}
                className="search__main__closeBtn"
              >
                <img
                  src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/images/catalogv2/exit.svg"
                  alt="닫기"
                  className=" w-4  h-4"
                />
                닫기
              </button>
            </div>

            <div className="search__main__popularityLecture">
              <div className="search__main__popularityLectureStyle">
                <div className="search__main__mostPlayedLecture">
                  <div className="main__mostPlayedLecture__title">
                    <div className="flex gap-2 -mt-10">
                      <h1 className=" not-italic font-semibold text-2xl text-green-900 -mt-10">
                        가장 많이 들었어요
                      </h1>
                    </div>
                  </div>

                  <div className="search__main__mostPlayedLectureBody">
                    {lectures.map((lecture) => {
                      return (
                        lecture.courseTag === "mostPopularity" && (
                          <SearchLecture
                            key={lecture.courseId}
                            props={lecture}
                          />
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="search__main__popularityFreeLecture">
                <div className="search__main__mostPlayedLecture">
                  <div className="main__mostPlayedLecture__title">
                    <div className="flex gap-2 mb-5">
                      <h1 className=" not-italic font-semibold text-2xl text-green-900">
                        인기 무료 강의
                      </h1>
                    </div>
                  </div>

                  <div className="search__main__mostPlayedLectureBody mb-20">
                    {lectures.map((lecture) => {
                      return (
                        lecture.courseTag === "popularFreeCourse" && (
                          <SearchLecture
                            key={lecture.courseId}
                            props={lecture}
                          />
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
