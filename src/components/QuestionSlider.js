/** @format */

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

import "../css/Question.css";
import { QuestionData } from "../Data/QuestionData";
import Slider from "./Slider";

const QuestionSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = QuestionData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="question-box">
      <FaIcons.FaArrowAltCircleLeft
        className="left-arrow"
        onClick={prevSlide}
      />
      <FaIcons.FaArrowAltCircleRight
        className="right-arrow"
        onClick={nextSlide}
      />

      {QuestionData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide active" : "slide"}
            key={index}
          >
            <h1>Q{index + 1}</h1>
            <div className="question-line-1"></div>
            <h1 className="question-list">{slide.question}</h1>
            <div className="question-line-2"></div>
            <p className="answer-list">{slide.answer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionSlider;
