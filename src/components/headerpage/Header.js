import "./Header.css";
import React from 'react';
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";


const Header = () => {
  const userId = "PPID011";
  const userName = "Manuuu";
  return (
    <>
      <div className="headercontainer">
        <div className="userid">USER ID:{userId} </div>

        <div className="dropdown">
          <BiUser />
          {userName}
          <CgChevronDown />
          
        </div>
      </div>

      <div className="headerbtmline"></div>
    </>
  );
};
export default Header;
