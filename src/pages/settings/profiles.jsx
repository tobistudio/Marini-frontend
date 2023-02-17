import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react/components/Button";
import universityLogo from "../../../public/img/universityLogo.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";

export function Profiles() {
  const handleChange = (file) => {
    setFile(file);
  };
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  return (
    <div className="w-full bg-[#E8E9EB] font-display">
      <div className="mb-10">
        <div className="flex justify-between items-center">
        <p className=" text-4xl font-semibold text-[#280559]">
        Profile
        </p>
        <div className="hidden md:block">
        <NavLink to="">
          <Button className="flex h-[60px] ml-auto p-2 sm:py-3 sm:px-6 flex-row items-center rounded-2xl bg-[#280559]">
            <div className="flex items-center justify-center">
              <img src={saveIcon} alt="..." />
              <p className="px-[11px] text-base font-medium normal-case text-white p-1">
                Save Changes
              </p>
            </div>
          </Button>
        </NavLink>
        </div>
        </div>
        <p className=" font text-base text-[#9898A3]">
        Manage Profile
        </p>
        <div className="block md:hidden w-full ml-auto mt-6">
        <NavLink to="">
          <Button className="flex h-[60px] ml-auto p-2 sm:py-3 sm:px-6 flex-row items-center rounded-2xl bg-[#280559]">
            <div className="flex items-center justify-center">
              <img src={saveIcon} alt="..." />
              <p className="px-[11px] text-base font-medium normal-case text-white p-1">
                Save Changes
              </p>
            </div>
          </Button>
        </NavLink>
        </div>
      </div>
      <div className="rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">
        Personal Details
        </p>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
          <p className="mr-[70px] text-base font-semibold text-[#333333]">
          Photo
          </p>
          <div className="flex flex-col items-center justify-center">
            <img
              className="mb-3 rounded-2xl"
              src={universityLogo}
              alt="..."
            />
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <button className="w-[150px] ">
                <p className="rounded-2xl py-3 text-sm font-medium border-[1px] border-[#cbd2dc]/50 shadow-md text-[#333333]">
                  Upload Logo
                </p>
              </button>
            </FileUploader>
          </div>
        </div>
        <form>
    <div className="grid gap-6 mt-12 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Full Name</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Full Name" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Passport No</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="0123 456 789" required/>
        </div>
        <div>
        <label className="block mb-2 text-sm font-semibold text-[#333333]">Lead Group</label>
        <select className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Select Group</option>
        </select>
    </div>
        <div>
        <label className="block mb-2 text-sm font-semibold text-[#333333]">Nationality/Country</label>
        <select className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Select Country</option>
        </select>
    </div> 
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Phone Number</label>
            <input type="tel" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+91 123 456 789" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Email Address</label>
            <input type="email" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@email.com" required/>
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold text-[#333333]">Add Field</label>
          <button type="button" className="text-[#BEBFC3] bg-[#F8F9FB] rounded-xl border-2 border-[#CBD2DC80] font-medium block w-full p-2.5">Click to add more field</button>
        </div>
    </div>
</form>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">
          Password
        </p>
        <form>
    <div className="grid gap-6 mt-12 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">New Password</label>
            <input type="password" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="***********" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Confirm Password</label>
            <input type="password" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="***********" required/>
        </div>
    </div>
</form>
      </div>
      
      <NavLink to="">
          <Button className="rounded-[15px]  bg-[#280559]">
            <div className="flex flex-row items-center justify-center">
              <img src={saveIcon} alt="..." />
              <p className="px-[11px] text-base font-medium normal-case text-white p-1">
                Save Changes
              </p>
            </div>
          </Button>
        </NavLink>
    </div>
  );
}

export default Profiles;

