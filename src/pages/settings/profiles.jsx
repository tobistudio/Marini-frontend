import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react/components/Button";
import universityLogo from "../../../public/img/universityLogo.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import AddField from "@/helpers/Addfield";
import NewForm from "../../helpers/newform";

export function Profiles() {
  // let [personalDataNewFields, setPersonalDataNewFields] = useState([]);
  // const [openAddModal, setOpenAddModal] = useState(false);

  /*{ toAdd, setToAdd,  open,close,  setOpenAddModal,  formsData,  setFormsData,  handleFormsDataChange,  section,} */
  // const [openModal, setOpenModal] = useState(false);
  const [ProfileState, setProfileState] = useState(true);
  const [openProfileAddModal, setOpenProfileAddModal] = useState(false);
  const [ProfileNewFields, setProfileNewFields] = useState([]);
  const [allFormsData, setAllFormsData] = useState({});
  const handleAllFormsDataChange = (e) => {
    let { name, value } = e.target;
    setAllFormsData({ ...allFormsData, [name]: value });
  };
  // End

  const handleChange = (file) => {
    setFile(file);
  };
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  return (
    <div className="w-full bg-[#E8E9EB] font-display">
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <p className=" text-4xl font-semibold text-[#280559]">Profile</p>
          <div className="hidden md:block">
            <NavLink to="">
              <Button className="ml-auto flex h-[60px] flex-row items-center rounded-2xl bg-[#280559] p-2 sm:py-3 sm:px-6">
                <div className="flex items-center justify-center">
                  <img src={saveIcon} alt="..." />
                  <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                    Save Changes
                  </p>
                </div>
              </Button>
            </NavLink>
          </div>
        </div>
        <p className=" font text-base text-[#9898A3]">Manage Profile</p>
        <div className="ml-auto mt-6 block w-full md:hidden">
          <NavLink to="">
            <Button className="ml-auto flex h-[60px] flex-row items-center rounded-2xl bg-[#280559] p-2 sm:py-3 sm:px-6">
              <div className="flex items-center justify-center">
                <img src={saveIcon} alt="..." />
                <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
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
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
          <p className="mr-[70px] text-base font-semibold text-[#333333]">
            Photo
          </p>
          <div className="flex flex-col items-center justify-center">
            <img className="mb-3 rounded-2xl" src={universityLogo} alt="..." />
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <button className="w-[150px] ">
                <p className="rounded-2xl border-[1px] border-[#cbd2dc]/50 py-3 text-sm font-medium text-[#333333] shadow-md">
                  Upload Logo
                </p>
              </button>
            </FileUploader>
          </div>
        </div>
        <form>
          <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Full Name
              </label>
              <input
                type="text"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Passport No
              </label>
              <input
                type="text"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="0123 456 789"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Lead Group
              </label>
              <select
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                value={""}
                onChange={() => {}}
              >
                <option>Select Group</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Nationality/Country
              </label>
              <select
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                value={""}
                onChange={() => {}}
              >
                <option>Select Country</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Phone Number
              </label>
              <input
                type="tel"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="+91 123 456 789"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Email Address
              </label>
              <input
                type="email"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="example@email.com"
                required
              />
            </div>
            {/* {personalDataNewFields.map()} */}

            <AddField
              open={openProfileAddModal}
              close={() => setOpenProfileAddModal(false)}
              toAdd={ProfileNewFields}
              setOpenAddModal={setOpenProfileAddModal}
              setToAdd={setProfileNewFields}
              formsData={allFormsData}
              setFormsData={setAllFormsData}
              handleFormsDataChange={handleAllFormsDataChange}
              section={"Settings-Profile"}
            />
          </div>
        </form>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">Password</p>
        <form>
          <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                New Password
              </label>
              <input
                type="password"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="***********"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333333]">
                Confirm Password
              </label>
              <input
                type="password"
                className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="***********"
                required
              />
            </div>
          </div>
        </form>
      </div>

      <NavLink to="">
        <Button className="rounded-[15px]  bg-[#280559]">
          <div className="flex flex-row items-center justify-center">
            <img src={saveIcon} alt="..." />
            <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
              Save Changes
            </p>
          </div>
        </Button>
      </NavLink>
    </div>
  );
}

export default Profiles;
