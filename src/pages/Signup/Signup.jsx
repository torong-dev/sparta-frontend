import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { signupUser } from "../../api/api.js";
import "../Signup/index.css";

const Signup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [birth, setBirth] = useState("");

  const [showEmailHelp, setShowEmailHelp] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);
  const [showNameHelp, setShowNameHelp] = useState(false);
  const [showPhoneNumHelp, setShowPhoneNumHelp] = useState(false);
  const [showBirthHelp, setShowBirthHelp] = useState(false);

  const handleBackClick = () => {
    onClose();
  };

  // 이메일 형식을 검증하는 함수
  const isValidEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // 비밀번호 형식, 영문자와 숫자 조합, 6자 이상
  const isValidPasswordFormat = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  // 휴대폰 번호는 숫자만으로 이루어져 있고 11자
  const isValidPhoneNumFormat = (phoneNum) => {
    const phoneNumRegex = /^\d{11}$/;
    return phoneNumRegex.test(phoneNum);
  };

  // 생년월일 검증, 8자리의 숫자
  const isValidBirthFormat = (birth) => {
    const birthRegex = /^\d{8}$/;
    return birthRegex.test(birth);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowEmailHelp(!isValidEmailFormat(e.target.value));
    updateButtonState();
  };

  const handlePasswordChange = (e) => {
    setPw(e.target.value);
    setShowPasswordHelp(!isValidPasswordFormat(e.target.value));
    updateButtonState();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setShowNameHelp(e.target.value.trim() === "");
    updateButtonState();
  };

  const handlePhoneNumChange = (e) => {
    setPhoneNum(e.target.value);
    setShowPhoneNumHelp(!isValidPhoneNumFormat(e.target.value));
    updateButtonState();
  };

  const handleBirthChange = (e) => {
    setBirth(e.target.value);
    setShowBirthHelp(!isValidBirthFormat(e.target.value));
    updateButtonState();
  };

  // 버튼 활성/비활성 상태 업데이트 로직
  const updateButtonState = () => {
    isValidEmailFormat(email) &&
      isValidPasswordFormat(pw) &&
      name.trim() !== "" &&
      isValidPhoneNumFormat(phoneNum) &&
      isValidBirthFormat(birth);
  };

  const handleSignup = async () => {
    try {
      // 가입 전에 모든 도움말을 숨김
      setShowEmailHelp(false);
      setShowPasswordHelp(false);
      setShowNameHelp(false);
      setShowPhoneNumHelp(false);
      setShowBirthHelp(false);

      // 가입 전에 유효성 검사 수행
      if (!isValidEmailFormat(email)) {
        setShowEmailHelp(true);
        return;
      }

      if (!isValidPasswordFormat(pw)) {
        setShowPasswordHelp(true);
        return;
      }

      if (name.trim() === "") {
        setShowNameHelp(true);
        return;
      }

      if (!isValidPhoneNumFormat(phoneNum)) {
        setShowPhoneNumHelp(true);
        return;
      }

      if (!isValidBirthFormat(birth)) {
        setShowBirthHelp(true);
        return;
      }

      // 버튼 상태 업데이트
      updateButtonState();

      // 가입 로직 수행
      const userData = { email, pw, name, phoneNum, birth };
      await signupUser(userData);

      onClose();
    } catch (error) {
      console.error("가입 오류:", error);
    }
  };

  return (
    <div className="signup">
      <div className="signup__modal">
        <div className="signup__modal__header">
          <div onClick={handleBackClick} className="signup__modal__back">
            <FaArrowLeft />
            뒤로
          </div>
          <div
            onClick={() => {
              onClose();
            }}
            className="signup__modal__close"
          >
            <IoMdClose />
          </div>
        </div>
        <div className="signup__modal__body">
          <div className="signup__modal__body__contents">
            <div className="signup__modal__body__title">
              하나의 계정으로
              <br />
              &nbsp;&nbsp;더욱 간편하게
            </div>
            <div className="signup__modal__body__line"></div>
            <div className="signup__modal__body__detail">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;스파르타에서 제공하는 서비스를
              <br />
              하나의 계정으로 모두 이용할 수 있어요.
            </div>
            <div className="signup__modal__body__line2"></div>
            <img
              className="signup__modal__body__logos"
              src="imgs/signup-logos.png"
              alt="logos"
            />
            <div className="signup__modal__body__line3"></div>
            <div className="signup__modal__body__input__box">
              <div className="signup__modal__body__input__title">이메일</div>
              <input
                className="signup__modal__body__input"
                type="text"
                placeholder="이메일 입력"
                autoCapitalize="off"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {showEmailHelp && (
              <div className="signup__modal__body__input__box__help">
                <div className="signup__modal__body__input__box__help__line"></div>
                올바른 이메일 주소 형식으로 다시 입력해 주세요.
              </div>
            )}
            <div className="signup__modal__body__line4"></div>
            <div className="signup__modal__body__input__box">
              <div className="signup__modal__body__input__title">비밀번호</div>
              <input
                className="signup__modal__body__input"
                type="password"
                placeholder="6자 이상, 숫자와 영문자 조합"
                autoCapitalize="off"
                value={pw}
                onChange={handlePasswordChange}
              />
            </div>
            {showPasswordHelp && (
              <div className="signup__modal__body__input__box__help">
                <div className="signup__modal__body__input__box__help__line"></div>
                영문, 숫자 조합으로 6자 이상 입력해 주세요.
              </div>
            )}
            <div className="signup__modal__body__line4"></div>
            <div className="signup__modal__body__input__box">
              <div className="signup__modal__body__input__title">이름</div>
              <input
                className="signup__modal__body__input"
                type="string"
                placeholder="이름 입력"
                autoCapitalize="off"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            {showNameHelp && (
              <div className="signup__modal__body__input__box__help">
                <div className="signup__modal__body__input__box__help__line"></div>
                이름을 입력해 주세요.
              </div>
            )}
            <div className="signup__modal__body__line4"></div>
            <div className="signup__modal__body__input__box">
              <div className="signup__modal__body__input__title">
                휴대폰 번호
              </div>
              <input
                className="signup__modal__body__input"
                type="string"
                placeholder="휴대폰 번호 입력 (- 제외)"
                autoCapitalize="off"
                value={phoneNum}
                onChange={handlePhoneNumChange}
              />
            </div>
            {showPhoneNumHelp && (
              <div className="signup__modal__body__input__box__help">
                <div className="signup__modal__body__input__box__help__line"></div>
                올바른 휴대폰 번호 형식으로 다시 입력해 주세요.
              </div>
            )}
            <div className="signup__modal__body__line4"></div>
            <div className="signup__modal__body__input__box">
              <div className="signup__modal__body__input__title">생년월일</div>
              <input
                className="signup__modal__body__input"
                type="string"
                placeholder="ex. 19990101"
                autoCapitalize="off"
                value={birth}
                onChange={handleBirthChange}
              />
            </div>
            {showBirthHelp && (
              <div className="signup__modal__body__input__box__help">
                <div className="signup__modal__body__input__box__help__line"></div>
                생년월일을 다시 확인해 주세요.
              </div>
            )}
            <div className="signup__modal__body__line7"></div>
            <div className="signup__modal__body__line6"></div>
            <div className="signup__modal__body__line7"></div>
            <button onClick={handleSignup} className="signup__modal__btn">
              가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
