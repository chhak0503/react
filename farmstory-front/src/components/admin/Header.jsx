import React from "react";

export const Header = () => {
  return (
    <header>
      <a href="./index.html" className="logo">
        <img src="/images/admin_logo.jpg" alt="로고" />
      </a>
      <p>
        <a href="/">HOME |</a>
        <a href="#">로그아웃 |</a>
        <a href="#">고객센터</a>
      </p>
    </header>
  );
};
