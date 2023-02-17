import React from "react";
import { NavLink } from "react-router-dom";
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
import down from "../../../public/img/downIcon.svg";
import Commission_voice_data from "@/data/Commission-voice-data";
import print from '../../../public/img/print.svg'
import dropdown from '../../../public/img/dropdown.svg'
import useWindowWidth from "@/hooks/useWindowWidth";

export function General() {
  const windowWidth = useWindowWidth();

  return (
    <div className="mt-[30px] w-full bg-[#E8E9EB] font-display">
      <div>
        <div className=" rounded-[34px] bg-white p-6 md:p-12">
          <div className="my-0 flex w-full flex-col sm:flex-row sm:items-center justify-between gap-3 pt-0 pb-5">
            <p className="text-2xl sm:text-3xl font-bold text-black">General Invoice</p>
            <NavLink to="createInvoice">
              <Button className="flex h-[60px] ml-auto p-2 sm:py-3 sm:px-6 flex-row items-center rounded-2xl bg-[#280559]">
                <img className="m-1 w-[20px]" src={plus} alt="..." />
                <p className="m-1 text-sm sm:text-base font-medium normal-case text-white">
                Add New Invoice
                </p>
              </Button>
            </NavLink>
          </div>
          <div className="my-3 flex flex-col lg:flex-row justify-between items-center gap-3 rounded-[20px] bg-[#F8F9FB] p-5">
            <form className="w-full h-full">
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
            <div className="flex justify-center flex-wrap sm:flex-nowrap w-full lg:justify-start lg:w-auto gap-3 h-full">
              <button className="bg-white flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-md border-[#cbd2dc]/50 border-[1px]">
                <img className="w-[20px]" src={filterIcon} alt="..." />
                <p className="mx-3 text-[16px] ">Filters</p>
              </button>

              <Menu>
                <MenuHandler>
                  <button className="bg-white flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-md border-[#cbd2dc]/50 border-[1px]">
                    <img className="w-[20px]" src={down} alt="..." />
                    <p className="mx-3 ">Export</p>
                  </button>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="text-base font-medium text-[#280559] hover:bg-[#F2F4F8] hover:text-[#280559]">Export as .csv</MenuItem>
                  <MenuItem className="text-base font-medium text-[#280559] hover:bg-[#F2F4F8] hover:text-[#280559]">Export as .xlsx</MenuItem>
                </MenuList>
              </Menu>
              <button className="bg-white flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-md border-[#cbd2dc]/50 border-[1px]">
              <img src={print}/>
                <p className="mx-3 ">Print</p>
              </button>
            </div>
          </div>
          <div className={`flex flex-col ${windowWidth ? 'overflow-x-hidden' : 'overflow-x-auto'}`}>
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
                    ID Invoice
                  </th>
                  <th
                    scope="col"
                    className="w-[83px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="w-[346px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Recipient
                  </th>
                  <th
                    scope="col"
                    className="w-[113px] px-6 py-3 text-center text-base font-medium text-[#92929D]"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="w-[78px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Status
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
                {Commission_voice_data.map(({ID, Date, Recipient, Email, Service, Amount, Status, color}) => (
                  <tr key={ID}>
                  <td className="whitespace-nowrap pr-6 py-3">
                      <Checkbox />
                  </td>
                  <td className="whitespace-nowrap py-4 text-lg font-normal text-[#333]">
                    {ID}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-lg font-normal text-[#333]">
                    {Date}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-lg font-medium text-[#333]">
                    {Recipient}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-lg font-normal text-[#333] underline">
                    {Email}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-lg font-normal text-[#333]">
                    {Service}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-lg font-normal text-[#333]">
                    {Amount}
                  </td>
                  <td>
                  <p
                className="mx-auto rounded-2xl px-5 py-2 text-center text-xs font-medium normal-case w-fit"
                style={{
                  color,
                  backgroundColor: `${color}10`,
                }}
              >
                {Status}
              </p>
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
  );
}

export default General;
