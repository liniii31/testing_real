import "./PropertyView.css";
import SideNavBar from "../sidenavbar/SideNavBar";
import Header from "../headerpage/Header";

const PropertyView = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="sidenav">
          <SideNavBar />
        </div>

        <div className="subpart">
          <div className="headerpart">
            <Header />
          </div>

          
        </div>
      </div>
    </>
  );
};
export default PropertyView;
