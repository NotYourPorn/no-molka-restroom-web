/** @format */

import React from "react";

import { QuestionData } from "../Data/QuestionData";
import QuestionSlider from "../components/QuestionSlider";

import "../css/Question.css";

function Question() {
  const slider = QuestionData.map((item, index) => {
    return <button key="index"> </button>;
  });

  return (
    <div className="question">
      <header>
        <h1 className="question-title">낫유포에게 물어보세요</h1>
        <div className="question-slider">{slider}</div>
      </header>

      <section>
        <div className="questions">
          <QuestionSlider />
        </div>
      </section>
    </div>
  );
}

export default Question;
