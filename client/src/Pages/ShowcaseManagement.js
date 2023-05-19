import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../index.css';

const ShowcaseManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const [date, setDate] = useState(new Date());

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
                  <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                  </div>
                  {/* <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                  </p> */}
                  </div>
                </div>
              </div>
          </div>
    </div>
  );
};

export default ShowcaseManagement;
