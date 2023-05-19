import React from "react";
import { demouser } from "../Assets/index";
import { MapPinIcon,PlusCircleIcon } from '@heroicons/react/24/outline'

const Navbar = ({ pagename }) => {
  // const [userInfo, setUserInfo] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5500/api/users").then((response) => {
  //     setUserInfo(response.data.data);
  //     console.log(userInfo);
  //   });
  // }, []);

  return (
    <nav className="bg-[#20a8f1] flex items-center justify-between h-20 px-8 shadow-sm">
      <div className="flex items-center">
        
        <div className="rounded-full w-6 shadow-md bg-white">
        <PlusCircleIcon className="w-6 text-[#20a8f1]"></PlusCircleIcon>
        </div>
        <h1 className="text-lg px-2 font-light text-white">New Form</h1>
        {/* <h1 className="text-lg px-2 font-light text-white">{pagename}</h1> */}
        
      </div>
      <div className="flex items-center">
        <div className="flex flex-col text-sm text-white px-5">
          <span className="font-medium">Welcome, Michael bored</span>
          <div className="flex items-center">
          <MapPinIcon className="w-4 "></MapPinIcon>
          <span className="px-2">Jamaica</span>
          </div>
          
        </div>
        <div className=" shadow-md rounded-full h-10 w-10 bg-gray-200 flex items-center justify-center">
          <img src={demouser} alt="avatar" className="rounded-full h-8 w-8" />
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
