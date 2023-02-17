import download from "../../../public/img/download02.svg";
import { applicantData } from "@/data/applicant-data";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuHandler,  MenuList, MenuItem, Checkbox } from "@material-tailwind/react";
import plus from "../../../public/img/plus.svg";
import filterIcon from "../../../public/img/filterIcon.svg";
import down from "../../../public/img/downIcon.svg";
import dropdown from '../../../public/img/dropdown.svg'


const ApplicantHome = () => (
    <div className="mt-12 w-full pr-8 font-display">
      <div className="my-10 grid grid-cols-1">
        <p className=" text-4xl font-semibold text-[#280559] mb-2">Dashboard</p>
        <p className=" font text-sm  text-[#9898A3] xl:text-base">
          View all status from the dashboard
        </p>
      </div>
      <div className="mt-[30px] w-full bg-[#E8E9EB] font-display">
        <div className="rounded-[34px] bg-white p-6 md:p-12 flex flex-col gap-10 lg:flex-row lg:gap-24">
        <div className="relative w-[200px] h-[200px] mx-auto">
            <p className="font-semibold text-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">73%</p>
            <div className="w-full h-full">
            <svg className="w-full h-full transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
              <circle
                className="text-gray-300"
                strokeWidth="20"
                stroke="currentColor"
                fill="transparent"
                r="90"
                cx="100"
                cy="100"
                />
              <circle
                className="text-blue-600"
                strokeWidth="20"
                strokeLinecap="round"
                stroke="currentColor"
                strokeDasharray={450}
                strokeDashoffset={70}
                fill="transparent"
                r="90"
                cx="100"
                cy="100"
               />
            </svg>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <h2 className="text-black font-semibold text-3xl">Summary</h2>
            <hr className="my-4"/>
            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2 2xl:gap-24 mb-6">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <p>Full Name:</p>
                  <p className="font-semibold text-sm">Esther Eden</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p>Travel Document Number:</p>
                  <p className="font-semibold text-sm">S321545987</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p>Application Number:</p>
                  <p className="font-semibold text-sm">345695825</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p>Application Type:</p>
                  <p className="font-semibold text-sm">New</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p>Application Status:</p>
                  <p className="font-semibold text-sm">In Progress with EMGS</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                    <p>EMGS Approval Letter:</p>
                    <div>
                    <button className="rounded-lg bg-[#280559] flex w-[115px] items-center justify-center">
                      <img className="w-[15px] h-[15px]" src={download} alt="..." />
                      <p className="p-2 text-xs text-white">Download</p>
                    </button>
                    </div>
                  </div>
                <div className="flex items-center justify-between gap-4">
                    <p>eVAL:</p>
                    <div>
                    <button className="rounded-lg bg-[#280559] flex w-[115px] items-center justify-center">
                      <img className="w-[15px] h-[15px]" src={download} alt="..." />
                      <p className="p-2 text-xs text-white">Download</p>
                    </button>
                    </div>
                  </div>
                <div className="flex items-center justify-between gap-4">
                    <p>Arrival Guide to Malaysia:</p>
                    <div>
                    <button className="rounded-lg bg-[#280559] flex w-[115px] items-center justify-center">
                      <img className="w-[15px] h-[15px]" src={download} alt="..." />
                      <p className="p-2 text-xs text-white">Download</p>
                    </button>
                    </div>
                  </div>
              </div>
            </div>
            <p className="mb-8">As per the announcement from the Malaysian Government on the transition to the endemic phase on 1 April 2022, the Travel Authorisation Letter is no longer part of the requirements for international Students to enter Malaysia.</p>
            <div className="bg-[#FFB93E] rounded-2xl py-5 px-8"><span className="font-bold">Important:</span> Kindly read the explanation below to understand the percentage.</div>
        </div>
    </div>
</div>
<div className="mt-[30px] w-full bg-[#E8E9EB] font-display">
        <div className="rounded-[34px] bg-white p-6 md:p-12 flex gap-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="font-semibold text-3xl mb-10">What does the color mean?</p>
              <div className="flex gap-6">
                <div className="h-[175px] rounded-2xl bg-[#0066FF] px-5 flex justify-center items-center font-semibold text-white text-xl">73%</div>
                <div className="flex flex-col justify-between">
                  <p>EMGS Has Received your passport</p>
                  <p>We will now submit it to the Immigration Department for the issuance of student pass sticker</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-3xl mb-10">Color Info</p>
              <div className="flex flex-col gap-5">
                <div className="flex gap-7 items-center">
                <div>
                <svg className="w-10 h-10 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
              <circle
                className="text-gray-300"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="18"
                cx="20"
                cy="20"
                />
              <circle
                className="text-[#449E3C]"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                strokeDasharray={140}
                strokeDashoffset={70}
                fill="transparent"
                r="18"
                cx="20"
                cy="20"
               />
            </svg>
            </div>
              <p>Your application is progressing accordingly.</p>
                </div>
                <div className="flex gap-7 items-center">
                <div>
                <svg className="w-10 h-10 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
              <circle
                className="text-gray-300"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="18"
                cx="20"
                cy="20"
                />
              <circle
                className="text-[#FFB93E]"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                strokeDasharray={140}
                strokeDashoffset={70}
                fill="transparent"
                r="18"
                cx="20"
                cy="20"
               />
            </svg>
            </div>
              <p>Your application is pending additional documents or correction by your
institution.</p>
                </div>
                <div className="flex gap-7 items-center">
                <div>
                <svg className="w-10 h-10 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
              <circle
                className="text-gray-300"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="18"
                cx="20"
                cy="20"
                />
              <circle
                className="text-[#DB0D4B]"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                strokeDasharray={140}
                strokeDashoffset={70}
                fill="transparent"
                r="18"
                cx="20"
                cy="20"
               />
            </svg>
            </div>
              <p>Your application has been rejected/expired at the current stage. Please
contact your institution for advice.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-[30px] w-full bg-[#E8E9EB] font-display">
      <div>
        <div className=" rounded-[34px] bg-white p-6 md:p-12">
          <div className="my-0 flex w-full flex-col sm:flex-row sm:items-center justify-between gap-3 pt-0 pb-5">
            <p className="text-2xl sm:text-3xl font-bold text-black">Your Applications </p>
            <NavLink to="">
              <Button className="flex h-[60px] ml-auto p-2 sm:py-3 sm:px-6 flex-row items-center rounded-2xl bg-[#280559]">
                <img className="m-1 w-[20px]" src={plus} alt="..." />
                <p className="m-1 text-sm sm:text-base font-medium normal-case text-white">
                Apply New
                </p>
              </Button>
            </NavLink>
          </div>
          <div className="my-3 flex flex-col md:flex-row justify-between items-center gap-3 rounded-[20px] bg-[#F8F9FB] p-5">
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
            <div className="flex justify-between w-full md:justify-start md:w-auto gap-3 h-full">
              <button className="bg-white flex w-[135px] flex-row items-center justify-center rounded-2xl shadow-md border-[#cbd2dc]/50 border-[1px]">
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
                    className="w-[100px] py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="w-[200px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="w-[350px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Remark
                  </th>
                  <th
                    scope="col"
                    className="w-[78px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="w-[78px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                  >
                    Option
                  </th>
                </tr>
              </thead>
              <tbody className="border-none">
                {applicantData.map(({date, status, remark}, i) => (
                  <tr key={`${date}-${i}`}>
                  <td className="whitespace-nowrap pr-6 py-3">
                      <Checkbox />
                  </td>
                  <td className="whitespace-nowrap py-4 text-lg font-normal text-[#333]">
                    {date}
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-[#333]">
                    {status}
                  </td>
                  <td className="px-6 py-4 text-lg font-normal text-[#333]">
                    {remark}
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
                    <button className="bg-white flex h-[40px] w-[77px] items-center justify-center rounded-2xl shadow-md border-[#cbd2dc]/50 border-[1px]">
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
</div>
)

export default ApplicantHome;