/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(True);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars"></Link>
      </div>
    </>
  );
}

export default Navbar;
