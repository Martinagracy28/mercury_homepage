import left_arrow from "../../assets/icons/left_arrow.svg";
import logo1 from "../../assets/images/images/logo.png";
import header_logo from '../../assets/images/HomePage/mercurylogonew.svg';
import "./sidebar.css";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div >
      {/* Sidebar Component */}
      

      {/* Arrow Button */}
      <img
        src={left_arrow}
        alt="toggle sidebar"
        // className={`arrowButton ${
        //   isOpen ? "arrowPositionOpen" : "arrowPositionClose rotate-180"
        // }`}
        className={`arrowButton cursor-pointer fixed z-30 top-[35%] ${
          isOpen ? "arrowPositionOpen" : "arrowPositionClose rotate-180"
        } hidden bigTablet:block`}
        width={35}
        onClick={() => setIsOpen(!isOpen)}
      />
<div 
      // className={`sidebar ${isOpen ? "sidebarOpen" : "sidebarClose"}`}
       className={`fixed top-0 z-20 bg-themeGray-900 border-r border-b border-themeGray-600 sidebar ${
        isOpen ? "sidebarOpen" : "sidebarClose"
      } overflow-hidden rounded-br-md flex-col items-center py-5 justify-between h-[100vh] hidden bigTablet:flex`}>
        <img src={header_logo} alt="logo" width={50} />
        <div className="sidebar-content">
          <p className="font-bold text-3xl sidebar-text">MERCURY</p>
        </div>

        {/* Vertical Line */}
        <div className="vertical-line"></div>
      </div>
      {/* Right-side content */}
      <div className={`content ${isOpen ? "contentShifted" : "contentFullWidth"}`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};
