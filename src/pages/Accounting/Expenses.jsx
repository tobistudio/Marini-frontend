import React from "react";
import { useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox
} from "@material-tailwind/react";
import plus from "../../../public/img/plus.svg";
import filterIcon from "../../../public/img/filterIcon.svg";
import print from "../../../public/img/print.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import Sales_recording_data from "@/data/Sales-recording-data";
import AddField from "./AddField";
import { NavLink } from "react-router-dom";
import dropdown from '../../../public/img/dropdown.svg'


export function Expenses() {
    const [expstate, setExpstate]=useState(true);
    const [openModal, setOpenModal] = useState(false);
    
  return (
    <>
      <div
        className={`mt-[30px] flex w-full flex-col gap-8 bg-[#E8E9EB] ${
            expstate ? "" : "hidden"
        }`}
      >
        <div>
        <div className=" rounded-[34px] bg-white p-6 md:p-12">
          <div className="my-0 flex w-full flex-col sm:flex-row sm:items-center justify-between gap-3 pt-0 pb-5">
            <p className="text-2xl sm:text-3xl font-bold text-black">Expenses</p>
              <Button onClick={() => setExpstate(false)} className="flex h-[60px] ml-auto p-2 sm:py-3 sm:px-6 flex-row items-center rounded-2xl bg-[#280559]">
                <img className="m-1 w-[20px]" src={plus} alt="..." />
                <p className="m-1 text-sm sm:text-base font-medium normal-case text-white">
                Add New Expenses
                </p>
              </Button>
          </div>
          <div className="my-3 grid grid-cols-1 2xl:grid-cols-2 gap-3 rounded-[20px] bg-[#F8F9FB] p-5">
            <form className="h-full">
              <div className="relative h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 left-3 my-auto h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-[15px] shadow-md border-[#cbd2dc]/50 border-[1px] bg-white py-3 pt-4 pl-12 pr-4 text-gray-500 focus:bg-white"
                />
              </div>
            </form>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-full">
          <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500" placeholder="From Date" required/>
          <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500" placeholder="To Date" required/>
          <button className="bg-white flex items-center justify-center rounded-2xl shadow-md border-[#cbd2dc]/50 border-[1px]">
                <img className="w-[20px]" src={filterIcon} alt="..." />
                <p className="mx-3 text-[16px] ">Apply</p>
              </button>
              <button className="bg-white flex h-[57px] flex-row items-center justify-center rounded-2xl shadow-md border-[#cbd2dc]/50 border-[1px]">
              <img src={print}/>
                <p className="mx-3">Print</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-x-auto">
            <table className=" w-full border-none">
              <thead>
              <tr>
                  <th
                    scope="col"
                    className="w-[50px] pr-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    <Checkbox />
                    </th>
                  <th
                    scope="col"
                    className="w-[200px] py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="w-[83px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-[346px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="w-[113px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Option
                  </th>
                </tr>
              </thead>
              <tbody className="border-none">
                {Sales_recording_data.map(({date, name, description, costAmount, costAmountColor}) => (
                  <tr key={name}>
                  <td className="whitespace-nowrap pr-6 py-3">
                      <Checkbox />
                  </td>
                  <td className="whitespace-nowrap py-4 text-lg font-normal text-[#333]">
                    {date}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-lg font-semibold text-[#333]">
                    {name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-lg font-normal text-[#333]">
                    {description}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-lg font-semibold text-[#333]">
                    <span style={{color: costAmountColor}}>{costAmount}</span>
                  </td>
                  <td>
                      <Button
                        variant="outlined"
                        className="h-[28px] w-[78px] mx-auto rounded-[15px] border text-[#280559] border-[#280559] p-0 hover:bg-[#280559] hover:text-white hover:opacity-100 ease-in"
                        fullWidth
                      >
                        <p className="text-center text-xs font-medium capitalize">
                          view
                        </p>
                      </Button>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-lg font-medium">
                    <button className="text-[#636363]/50 hover:text-[#7a7a7a] rounded-full">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <circle cx="16" cy="10" r="2"/>
                          <circle cx="16" cy="16" r="2"/>
                          <circle cx="16" cy="22" r="2"/>
                          </svg>
                        </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-0 items-center justify-between rounded-[20px] bg-[#F8F9FB] py-4 px-6">
            <p className="px-5 text-base text-[#92929D]">
              <span className="text-[#280559]">1</span>-5 of 56
            </p>
            <div className="flex flex-row items-center justify-center">
              <p className="mr-3 text-base text-[#92929D]">
                The page you’re on
              </p>
              <div className=" mr-2 w-[77px]">
                <Menu>
                  <MenuHandler>
                    <button className="bg-white flex h-[40px] w-[77px] flex-row items-center justify-center rounded-2xl shadow-md border-[#cbd2dc]/50 border-[1px]">
                      <p className="mx-3 text-[#280559] font-medium">1</p>
                      <img src={dropdown}/>
                    </button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5</MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <button className="mr-2 flex h-10 w-10 items-center justify-center rounded-xl shadow-md border-[#cbd2dc]/50 border-[1px]">
              <svg width={24} height={24} stroke="#280559" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl shadow-md border-[#cbd2dc]/50 border-[1px]">
              <svg width={24} height={24} stroke="#280559" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* ----------------------------------------- */}

      <div
        className={`mt-[30px] flex w-full flex-col gap-8 bg-[#E8E9EB] font-display ${
            expstate ? "hidden" : ""
        }`}
      >
      <div className="my-5">
        <p className=" text-4xl font-semibold text-[#280559] mb-2">Create Expenses</p>
        <p className=" font text-base text-[#9898A3]">
        Create or edit Expenses
        </p>
        
      </div>
      <div className="rounded-[34px] bg-white p-[39px]">
        <p className="mb-8 text-2xl font-semibold text-[#333333]">
        Expenses Details
        </p>
        <form>
    <div className="grid gap-6 mt-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Expenses Name</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Expenses Name" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Description</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Small Description" required/>
        </div>
    <div>
        <label className="block mb-2 text-sm font-semibold text-[#333333]">Amount</label>
        <div className="relative">
    <span className="absolute flex items-center p-3 left-0 top-0 h-full text-base font-medium text-[#333] bg-[#E5E8ED] rounded-xl uppercase">usd:</span>
    <input type="text" className="pl-16 placeholder:text-[#BEBFC3] h-full rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="0.00" required/>
</div>
        </div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-[#333333]">Date</label>
            <input type="text" className="placeholder:text-[#BEBFC3] rounded-xl bg-white border-2 border-[#CBD2DC80] p-2.5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="DD/MM/YYYY" required/>
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold text-[#333333]">Add Field</label>
          <button onClick={() => setOpenModal(true)} type="button" className="text-[#BEBFC3] bg-[#F8F9FB] rounded-xl border-2 border-[#CBD2DC80] font-medium block w-full p-2.5">Click to add more field</button>
          <AddField open={openModal} close={() => setOpenModal(false)} />
        </div>
    </div>
</form>
      </div>
      <NavLink>
        <Button onClick={() => setCostState(true)} className="rounded-[15px]  bg-[#280559]">
          <div className="flex flex-row items-center justify-center px-[33px] py-[10px]">
            <img src={saveIcon} alt="..." />
            <p className="px-[11px] text-base font-medium normal-case text-white ">
              Save Changes
            </p>
          </div>
        </Button>
        </NavLink>
    </div>
    
    </>
  );
}

export default Expenses;
