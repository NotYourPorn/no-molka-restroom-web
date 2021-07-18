/** @format */

import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import "../css/Question.css";
import { QuestionData } from "../Data/QuestionData";
import Slider from "./Slider";

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

const TOTAL_SLIDES = QuestionData.length;

export default function QuestionSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const SliderList = QuestionData.map((item, index) => {
    return (
      <Slider
        answer={item.answer}
        question={item.question}
        num={index}
        key={index}
      />
    );
  });

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div className="question-set">
      {currentSlide}
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
      <SliderContainer ref={slideRef}>{SliderList}</SliderContainer>
    </div>
  );
}
