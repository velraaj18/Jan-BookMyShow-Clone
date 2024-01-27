import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function NavLg() {
  return (
    <>
      <div className="container w-full mx-auto justify-between my-5 px-4 flex flex-row  items-center">
        <div className="w-1/2 flex gap-6 items-center ">
          <div className="w-30 h-10">
            <img
              src=" https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full object-cover cursor-pointer "
            />
          </div>
          <div className=" w-full flex gap-1 items-center">
            <CiSearch />
            <input
              type="text"
              placeholder="Search for events movies plays and Activities"
              className="h-10 w-full bg-transparent text-gray-800 focus:outline-none border border-gray-100"
            />
          </div>
        </div>
        <div className="w-1/2 flex gap-6 justify-end items-center">
          <div className="flex gap-2 items-center cursor-pointer">
            <h2 className="text-black font-semibold">Madurai</h2>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="items-center cursor-pointer flex gap-6">
            <button className="text-white font-normal text-sm bg-red-400 px-2 rounded w-16 h-7">
              Sign in
            </button>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </>
  );
}

const NavBar = () => {
  return (
    <>
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </>
  );
};

export default NavBar;
