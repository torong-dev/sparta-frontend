import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import "../Login/index.css";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailHelp, setShowEmailHelp] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);

  /*
    정규 표현식을 사용하여 이메일 형식을 검증하는 함수
      1. /^[a-zA-Z0-9._-]+/: 이메일 주소의 시작은 영문 대소문자, 숫자, 점(.), 언더스코어(_), 하이픈(-) 중 하나 이상 사용
      2. @: "@" 문자가 포함
      3. /[a-zA-Z0-9.-]+/: "@" 다음에는 다시 영문 대소문자, 숫자, 점(.), 하이픈(-) 중 하나 이상 사용
      4. \.: "@" 다음에 나오는 문자열 뒤에는 반드시 점(.)
      5. [a-zA-Z]{2,4}$/: 이메일 주소의 끝은 영문 대소문자 중 2자에서 4자의 글자 -> 최소 2자에서 최대 4자의 도메인을 의미
    */
  const isValidEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // 비밀번호는 6자 이상, 숫자와 영문자 조합
  const isValidPasswordFormat = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  // 이메일이 비어있을 때 help 보여주기
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowEmailHelp(
      e.target.value.trim() === "" || !isValidEmailFormat(e.target.value)
    );
  };

  // 비밀번호가 비어있을 때 help 보여주기
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPasswordHelp(
      e.target.value.trim() === "" || !isValidPasswordFormat(e.target.value)
    );
  };

  // 빈 칸인 상태에서 로그인을 했을 떄 help 보여주기
  const handleLoginClick = () => {
    if (email.trim() === "") {
      setShowEmailHelp(true);
    } else {
      setShowEmailHelp(false);
    }

    if (password.trim() === "") {
      setShowPasswordHelp(true);
    } else {
      setShowPasswordHelp(false);
    }

    console.log("로그인 되었습니다.", email);
  };

  const handleBackClick = () => {
    onClose();
  };

  // Enter키가 눌렸을 때 로그인 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLoginClick();
    }
  };

  return (
    <div className="login">
      <div className="login__modal">
        <div className="login__modal__header">
          <div onClick={handleBackClick} className="login__modal__back">
            <FaArrowLeft />
            뒤로
          </div>
          <div onClick={onClose} className="login__modal__close">
            <IoMdClose />
          </div>
        </div>
        <div className="login__modal__body">
          <div className="login__modal__body__contents">
            <div className="login__modal__title">이메일 로그인</div>
            <input
              className="login__modal__input"
              placeholder="이메일 입력"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            {showEmailHelp && email.trim() === "" && (
              <div className="login__modal__input__help">
                이메일을 입력해 주세요.
              </div>
            )}
            {showEmailHelp &&
              !isValidEmailFormat(email) &&
              email.trim() !== "" && (
                <div className="login__modal__input__help">
                  올바른 이메일 주소 형식으로 다시 입력해 주세요.
                </div>
              )}
            <div className="login__modal__input__line"></div>
            <input
              className="login__modal__input"
              placeholder="비밀번호 입력"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
            />
            {showPasswordHelp && (
              <div className="login__modal__input__help">
                {password.trim() === ""
                  ? "비밀번호를 입력해 주세요."
                  : "가입되지 않은 이메일이거나 비밀번호가 일치하지 않습니다."}
              </div>
            )}
            <button onClick={handleLoginClick} className="login__modal__btn">
              로그인
            </button>
          </div>
          <div className="login__modal__footer">
            <div className="login__modal__footer__contents">
              <button className="login__modal__footer__help">회원가입</button>
              <div className="login__modal__footer__line"></div>
              <span className="login__modal__footer__help">이메일 찾기</span>
              <div className="login__modal__footer__line"></div>
              <span className="login__modal__footer__help">비밀번호 찾기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
