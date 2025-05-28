import React, { useState } from "react";
import { postUserLogin } from "../../api/userAPI";

const initState = {
  uid: "",
  pass: "",
};

export const Login = () => {
  const [user, setUser] = useState({ ...initState });

  // 핸들러
  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // 서버 요청 정의
    const fetchData = async () => {
      try {
        const data = await postUserLogin(user);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    // 호출
    fetchData();
  };

  return (
    <section className="login">
      <form onSubmit={submitHandler}>
        <table border="0">
          <tr>
            <td>
              <img src="/images/login_ico_id.png" alt="아이디" />
            </td>
            <td>
              <input
                type="text"
                name="uid"
                value={user.uid}
                onChange={changeHandler}
                placeholder="아이디 입력"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/login_ico_pw.png" alt="비밀번호" />
            </td>
            <td>
              <input
                type="password"
                name="pass"
                value={user.pass}
                onChange={changeHandler}
                placeholder="비밀번호 입력"
              />
            </td>
          </tr>
        </table>
        <input type="submit" value="로그인" className="btnLogin" />
      </form>
      <div>
        <h3>회원 로그인 안내</h3>
        <p>아직 회원이 아니시면 회원으로 가입하세요.</p>
        <div style={{ "text-align": "right" }}>
          <a href="../find/userid.html">아이디 |</a>
          <a href="../find/password.html">비밀번호찾기 |</a>
          <a href="./terms.html">회원가입</a>
        </div>
      </div>
    </section>
  );
};
