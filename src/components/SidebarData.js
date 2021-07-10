/** @format */

import React from "react";

import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io5";

export const SidebarData = [
  {
    icon: <FaIcons.FaAngleDoubleRight />,
    title: "",
    path: "/",
    cName: "nav-text",
  },
  {
    icon: <BiIcons.BiCameraOff />,
    title: "불법 촬영 근절",
    path: "/map",
    cName: "nav-text",
  },
  {
    icon: <CgIcons.CgComment />,
    title: "게시판",
    path: "/board",
    cName: "nav-text",
  },
  {
    icon: <BiIcons.BiNews />,
    title: "News",
    path: "/news",
    cName: "nav-text",
  },
  {
    icon: <GoIcons.GoReport />,
    title: "Report",
    path: "/reports",
    cName: "nav-text",
  },
  {
    icon: <FaIcons.FaRegQuestionCircle />,
    title: "F&Q",
    path: "/fnq",
    cName: "nav-text",
  },
  {
    icon: <FiIcons.FiPhone />,
    title: "Contact Us",
    path: "/contact",
    cName: "nav-text",
  },
  {
    icon: <IoIcons.IoPeopleCircle />,
    title: "About Us",
    cName: "nav-text",
    path: "/about-us",
  },
];
