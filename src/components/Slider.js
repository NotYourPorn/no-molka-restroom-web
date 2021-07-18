/** @format */

import React from "react";

export default function Slider({ question, answer, num }) {
  return (
    <div className="question-box">
      <h1>Q{num + 1}</h1>
      <div className="question-line-1"></div>
      <h1 className="question-list">{question}</h1>
      <div className="question-line-2"></div>
      <p className="answer-list">{answer}</p>
    </div>
  );
}
