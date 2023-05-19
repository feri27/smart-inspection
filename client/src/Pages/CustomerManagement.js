import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const CustomerManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
        <div
          className={`w-64 h-full ${
            showMenu ? "" : "hidden"
          } lg:block`}>
          <Menubar />
        </div>
          <div className="flex-1 h-full sm:relative bg-gray-100">
            <Navbar pagename={"User Management"} />
            <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
              <div className="flex flex-wrap h-full justify-between mt-10 mx-4 sm:justify-start">
                <div className="flex flex-col sm:flex-row gap-1 justify-between w-full px-2 mb-4">
                  <div className=" bg-white w-full h-full rounded-md shadow-md p-6 flex flex-col">
                  
                  </div>
                </div>
              </div>
          </div>
    </div>
  );
};

export default CustomerManagement;
