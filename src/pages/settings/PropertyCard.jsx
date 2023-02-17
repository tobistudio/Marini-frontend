import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react/components/Button";
import plus from "../../../public/img/plus.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import StatusData from "@/data/status-props";
import { NavLink,Link } from "react-router-dom";
import axios from "axios";
import { ENV } from "../../config";
import { toast } from "react-toastify";
import AddProperty from "./AddProperty";

export function PropertyCard({title,type=0}) {
  const [statusstate, setStatusstate] = useState(true);
  const [property, setProperty] = useState("");
//   const [type, setType] = useState(0);
  const [loading, setIsLoading] = useState(false);

  return (
    <>
      {/* Leads Managemente Modulueee */}
      <div className="mt-8 rounded-[34px] bg-white p-6 md:p-12">
        <div className="my-0 flex w-full flex-col justify-between gap-3 pt-0 pb-5 sm:flex-row sm:items-center">
          <p className=" text-2xl font-semibold text-black">
            {title}
          </p>
          <Button
            onClick={() => {
              setStatusstate(false);
            //   setType(2);
            }}
            className="ml-auto flex h-[60px] flex-row items-center rounded-2xl bg-[#280559] p-2 sm:py-3 sm:px-6"
          >
            <img className="m-1 w-[20px]" src={plus} alt="..." />
            <Link className="m-1 text-sm font-medium normal-case text-white sm:text-base" to={`/dashboard/settingsManagement/property/1/${type}`}>
              Add New Status
            </Link>
          </Button>
        </div>
        <div className="rounded-[34px] bg-white">
          <div className="grid grid-cols-1 rounded-[20px] xl:grid-cols-2">
            <div className="flex flex-col overflow-x-auto">
              <table className="w-full border-none">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-[125px] whitespace-nowrap py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Status Name
                    </th>
                    <th scope="col" className="w-full px-6 py-3" />
                    <th
                      scope="col"
                      className="w-[75px] py-3 text-center text-base font-medium text-[#92929D]"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="w-[50px] py-3 text-center text-base font-medium text-[#92929D]"
                    >
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody className="border-none">
                  {StatusData.Lead_Management_Module.statusNames.map((name) => (
                    <tr key={name}>
                      <td
                        className={`whitespace-nowrap py-4 text-lg font-semibold text-[#333]`}
                      >
                        {name}
                      </td>
                      <td className="px-6 py-4" />
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyCard;
