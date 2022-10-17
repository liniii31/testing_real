import React from "react";
import "./SideNavBar.css";
import { RiHome3Line } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { BsFillTagFill } from "react-icons/bs";
import { GrFormView, GrUpload, GrDownload } from "react-icons/gr";


const SideNavBar = () => {
  return (
    <>
      <div className="sidebarconatiner">
        <div className="logooption">
          <h4>Logo</h4>
            
        </div>

        <div className="sidesubcontainer">
          <div className="sideoption property">
            <div className="home">
              <RiHome3Line />
            </div>
            <div className="property">Property</div>
          </div>

          <div className="sideoption gray">
            <div>
              <IoIosNotifications />
            </div>
            <div className="navvalue">Assistant</div>
          </div>

          <div className="sideoption gray">
            <div className="colorgray">
              <GrDownload />
            </div>
            <div className="navvalue">Received Interest</div>
          </div>

          <div className="sideoption gray ">
            <div className="colorgray">
              <GrUpload />
            </div>
            <div className="navvalue">Sent Interest</div>
          </div>

          <div className="sideoption gray">
            <div>
              <GrFormView />
            </div>
            <div className="navvalue">Property View</div>
          </div>

          <div className="sideoption gray">
            <div>
              <BsFillTagFill />
            </div>
            <div className="navvalue">Traffic Plan</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideNavBar;
