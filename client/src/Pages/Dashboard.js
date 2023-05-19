import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import Card from "../Components/Dashboard-card";
import FlowBuilder from "../Components/FlowBuildier";
import { reedem, service, users, revenue } from "../Assets/index";
import ChartComponent from "../Components/Chart";
import { MapPinIcon,ClipboardDocumentIcon,ClockIcon,UserIcon } from '@heroicons/react/24/outline'

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <div
          className={`w-64 h-full ${
            showMenu ? "" : "hidden"
          } lg:block`}>
          <Menubar />
        </div>
        <div className="flex-1 sm:relative bg-gray-100">
          <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
          <div className="h-16 bg-white shadow-md">
            <Navbar pagename={"Dashboard"} />
          </div>
          <div className="flex flex-wrap h-full justify-between mt-10 mx-4 sm:justify-start">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
            <div
            className={`shadow-md rounded-lg p-4 flex flex-col w-64 h-30 bg-gradient-to-r from-[#F57F8C] to-[#F57F8C]`}>
              <div className="mb-2">
                <h3 className="text-3xl text-white font-bold">10</h3>
                <span className="text-sm text-white font-medium">Inspection Location</span>
              </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                  <MapPinIcon color="white" width={40}></MapPinIcon>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
            <div
            className={`shadow-md rounded-lg p-4 flex flex-col w-64 h-30 bg-gradient-to-r from-[#7FD0F5] to-[#7FD0F5]`}>
              <div className="mb-2">
                <h3 className="text-3xl text-white font-bold">200</h3>
                <span className="text-sm text-white font-medium">Valid Inspection</span>
              </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                  <ClipboardDocumentIcon color="white" width={40}></ClipboardDocumentIcon>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 px-2 mb-4">
            <div
            className={`shadow-md rounded-lg p-4 flex flex-col w-64 h-30 bg-gradient-to-r from-[#F5E07F] to-[#F5E07F]`}>
              <div className="mb-2">
                <h3 className="text-3xl text-white font-bold">40</h3>
                <span className="text-sm text-white font-medium">Waiting Approval</span>
              </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                  <ClockIcon color="white" width={40}></ClockIcon>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 px-2 mb-4">
            <div
            className={`shadow-md rounded-lg p-4 flex flex-col w-64 h-30 bg-gradient-to-r from-[#6AF68D] to-[#6AF68D]`}>
              <div className="mb-2">
                <h3 className="text-3xl text-white font-bold">50</h3>
                <span className="text-sm text-white font-medium">User Active</span>
              </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                  <UserIcon color="white" width={40}></UserIcon>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 justify-between w-full px-2 mb-4">
              {/* <ChartComponent
                heading="Total Active Users"
                fields={[
                  {
                    name: "Today's active users",
                    value: 300,
                  },
                  {
                    name: "Yesterday's active users",
                    value: 50,
                  },
                  {
                    name: "Tomorrow's active users",
                    value: 100,
                  },
                  {
                    name: "Last Month's active users",
                    value: 150,
                  },
                ]}
              /> */}

              <div className="bg-white w-full h-[36rem] rounded-lg shadow-md p-6 flex flex-col">
              <div className="text-lg font-bold">Work Flow</div>
              <FlowBuilder></FlowBuilder>
              </div>

              {/* <div className="bg-white w-full h-[36rem] rounded-lg shadow-md p-6 m-2 flex flex-col">
              <ChartComponent
                heading="Total Active bookings"
                fields={[
                  {
                    name: "Today's active bookings",
                    value: 300,
                  },
                  {
                    name: "Yesterday's active bookings",
                    value: 50,
                  },
                  {
                    name: "Tomorrow's active bookings",
                    value: 100,
                  },
                  {
                    name: "Last Month's active bookings",
                    value: 150,
                  },
                ]}
              />
              </div>
               */}
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
