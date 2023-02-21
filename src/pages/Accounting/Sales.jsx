import React from "react";
import { useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import plus from "../../../public/img/plus.svg";
import filterIcon from "../../../public/img/filterIcon.svg";
import print from "../../../public/img/print.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import Sales_recording_data from "@/data/Sales-recording-data";
import AddField from "../../helpers/AddField";
import { NavLink } from "react-router-dom";
import dropdown from "../../../public/img/dropdown.svg";

export function Sales() {
  /*{ toAdd, setToAdd,  open,close,  setOpenAddModal,  formsData,  setFormsData,  handleFormsDataChange,  section,} */
  // const [openModal, setOpenModal] = useState(false);
  const [salesState, setSalesState] = useState(true);
  const [openSalesAddModal, setOpenSalesAddModal] = useState(false);
  const [SalesNewFields, setSalesNewFields] = useState([]);
  const [allFormsData, setAllFormsData] = useState({});
  const handleAllFormsDataChange = (e) => {
    let { name, value } = e.target;
    setAllFormsData({ ...allFormsData, [name]: value });
  };
  return (
    <>
      <div
        className={`mt-[30px] flex w-full flex-col gap-8 bg-[#E8E9EB] font-display ${
          salesState ? "" : "hidden"
        }`}
      >
        <div>
          <div className=" rounded-[34px] bg-white p-6 md:p-12">
            <div className="my-0 flex w-full flex-col justify-between gap-3 pt-0 pb-5 sm:flex-row sm:items-center">
              <p className="text-2xl font-bold text-black sm:text-3xl">
                Sales recording
              </p>
              <Button
                onClick={() => setSalesState(false)}
                className="ml-auto flex h-[60px] flex-row items-center rounded-2xl bg-[#280559] p-2 sm:py-3 sm:px-6"
              >
                <img className="m-1 w-[20px]" src={plus} alt="..." />
                <p className="m-1 text-sm font-medium normal-case text-white sm:text-base">
                  Add New Sale
                </p>
              </Button>
            </div>
            <div className="my-3 grid grid-cols-1 gap-3 rounded-[20px] bg-[#F8F9FB] p-5 2xl:grid-cols-2">
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
                    className="w-full rounded-[15px] border-[1px] border-[#cbd2dc]/50 bg-white py-3 pt-4 pl-12 pr-4 text-gray-500 shadow-md focus:bg-white"
                  />
                </div>
              </form>
              <div className="grid h-full grid-cols-2 gap-3 md:grid-cols-4">
                <input
                  type="text"
                  className="rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="From Date"
                  required
                />
                <input
                  type="text"
                  className="rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="To Date"
                  required
                />
                <button className="flex items-center justify-center rounded-2xl border-[1px] border-[#cbd2dc]/50 bg-white shadow-md">
                  <img className="w-[20px]" src={filterIcon} alt="..." />
                  <p className="mx-3 text-[16px] ">Apply</p>
                </button>
                <button className="flex h-[57px] flex-row items-center justify-center rounded-2xl border-[1px] border-[#cbd2dc]/50 bg-white shadow-md">
                  <img src={print} />
                  <p className="mx-3 ">Print</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col overflow-x-auto">
              <table className=" w-full border-none">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-[50px] py-3 pr-6 text-left text-base font-medium text-[#92929D]"
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
                  {Sales_recording_data.map(
                    ({
                      date,
                      name,
                      description,
                      salesAmount,
                      salesAmountColor,
                    }) => (
                      <tr key={name}>
                        <td className="whitespace-nowrap py-3 pr-6">
                          <Checkbox />
                        </td>
                        <td className="whitespace-nowrap py-4 text-lg font-normal text-[#333]">
                          {date}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-lg font-medium text-[#333]">
                          {name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-lg font-normal text-[#333]">
                          {description}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-lg font-medium text-[#333]">
                          <span style={{ color: salesAmountColor }}>
                            {salesAmount}
                          </span>
                        </td>
                        <td>
                          <Button
                            variant="outlined"
                            className="mx-auto h-[28px] w-[78px] rounded-[15px] border border-[#280559] p-0 text-[#280559] ease-in hover:bg-[#280559] hover:text-white hover:opacity-100"
                            fullWidth
                          >
                            <p className="text-center text-xs font-medium capitalize">
                              view
                            </p>
                          </Button>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center text-lg font-medium">
                          <button className="rounded-full text-[#636363]/50 hover:text-[#7a7a7a]">
                            <svg
                              className="h-8 w-8 fill-current"
                              viewBox="0 0 32 32"
                            >
                              <circle cx="16" cy="10" r="2" />
                              <circle cx="16" cy="16" r="2" />
                              <circle cx="16" cy="22" r="2" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            {/* Anasite - Edits: Pagination Removed (No Need) 
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
          </div> */}
          </div>
        </div>
      </div>

      {/* ----------------------------------------- */}

      <div
        className={`mt-[30px] flex w-full flex-col gap-8 bg-[#E8E9EB] font-display ${
          salesState ? "hidden" : ""
        }`}
      >
        <div className="my-5">
          <p className=" mb-2 text-4xl font-semibold text-[#280559]">
            Create Sales
          </p>
          <p className=" font text-base text-[#9898A3]">
            Create or edit program
          </p>
        </div>
        <div className="rounded-[34px] bg-white p-[39px]">
          <p className="mb-8 text-2xl font-semibold text-[#333333]">
            Sale Details
          </p>
          <form>
            <div className="mt-4 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Name of Sale
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Sale Name"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Description
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Small Description"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-0 top-0 flex h-full items-center rounded-xl bg-[#E5E8ED] p-3 text-base font-medium uppercase text-[#333]">
                    usd:
                  </span>
                  <input
                    type="text"
                    className="block h-full w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 pl-16 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Date
                </label>
                <input
                  type="date"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              {/* <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Add Field
                </label>
                <button
                  onClick={() => setOpenModal(true)}
                  type="button"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
                >
                  Click to add more field
                </button>
                <AddField open={openModal} close={() => setOpenModal(false)} />
              </div> */}
              <AddField
                open={openSalesAddModal}
                close={() => setOpenSalesAddModal(false)}
                toAdd={SalesNewFields}
                setOpenAddModal={setOpenSalesAddModal}
                setToAdd={setSalesNewFields}
                formsData={allFormsData}
                setFormsData={setAllFormsData}
                handleFormsDataChange={handleAllFormsDataChange}
                section={"Accounting-Sales"}
              />
            </div>
          </form>
        </div>
        <NavLink>
          <Button
            onClick={() => setSalesState(true)}
            className="rounded-[15px]  bg-[#280559]"
          >
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

export default Sales;
