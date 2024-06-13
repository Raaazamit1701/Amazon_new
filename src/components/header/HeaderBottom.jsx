
// import React, { useEffect, useRef, useState } from 'react';
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SideNav from './SideNav';
// import {motion} from "framer-motion";

// const HeaderBottom = () => {
//   const ref=useRef();
//   const [sidebar, setSidebar] = useState(false);
//   useEffect(()=>{
//       document.body.addEventListener("click",(e)=>{
//           if(e.target.contains(ref.current)){
//             setSidebar(false)
//           }
//       })
//   },[ref,sidebar])

//   return (
//     <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
//       <ul className='flex items-center gap-2 text-sm tracking-wide'>
//         <li className='headerHover' onClick={() => setSidebar(true)}>
//           <MenuIcon /> All
//         </li>
//         <li className='headerHover flex items-center gap-1 hidden md:inline-flex'>
//           Today's Deals
//         </li>
//         <li className='headerHover hidden md:inline-flex'>
//           Customer Service
//         </li>
//         <li className='headerHover hidden md:inline-flex'>
//           Gift Cards
//         </li>
//         <li className='headerHover hidden md:inline-flex'>
//           Registry
//         </li>
//         <li className='headerHover hidden md:inline-flex'>
//           Sell
//         </li>
//       </ul>
//       {sidebar && (
//         <div className='fixed inset-0 z-50 flex'>
//           <div className='fixed inset-0 bg-black opacity-50' onClick={() => setSidebar(false)}></div>
//           <motion.div ref={ref} initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: .5}} className='relative w-[-80%] md:w-[350px] h-full bg-white shadow-lg'>
//             <div className='p-4'>
//               <div className='w-full bg-amazon_light py-2 px-6 flex items-center gap-4'>
//                 <AccountCircleIcon />
//                 <h3 className='font-titleFont font-bold text-lg tracking-wide text-white'>Hello, Sign in</h3>
//               </div>
//               <SideNav title="Digital Content & Devices" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Appstore" />
//               <SideNav title="Shop By Department" one="Electronics" two="Computers" three="Smart Home" />
//               <SideNav title="Programs & Features" one="Gift Cards" two="Amazon live" three="International Shopping" />
//               <SideNav title="Help & Settings" one="Your Account" two="Customer Service" three="Contact us" />
//             </div>
//             <span className='cursor-pointer absolute top-0 left-[105%] md:left-[360px] w-10 h-10 text-black flex 
//              items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300
//             ' onClick={() => setSidebar(!sidebar)}><CloseIcon /></span>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HeaderBottom;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNav";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* ======================= List Items Start here ======================== */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="flex items-center gap-1 headerHover"
        >
          <MenuIcon />
          All
        </li>
        <li className="hidden md:inline-flex headerHover">Today's Deals</li>
        <li className="hidden md:inline-flex headerHover">Customer Service</li>
        <li className="hidden md:inline-flex headerHover">Gift Cards</li>
        <li className="hidden md:inline-flex headerHover">Registry</li>
        <li className="hidden md:inline-flex headerHover">Sell</li>
      </ul>
      {/* ======================= List Items End here ========================== */}
      {/* ======================= SideBar Start here =========================== */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[290px] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {userInfo ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={userInfo.image}
                    alt="UserImg"
                  />
                ) : (
                  <AccountCircleIcon />
                )}
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                {userInfo ? (
                            <p className='text-sm mdl:text-xs text-gray-100 mdl:text-lightText font-medium'>Hello, {userInfo.userName}</p>
                        ) : (
                            <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, sign in</p>
                        )}
                </h3>
              </div>
              {/* ============================ Content & Devices Start here ================ */}
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              {/* ============================ Content & Devices End here ================ */}
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[300px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* ======================= SideBar End here ============================= */}
      {/* ============ ListItems Start here ============ */}
      {/* ============ ListItems End here ============== */}
      {/* ============ sideNav Start here ============== */}
      {/* ============ sideNav End here ================ */}
    </div>
  );
};

export default HeaderBottom;