import React, { useEffect, useState } from "react";
import "../index.css";
import { instance } from "../../../api/api";
import Lecture from "../Lecture";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Python() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const inputOnChangeHandler = (event) => {
    setValue(event.target.value);
  };
  // 서버로부터 받은 data state
  const [data, setData] = useState([]);
  // 서버로부터 데이터 받아오기
  useEffect(() => {
    setValue("파이썬");
    const fetchData = async () => {
      try {
        const response = await instance.get("/api/catalog", {
          params: { query: "파이썬" },
        });
        console.log("response 값 확인하기 => ", response);
        setData(response.data);
      } catch (error) {
        if (error.response) {
          const errorStatus = error.response.status;
          const errorMessage = error.response.errorMessage;

          if (errorStatus === 404 || errorStatus === 500) {
            alert(errorMessage);
          }
        }
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div className="search mt-52">
      <div className="search__section">
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
                  onClick={() => {
                    setValue("파이썬");
                    navigate("/catalog/search/python");
                  }}
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

        <div className="catalog__main__lecture mb-20">
          <div className="main__lecture__style">
            {data.map((lecture) => {
              return <Lecture key={lecture.courseId} props={lecture} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
