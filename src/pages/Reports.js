/** @format */
import React from "react";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";

import "../css/Reports.css";

const ReportTypes = [
  {
    icon: <IoIcons.IoNewspaperOutline />,
    type: "정보",
    explain: "뉴스, 화제거리",
  },
  {
    icon: <AiIcons.AiTwotoneAlert />,
    type: "범죄",
    explain: "피해장소",
  },
  {
    icon: <AiIcons.AiOutlineSafety />,
    type: "점검 화장실",
    explain: "몰카 점검 장소",
  },
];

function Reports() {
  return (
    <div className="reports">
      <header>
        <h1>제보하기</h1>
      </header>
      <section>
        <h1>분류</h1>
        <div className="type-box">
          {ReportTypes.map((report, index) => {
            return (
              <div className="type">
                <span className="report-icon">{report.icon}</span>
                <p>{report.type}</p>
                <p>{report.explain}</p>
              </div>
            );
          })}
        </div>
        <div className="text-box">
          <div className="border-line"></div>
          <div className="title-box">
            <p>제목</p>
            <input type="text" />
          </div>
          <div className="location-box">
            <p>위치</p>
            <input type="text" />
          </div>
          <div className="content-box">
            <p>내용</p>
            <input type="text" />
          </div>
          <div className="border-line"></div>
        </div>
        <div className="photo-box">
          <p>사진 첨부</p>
          <input type="text" />
          <p>이미지를 첨부해주세요.</p>
        </div>
        <button>제출</button>
      </section>
    </div>
  );
}

export default Reports;
