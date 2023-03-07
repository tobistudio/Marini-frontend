import React, { useState, useEffect } from "react";
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
import saveIcon from "../../../public/img/saveIcon.svg";
import BranchProps from "@/data/branch-props";
import AddField from "@/helpers/Addfield";
import { NavLink } from "react-router-dom";
import dropdown from "../../../public/img/dropdown.svg";
import { useSelector, useDispatch } from "react-redux";
import { listBranches } from "@/redux/actions/actions";
import { viewBranch } from "@/redux/actions/actions";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FullPageLoader from "@/FullPageLoader/FullPageLoader";
import { ENV } from "@/config";
// import { Toast } from "react-toastify/dist/types";
import { toast } from "react-toastify";
import Paginate from "@/paginate";

export function Branch() {
  const [branchstate, setBranchstate] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [isViewMode, setIsViewMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  /*{ toAdd, setToAdd,  open,close,  setOpenAddModal,  formsData,  setFormsData,  handleFormsDataChange,  section,} */
  // const [openModal, setOpenModal] = useState(false);
  const [BranchState, setBranchState] = useState(true);
  const [openBranchAddModal, setOpenBranchAddModal] = useState(false);
  const [BranchNewFields, setBranchNewFields] = useState([]);
  // const [allFormsData, setAllFormsData] = useState({});
  // const handleAllFormsDataChange = (e) => {
  //   let { name, value } = e.target;
  //   setAllFormsData({ ...allFormsData, [name]: value });
  // };
  // End
  const branchDate = useSelector((state) => state?.universitiesReducer?.branch);

  const pagination = useSelector(
    (state) => state?.universitiesReducer?.branch?.data?.pagination
  );

  console.log("branch data branch module", branchDate);
  // viewBranch

  const viewBranches = useSelector(
    (state) => state?.universitiesReducer?.viewBranch
  );
  console.log("view branch data in branch module", viewBranches);

  const initialValues = {
    name: "",
    email: "",
    address: "",
    phone: "",
    country: "",
    manager: "",
    // phone: ""
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("formValues ===>", formValues);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("handle submit function");
    setIsLoading(true);
    const id = params.id;
    const { name, email, address, phone, country, manager } = formValues;
    let payload = {
      name,
      email,
      address,
      phone,
      country,
      manager,
      id,
      Uname: localStorage.name, role: localStorage.access
    };

    const apiCall = await axios[params.action == 2 ? "put" : "post"](
      `${ENV.baseUrl}/branch/${params.action == 2 ? "edit" : "create"}`,
      payload
    );
    console.log("apiCall");

    setIsLoading(false);
    if (apiCall.data?.success) {
      let { message } = apiCall.data;
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    dispatch(listBranches());
  }, []);

  // useEffect(() => {
  //   dispatch(viewBranch(params.id));
  // }, [params.id]);

  useEffect(() => {
    if (viewBranches?.branch) setFormValues(viewBranches?.branch);
  }, [viewBranches.branch]);
  useEffect(() => {
    if (params.id) dispatch(viewBranch(params.id));

    if (params.action == 1) {
      // dispatch(viewCurrency(params.id));
      setBranchstate(false);
      setIsViewMode(true);
    } else if (params.action == 2) {
      setBranchstate(false);
      setIsViewMode(false);
    } else {
      setBranchstate(true);
      setIsViewMode(false);
      setFormValues("");
    }
  }, [params.id, params.action]);

  const countryArr = ["pakistan", "India", "China"];

  return (
    <>
      {isLoading && <FullPageLoader />}
      <div
        className={` flex w-full flex-col gap-8 bg-[#E8E9EB] font-display ${
          branchstate ? "" : "hidden"
        }`}
      >
        <div className="mb-12">
          <div className="mb-10">
            <div className="flex items-center justify-between">
              <p className=" text-4xl font-semibold text-[#280559]">Branch</p>
              <div className="hidden md:block">
                <NavLink to="">
                  <Button
                    onClick={() => setBranchstate(false)}
                    className="ml-auto flex h-[60px] flex-row items-center rounded-2xl bg-[#280559] p-2 sm:py-3 sm:px-6"
                  >
                    <img className="m-1 w-[20px]" src={plus} alt="..." />
                    <p className="m-1 text-sm font-medium normal-case text-white sm:text-base">
                      Add New Branch
                    </p>
                  </Button>
                </NavLink>
              </div>
            </div>
            <p className=" font text-base text-[#9898A3]">Manage Branch</p>
            <div className="ml-auto mt-6 block w-full md:hidden">
              <NavLink to="">
                <Button
                  onClick={() => setBranchstate(false)}
                  className="ml-auto flex h-[60px] flex-row items-center rounded-2xl bg-[#280559] p-2 sm:py-3 sm:px-6"
                >
                  <img className="m-1 w-[20px]" src={plus} alt="..." />
                  <p className="m-1 text-sm font-medium normal-case text-white sm:text-base">
                    Add New Branch
                  </p>
                </Button>
              </NavLink>
            </div>
          </div>
          <div className=" rounded-[34px] bg-white p-6 md:p-12">
            <p className="pb-5 text-3xl font-semibold text-[#333333]">
              List of Branch
            </p>
            <div className="mb-3 mt-12 flex flex-col items-center justify-between gap-3 rounded-[20px] bg-[#F8F9FB] p-5 md:flex-row">
              <form className="h-full w-full">
                <div className="relative h-full w-full">
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
              <button className="flex h-[57px] w-[135px] items-center justify-center rounded-2xl border-[1px] border-[#cbd2dc]/50 bg-white shadow-md">
                <img className="w-[20px]" src={filterIcon} alt="..." />
                <p className="mx-3 text-[16px] ">Filters</p>
              </button>
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
                      className="w-[100px] py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Branch Name
                    </th>
                    <th
                      scope="col"
                      className="w-[220px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="w-[115px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Branch Manager
                    </th>
                    <th
                      scope="col"
                      className="w-[115px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="w-[100px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="w-[100px] px-6 py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody className="border-none">
                  {branchDate?.data?.faqs?.map((ele, ind) => (
                    <tr key={ind}>
                      <td className="whitespace-nowrap py-3 pr-6">
                        <Checkbox />
                      </td>
                      <td className="whitespace-nowrap py-4 text-lg font-semibold text-[#333]">
                        {ele?.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-lg font-medium text-[#333]">
                        {ele?.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-lg font-normal text-[#333] underline">
                        {ele?.manager}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-lg font-normal text-[#333]">
                        {ele?.country}
                      </td>
                      <td>
                        <Button
                          variant="outlined"
                          className="mx-auto h-[28px] w-[78px] rounded-[15px] border border-[#280559] p-0 text-[#280559] ease-in hover:bg-[#280559] hover:text-white hover:opacity-100"
                          fullWidth
                          onClick={() =>
                            navigate(
                              `/dashboard/settingsManagement/branch/1/${ele?.id}`
                            )
                          }
                        >
                          <p className="text-center text-xs font-medium capitalize">
                            view
                          </p>
                        </Button>
                      </td>
                      {/* <td className="whitespace-nowrap px-6 py-4 text-center text-lg font-medium">
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
                      </td> */}
                      <td className="whitespace-nowrap px-6 py-4 text-center text-lg font-medium">
                        <button
                          className="rounded-full text-[#636363]/50 hover:text-[#7a7a7a]"
                          id="dropdownDefaultButton"
                          data-dropdown-toggle="dropdown"
                          type="button"
                        >
                          <svg
                            className="h-8 w-8 fill-current"
                            viewBox="0 0 32 32"
                          >
                            <circle cx="16" cy="10" r="2" />
                            <circle cx="16" cy="16" r="2" />
                            <circle cx="16" cy="22" r="2" />
                          </svg>
                        </button>
                        <div
                          id="dropdown"
                          class="z-10 hidden w-24 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                        >
                          <ul
                            class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton"
                          >
                            <li>
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  navigate(
                                    `/dashboard/settingsManagement/branch/2/${ele?.id}`
                                  )
                                }
                              >
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={
                                  () => setShowModal(true)
                                  // navigate(
                                  //   `/dashboard/Leadsmodule/${ele?.id}`
                                  // )
                                }
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Paginate pagination={pagination} method={listBranches} />

            {/* <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[20px] bg-[#F8F9FB] py-4 px-6 md:flex-row md:gap-0">
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
                      <button className="flex h-[40px] w-[77px] flex-row items-center justify-center rounded-2xl border-[1px] border-[#cbd2dc]/50 bg-white shadow-md">
                        <p className="mx-3 font-medium text-[#280559]">1</p>
                        <img src={dropdown} />
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
                <button className="mr-2 flex h-10 w-10 items-center justify-center rounded-xl border-[1px] border-[#cbd2dc]/50 shadow-md">
                  <svg
                    width={24}
                    height={24}
                    stroke="#280559"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border-[1px] border-[#cbd2dc]/50 shadow-md">
                  <svg
                    width={24}
                    height={24}
                    stroke="#280559"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div
        className={`flex w-full flex-col gap-8 bg-[#E8E9EB] font-display ${
          branchstate ? "hidden" : ""
        }`}
      >
        <div className="mb-5">
          <p className=" mb-2 text-4xl font-semibold text-[#280559]">
            {/* Create Branch */}
            {params.action == 1
              ? "View Branch"
              : params.action == 2
              ? "Edit Branch"
              : "Create Branch"}
          </p>
          <p className=" font text-base text-[#9898A3]">
            {/* Create or edit Branch */}
            {params.action == 1
              ? "View Branch"
              : params.action == 2
              ? "Edit Branch"
              : "Create Branch"}
          </p>
        </div>
        <div className="rounded-[34px] bg-white p-[39px]">
          <p className="mb-8 text-2xl font-semibold text-[#333333]">
            Branch Details
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Branch Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Branch Name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  disabled={isViewMode}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Address
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="360 Huntington Ave. Boston, MA 02115"
                  required
                  name="address"
                  value={formValues.address}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Country
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="country"
                  defaultValue={formValues.country}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  {countryArr.map(
                    (item, ind) => (
                      (<option>Select Country</option>),
                      (<option>{item}</option>)
                    )
                  )}
                  {/* <option selected>Select Country</option> */}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Branch Manager
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+91 0123 456 789Branch Manager"
                  required
                  name="manager"
                  value={formValues.manager}
                  disabled={isViewMode}
                  onChange={handleChange}
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
                  name="email"
                  value={formValues.email}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+91 0123 456 789"
                  required
                  name="phone"
                  value={formValues.phone}
                  disabled={isViewMode}
                  onChange={handleChange}
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
                <Addfield open={openModal} close={() => setOpenModal(false)} />
              </div> */}
              {isViewMode ? (
                ""
              ) : (
                <AddField
                  open={openBranchAddModal}
                  close={() => setOpenBranchAddModal(false)}
                  toAdd={BranchNewFields}
                  setOpenAddModal={setOpenBranchAddModal}
                  setToAdd={setBranchNewFields}
                  formsData={formValues}
                  setFormsData={setFormValues}
                  handleFormsDataChange={handleChange}
                  section={"Settings-Branch"}
                />
              )}
            </div>

            {/* <NavLink to=""> */}
            <Button
              className="rounded-[15px]  bg-[#280559]"
              type="submit"
              disabled={isViewMode}
            >
              <div className="flex flex-row items-center justify-center">
                <img src={saveIcon} alt="..." />
                <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                  Save Changes
                </p>
              </div>
            </Button>
            {/* </NavLink> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Branch;
