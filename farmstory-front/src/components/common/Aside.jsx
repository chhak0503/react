import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import useCates from "../../hooks/useCates";

export const Aside = () => {
  const [cate1, cate2] = useCates();

  return (
    <aside>
      <img src={`/images/sub_aside_${cate1}_tit.png`} alt="팜스토리 소개" />
      {/* 팜스토리 소개 */}
      <ul className="lnb">
        <li className={cate2 == "hello" ? "on" : ""}>
          <Link to="/introduction/hello">인사말</Link>
        </li>
        <li className={cate2 == "direction" ? "on" : ""}>
          <Link to="/introduction/direction">찾아오시는길</Link>
        </li>
      </ul>
    </aside>
  );
};
