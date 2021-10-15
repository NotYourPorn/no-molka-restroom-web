/** @format */
import { FETCH_PLACES_QUERY } from "../../server/Data/RentQueries";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";

const conditionCheck = (condition) => {
  if (condition.includes("C")) {
    return <p>관리자, 일반 시민 대상</p>;
  } else {
    return <p>건물 / 시설물 관리자, 소유자 대상</p>;
  }
};

const PlaceResult = (props) => {
  const currentId = props.placeId;

  const { loading, error, data } = useQuery(FETCH_PLACES_QUERY, {
    variables: { placeId: currentId },
  });
  return (
    <div className="info-box">
      {loading && "loading"}
      {error && "this is error"}
      {data && (
        <div className="place-detail-box">
          {console.log(currentId)}
          <li className="place-name">{data.places.name}</li>
          <div className="place-info-list">
            <div className="place-info-icon">
              <MdIcons.MdLocationOn />
            </div>
            <div>
              <p className="place-info-tag">주소</p>
              <p>{data.places.address}</p>
            </div>
          </div>
          <div className="place-info-list">
            <div className="place-info-icon">
              <FaIcons.FaPhoneAlt />
            </div>
            <div>
              <p className="place-info-tag">전화번호</p>
              <p>{data.places.phone}</p>
            </div>
          </div>
          {data.places.cities.map((city) => {
            return (
              <>
                <div className="place-info-list">
                  <div className="place-info-icon">
                    <IoIcons.IoMdKey />
                  </div>
                  <div>
                    <p className="place-info-tag">대여 품목</p>
                    <p>{city.item}</p>
                  </div>
                </div>
                <div className="place-info-list">
                  <div className="place-info-icon">
                    <CgIcons.CgProfile />
                  </div>
                  <div>
                    <p className="place-info-tag">대여 대상</p>
                    <p>{conditionCheck(city.condition)}</p>
                  </div>
                </div>
                <div className="place-info-list">
                  <div className="place-info-icon">
                    <CgIcons.CgFileDocument />
                  </div>
                  <div>
                    <p className="place-info-tag">대여 방법</p>
                    <p>{city.method}</p>
                  </div>
                </div>
                <div className="place-info-list">
                  <div className="place-info-icon">
                    <BiIcons.BiTime />
                  </div>
                  <div>
                    <p className="place-info-tag">대여 기간</p>
                    <p>{city.period}</p>
                  </div>
                </div>
              </>
            );
          })}
          <div className="place-info-list">
            <div className="place-info-icon">
              <GoIcons.GoAlert />
            </div>
            <div>
              <p className="place-info-tag">주의사항</p>
              <p>신분증 지참</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceResult;
