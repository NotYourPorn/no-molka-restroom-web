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
    return <li>관리자, 일반 시민 대상</li>;
  } else {
    return <li>건물 / 시설물 관리자, 소유자 대상</li>;
  }
};

const PlaceResult = () => {
  const [cityId, setCityId] = useState("613d5d6d509b4d6b3c2c2da6");

  const { loading, error, data } = useQuery(FETCH_PLACES_QUERY, {
    variables: { cityId },
  });
  return (
    <div className="info-box">
      {loading && "loading"}
      {error && "There is an error"}
      {data &&
        data.places.map((place) => {
          return (
            <div className="place-detail-box">
              <li className="place-name">{place.name}</li>
              <div className="place-info-list">
                <div className="place-info-icon">
                  <MdIcons.MdLocationOn />
                </div>
                <div>
                  <p>주소</p>
                  <li>{place.address}</li>
                </div>
              </div>
              <div className="place-info-list">
                <div className="place-info-icon">
                  <FaIcons.FaPhoneAlt />
                </div>
                <div>
                  <p>전화번호</p>
                  <li>{place.phone}</li>
                </div>
              </div>
              {place.cities.map((city) => {
                return (
                  <>
                    <div className="place-info-list">
                      <div className="place-info-icon">
                        <IoIcons.IoMdKey />
                      </div>
                      <div>
                        <p>대여 품목</p>
                        <li>{city.item}</li>
                      </div>
                    </div>
                    <div className="place-info-list">
                      <div className="place-info-icon">
                        <CgIcons.CgProfile />
                      </div>
                      <div>
                        <p>대여 대상</p>
                        <li>{conditionCheck(city.condition)}</li>
                      </div>
                    </div>
                    <div className="place-info-list">
                      <div className="place-info-icon">
                        <CgIcons.CgFileDocument />
                      </div>
                      <div>
                        <p>대여 방법</p>
                        <li>{city.method}</li>
                      </div>
                    </div>
                    <div className="place-info-list">
                      <div className="place-info-icon">
                        <BiIcons.BiTime />
                      </div>
                      <div>
                        <p>대여 기간</p>
                        <li>{city.period}</li>
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
                  <p>주의사항</p>
                  <li>신분증 지참</li>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PlaceResult;
