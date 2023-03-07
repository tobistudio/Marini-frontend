// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Button } from "@material-tailwind/react/components/Button";
// import universityLogo from "../../../public/img/universityLogo.svg";
// import saveIcon from "../../../public/img/saveIcon.svg";
// import { FileUploader } from "react-drag-drop-files";
// // import { useState } from "react";
// import axios from "axios";
// // import Loader from "@/loader";
// import { toast } from "react-toastify";
// import { ENV } from "@/config";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { viewLead } from "@/redux/actions/actions";
// import { useDispatch, useSelector } from "react-redux";
// import FullPageLoader from "@/FullPageLoader/FullPageLoader";
// import { v4 as uuid } from "uuid";

// export function CreateLead() {
//   const [isViewMode, setIsViewMode] = useState(true);

//   const fileTypes = ["JPEG", "PNG", "GIF"];
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState("");
//   const unique_id = uuid();
//   const only_numbers = unique_id.replace(/[^0-9]/g, "");
//   const first_9_digits = only_numbers.substring(0, 9);

// console.log(first_9_digits);
//   // const uuidFixedLength = unique_id.substring(0, 9);

// console.log("unique id ==>", uuidFixedLength);

//   const leadData = useSelector(
//     (state) => state?.universitiesReducer?.viewLeads
//   );
// console.log(
//     "lead data for update,view,delete in create lead compo",
//     leadData
//   );

//   const initialValues = {
//     // image: filename,

//     name: "",
//     passportNo: "",
//     leadGroup: "",
//     country: "",
//     phoneNo: "",
//     email: "",
//     refferalName: "",
//     refferalEmail: "",
//     //
//     schoolName: "",
//     qualificationType: "",
//     selectUniversity: "",
//     interestedProgramme: "",
//     status: "",
//     cert: "",
//     comments: "",
//     image: "",
//   };
//   const [formValues, setFormValues] = useState(initialValues);
//   // const [isViewMode, setIsViewMode] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const params = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (params.id) dispatch(viewLead(params.id));
//     if (params.action == 1) {
//       setIsViewMode(true);
//     } else {
//       setIsViewMode(false);
//     }
//   }, [params.id]);

//   useEffect(() => {
//     if (leadData?.lead) setFormValues(leadData?.lead);
//   }, [leadData.lead]);

//   // useEffect(() => {
//   //   if (leadData?.lead?.programmeDetails)
//   //     setFormValues(leadData?.lead?.programmeDetails);
//   // }, [leadData?.lead?.programmeDetails]);

//   // viewLeads

//   const handlefileChange = (file) => {
// console.log("file", file);
//     setFile(file);
//     //
//     let reader = new FileReader();
//     reader.onload = function () {
//       let output = document.getElementById("university-logo");
//       output.src = reader.result;
//     };
//     if (event.target.files[0]) {
//       reader.readAsDataURL(event.target.files[0]);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
// console.log("formValues ==>", formValues);
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
// console.log("handle submit", formValues);
//     const {
//       name,
//       passportNo,
//       leadGroup,
//       country,
//       phoneNo,
//       email,
//       refferalName,
//       refferalEmail,
//       schoolName,
//       qualificationType,
//       selectUniversity,
//       interestedProgramme,
//       status,
//       cert,
//       comments,
//     } = formValues;

// console.log("Front Image", file);
//     let formData = new FormData();
//     formData.append("name", name);
//     formData.append("passportNo", passportNo);
//     formData.append("leadGroup", leadGroup);
//     formData.append("country", country);
//     formData.append("phoneNo", phoneNo);

//     formData.append("email", email);
//     formData.append("refferalName", refferalName);
//     formData.append("refferalEmail", refferalEmail);
//     formData.append("schoolName", schoolName);
//     formData.append("qualificationType", qualificationType);
//     formData.append("selectUniversity", selectUniversity);
//     formData.append("interestedProgramme", interestedProgramme);
//     formData.append("status", status);
//     formData.append("cert", cert);
//     formData.append("comments", comments);
//     formData.append("logo", file[0]);

//     const config = {
//       headers: { "content-type": "multipart/form-data" },
//     };

//     // const apiCall = await axios.post(
//     //   `${ENV.baseUrl}/lead/createLead`,
//     //   formData,
//     //   config
//     // );
//     const apiCall = await axios[params.action == 2 ? "put" : "post"](
//       `${ENV.baseUrl}/lead/${params.action == 2 ? "edit" : "create"}`,
//       formData,
//       config
//     );

//     setIsLoading(false);
// console.log("lEAD created ", apiCall);

//     if (apiCall.data?.success) {
//       let { message } = apiCall.data;
//       toast.success(message, {
//         position: toast.POSITION.TOP_RIGHT,
//         hideProgressBar: false,
//         autoClose: 3000,
//       });
//     }
//     // navigate("")
//   };

//   return (
//     <>
//       {isLoading && <FullPageLoader />}
//       <div className="mt-12 w-full bg-[#E8E9EB] font-display">
//         <div className="my-10">
//           <div className="mr-8 flex items-center justify-between">
//             <p className=" text-4xl font-semibold text-[#280559]">
// {console.log("params ==>", params.action, params.id)}
//               {/* Create Lead */}
//               {params.action == 1
//                 ? "View Lead"
//                 : params.action == 2
//                 ? "Edit Lead"
//                 : "Create Lead"}
//             </p>
//             <div className="hidden sm:block">
//               <NavLink to="">
//                 <Button className="rounded-[15px]  bg-[#280559]">
//                   <div className="flex flex-row items-center justify-center">
//                     <img src={saveIcon} alt="..." />
//                     <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
//                       Save Changes
//                     </p>
//                   </div>
//                 </Button>
//               </NavLink>
//             </div>
//           </div>
//           <p className=" font text-base text-[#9898A3]">Create or edit lead</p>
//           <div className="ml-auto mr-8 mt-6 w-fit sm:hidden">
//             <NavLink to="">
//               <Button className="rounded-[15px]  bg-[#280559]">
//                 <div className="flex items-center justify-center">
//                   <img src={saveIcon} alt="..." />
//                   <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
//                     Save Changes
//                   </p>
//                 </div>
//               </Button>
//             </NavLink>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mr-8 rounded-[34px] bg-white p-[39px]">
//             <p className="mb-8 text-2xl font-semibold text-[#333333]">
//               Lead Details
//             </p>
//             <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               <div className=" flex flex-col gap-12 sm:flex-row sm:gap-20">
//                 <p className="text-base font-semibold text-[#333333]">Photo</p>
//                 <div className="flex flex-col items-center justify-center">
//                   <img
//                     // className="mb-3 rounded-2xl"
//                     // src={universityLogo}
//                     id="university-logo"
//                     className="width:156px mb-3 rounded-2xl"
//                     style={{ width: "156px" }}
//                     src={
//                       preview ||
//                       (formValues?.logo &&
//                         `${ENV.imageUrl}${formValues?.logo}`) ||
//                       universityLogo
//                     }
//                     alt="..."
//                   />
//                   <FileUploader
//                     multiple={true}
//                     handleChange={handlefileChange}
//                     name="file" //
//                     // types={fileTypes}
//                   >
//                     <button className="w-[150px] ">
//                       <p className="rounded-2xl border-[1px] border-[#cbd2dc]/50 py-3 text-sm font-medium text-[#333333] shadow-md">
//                         Upload Logo
//                       </p>
//                     </button>
//                   </FileUploader>
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Generated ID
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="192192554"
//                   value={first_9_digits}
//                   disabled={isViewMode}
//                   // isViewMode={true}
//                   //  required
//                 />
//               </div>
//             </div>
//             {/* <form> */}
//             <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="Full Name"
//                   required
//                   name="name"
//                   value={formValues?.name}
//                   disabled={isViewMode}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Passport
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="0123 456 789"
//                   required
//                   name="passportNo"
//                   value={formValues?.passportNo}
//                   disabled={isViewMode}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Lead Group
//                 </label>
//                 <select
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   name="leadGroup" //
//                   defaultValue={formValues?.leadGroup}
//                   disabled={isViewMode}
//                   onChange={handleChange}
//                 >
//                   <option selected>Select Group</option>
//                   <option>Select Group 1</option>
//                   <option>Select Group 2</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Nationality/Country
//                 </label>
//                 <select
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   name="country" //
//                   defaultValue={formValues?.country}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 >
//                   <option selected>Select Country</option>
//                   <option>pakistan</option>
//                   <option>India</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="+91 123 456 789"
//                   // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//                   required
//                   name="phoneNo" //
//                   value={formValues?.phoneNo}
//                   disabled={isViewMode}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="example@email.com"
//                   required
//                   name="email"
//                   value={formValues?.email}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Add Field
//                 </label>
//                 <button
//                   type="button"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
//                 >
//                   Click to add more field
//                 </button>
//               </div>
//             </div>
//             {/* </form> */}
//           </div>
//           <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
//             <p className="mb-8 text-2xl font-semibold text-[#333333]">
//               Program Details
//             </p>
//             {/* <form> */}
//             <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   School Name
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="School Name"
//                   required
//                   name="schoolName"
//                   value={formValues?.schoolName}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Type of Qualification
//                 </label>
//                 <select
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   name="qualificationType" //
//                   defaultValue={formValues?.qualificationType}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 >
//                   <option selected>Select Qualification</option>
//                   <option>Becholars</option>
//                   <option>Masters</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Selected University
//                 </label>
//                 <select
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   name="selectUniversity" //
//                   value={formValues?.selectUniversity}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 >
//                   <option selected>Select University</option>
//                   <option>punjab University</option>
//                   <option>virtual University</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Interested Program
//                 </label>
//                 <select
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   name="interestedProgramme" //
//                   defaultValue={formValues?.interestedProgramme}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 >
//                   <option selected>Select Program</option>
//                   <option>becholars</option>
//                   <option>masters</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Status
//                 </label>
//                 <select
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   name="status" //
//                   defaultValue={formValues?.status}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 >
//                   <option selected>Select Status</option>
//                   <option> Status one</option>
//                   <option> Status second</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Cert
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="Cert"
//                   required
//                   name="cert"
//                   value={formValues?.cert}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 />
//               </div>
//             </div>
//             <div className="mb-6 grid gap-6 md:grid-cols-2">
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333]">
//                   Comments With Date
//                 </label>
//                 <textarea
//                   rows="6"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-sm text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="Comments With Date"
//                   name="comments" //
//                   value={formValues?.comments}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Add Field
//                 </label>
//                 <button
//                   type="button"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
//                 >
//                   Click to add more field
//                 </button>
//               </div>
//             </div>
//             {/* </form> */}
//           </div>
//           <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
//             <p className="mb-8 text-2xl font-semibold text-[#333333]">
//               Referral Details
//             </p>
//             {/* <form> */}
//             <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Referral Name
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="Referral Name"
//                   required
//                   name="refferalName" //
//                   value={formValues?.refferalName}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   {" "}
//                   Refferal Email
//                 </label>
//                 <input
//                   type="email"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="example@email.com"
//                   required
//                   name="refferalEmail" //
//                   value={formValues?.refferalEmail}
//                   onChange={handleChange}
//                   disabled={isViewMode}
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#333333]">
//                   Add Field
//                 </label>
//                 <button
//                   type="button"
//                   className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
//                 >
//                   Click to add more field
//                 </button>
//               </div>
//             </div>
//             {/* </form> */}
//           </div>
//           {/* <NavLink to="university"> */}
//           <Button className="rounded-[15px]  bg-[#280559]">
//             <div className="flex flex-row items-center justify-center">
//               <img src={saveIcon} alt="..." />
//               <button
//                 className="p-1 px-[11px] text-base font-medium normal-case text-white"
//                 type="submit"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </Button>
//           {/* </NavLink> */}
//         </form>
//       </div>
//     </>
//   );
// }

// export default CreateLead;

import React, { useState, useEffect, isValidElement } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react/components/Button";
import universityLogo from "../../../public/img/universityLogo.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import { FileUploader } from "react-drag-drop-files";
// import { useState } from "react";
import axios from "axios";
// import Loader from "@/loader";
import { toast } from "react-toastify";
import { ENV } from "@/config";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  viewLead,
  listUniversities,
  listInterestedPrograms,
  listLeadsManagmentModuleStatuss,
  listQualificationTypes,
  listLeadGroups,
} from "@/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import FullPageLoader from "@/FullPageLoader/FullPageLoader";
import { v4 as uuid } from "uuid";
import AddField from "@/helpers/Addfield";

export function CreateLead() {
  // Anasite - Edits: Add New Form
  // Anasite - Edits
  const {
    interestedPrograms,
    universities,
    leadsManagmentModuleStatuss,
    qualificationTypes,
    leadGroups,
  } = useSelector((state) =>
    state?.universitiesReducer ? state?.universitiesReducer : {}
  );
  useEffect(() => {
    dispatch(listUniversities("limit=100000"));
    dispatch(listInterestedPrograms("limit=100000"));
    dispatch(listLeadsManagmentModuleStatuss("limit=100000"));
    dispatch(listQualificationTypes("limit=100000"));
    dispatch(listLeadGroups("limit=100000"));
  }, []);
  // End
  /*{ toAdd, setToAdd,  open,close,  setOpenAddModal,  formsData,  setFormsData,  handleFormsDataChange,  section,} */
  // const [openModal, setOpenModal] = useState(false);
  // const [CreateLeadState, setCreateLeadState] = useState(true);
  const [openCreateLeadAddModal, setOpenCreateLeadAddModal] = useState(false);
  const [openProgramDetailsAddModal, setOpenProgramDetailsAddModal] =
    useState(false);
  const [openThirdAddModal, setOpenThirdAddModal] = useState(false);

  const [CreateLeadNewFields, setCreateLeadNewFields] = useState([]);
  const [ProgrameDetailNewForm, setProgrameDetailNewForm] = useState([]);
  const [thirdNewForm, setThirdNewForm] = useState([]);

  const [allFormsData, setAllFormsData] = useState({});
  const handleAllFormsDataChange = (e) => {
    let { name, value } = e.target;
    setAllFormsData({ ...allFormsData, [name]: value });
  };
  // End
  const [openAddModal, setOpenAddModal] = useState(false);
  const [isViewMode, setIsViewMode] = useState(true);
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const unique_id = uuid();
  const only_numbers = unique_id.replace(/[^0-9]/g, "");
  const first_9_digits = only_numbers.substring(0, 9);

  const leadData = useSelector(
    (state) => state?.universitiesReducer?.viewLeads
  );
  // console.log(
  // "lead data for update,view,delete in create lead compo",
  // leadData
  // );

  const initialValues = {
    // image: filename,
    name: "",
    passportNo: "",
    leadGroup: "",
    country: "",
    phoneNo: "",
    email: "",
    refferalName: "",
    refferalEmail: "",
    //
  };
  const [formValues, setFormValues] = useState(initialValues);
  const secondInitialValus = {
    schoolName: "",
    qualificationType: "",
    selectUniversity: "",
    interestedProgramme: "",
    status: "",
    cert: "",
    comments: "",
    image: "",
  };
  const [ProgrameDetailValues, setProgrameDetailsValues] =
    useState(secondInitialValus);
  // const [isViewMode, setIsViewMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) dispatch(viewLead(params.id));
    if (params.action == 1) {
      setIsViewMode(true);
    } else {
      setIsViewMode(false);
    }
  }, [params.id]);

  useEffect(() => {
    if (leadData?.lead) setFormValues(leadData?.lead);
  }, [leadData.lead]);

  useEffect(() => {
    if (leadData?.lead?.programmeDetails)
      setProgrameDetailsValues(leadData?.lead?.programmeDetails);
  }, [leadData?.lead?.programmeDetails]);

  const handlefileChange = (file) => {
    // console.log("file", file);
    setFile(file);
    //
    let reader = new FileReader();
    reader.onload = function () {
      let output = document.getElementById("university-logo");
      output.src = reader.result;
    };
    if (file[0]) {
      reader.readAsDataURL(file[0]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("formValues ==>", formValues);
    setFormValues({ ...formValues, [name]: value });
    // console.log("programeDetailsValues", ProgrameDetailValues);
    setProgrameDetailsValues({ ...ProgrameDetailValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log("handle submit", formValues);
    const {
      name,
      passportNo,
      leadGroup,
      country,
      phoneNo,
      email,
      refferalName,
      refferalEmail,
    } = formValues;
    const {
      schoolName,
      qualificationType,
      selectUniversity,
      interestedProgramme,
      status,
      cert,
      comments,
    } = ProgrameDetailValues;
    // console.log("Front Image", file);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("passportNo", passportNo);
    formData.append("leadGroup", leadGroup);
    formData.append("country", country);
    formData.append("phoneNo", phoneNo);
    formData.append("Uname", localStorage.name);
    formData.append("role", localStorage.access);

    if (params.id) formData.append("id", params.id);
    formData.append("email", email);
    formData.append("refferalName", refferalName);
    formData.append("refferalEmail", refferalEmail);
    formData.append("schoolName", schoolName);
    formData.append("qualificationType", qualificationType);
    formData.append("selectUniversity", selectUniversity);
    formData.append("interestedProgramme", interestedProgramme);
    formData.append("status", status);
    formData.append("cert", cert);
    formData.append("comments", comments);
    formData.append("logo", file && file[0] ? file[0] : "");

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const apiCall = await axios[params.action == 2 ? "put" : "post"](
      `${ENV.baseUrl}/lead/${params.action == 2 ? "edit" : "createLead"}`,
      formData,
      config
    );

    setIsLoading(false);
    // console.log("lEAD created ", apiCall);

    if (apiCall.data?.success) {
      let { message } = apiCall.data;
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 3000,
      });
    }
    // navigate("")
  };

  return (
    <>
      {isLoading && <FullPageLoader />}
      <div className="mt-12 w-full bg-[#E8E9EB] font-display">
        <div className="my-10">
          <div className="mr-8 flex items-center justify-between">
            <p className=" text-4xl font-semibold text-[#280559]">
              {/* {console.log("params ==>", params.action, params.id)} */}
              {/* Create Lead */}
              {params.action == 1
                ? "View Lead"
                : params.action == 2
                ? "Edit Lead"
                : "Create Lead"}
            </p>
            {isViewMode ? (
              <Button
                onClick={() => navigate(-1)}
                className="rounded-[15px]  bg-[#280559]"
              >
                <div className="flex flex-row items-center justify-center">
                  <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                    Back
                  </p>
                </div>
              </Button>
            ) : (
              <div className="hidden sm:block">
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
            )}
          </div>
          <p className=" font text-base text-[#9898A3]">
            {/* Create or edit lead */}
            {params.action == 1
              ? "View Lead"
              : params.action == 2
              ? "Edit Lead"
              : "Create Lead"}
          </p>
          {isViewMode ? (
            ""
          ) : (
            <div className="ml-auto mr-8 mt-6 w-fit sm:hidden">
              <NavLink to="">
                <Button className="rounded-[15px]  bg-[#280559]">
                  <div className="flex items-center justify-center">
                    <img src={saveIcon} alt="..." />
                    <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                      Save Changes
                    </p>
                  </div>
                </Button>
              </NavLink>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mr-8 rounded-[34px] bg-white p-[39px]">
            <p className="mb-8 text-2xl font-semibold text-[#333333]">
              Lead Details
            </p>
            <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className=" flex flex-col gap-12 sm:flex-row sm:gap-20">
                <p className="text-base font-semibold text-[#333333]">Photo</p>
                <div className="flex flex-col items-center justify-center">
                  <img
                    id="university-logo"
                    className="width:156px mb-3 rounded-2xl"
                    style={{ width: "156px" }}
                    src={
                      preview ||
                      (formValues?.image &&
                        `${ENV.imageUrl}${formValues?.image}`) ||
                      universityLogo
                    }
                    onError={function (e) {
                      e.target.src = universityLogo;
                    }}
                    alt="..."
                  />
                  {isViewMode ? (
                    ""
                  ) : (
                    <FileUploader
                      multiple={true}
                      handleChange={handlefileChange}
                      name="file" //
                      // types={fileTypes}
                    >
                      <button className="w-[150px] ">
                        <p className="rounded-2xl border-[1px] border-[#cbd2dc]/50 py-3 text-sm font-medium text-[#333333] shadow-md">
                          Upload Logo
                        </p>
                      </button>
                    </FileUploader>
                  )}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Generated ID
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="192192554"
                  value={first_9_digits}
                  disabled={isViewMode}
                  // isViewMode={true}
                  //  required
                />
              </div>
            </div>
            {/* <form> */}
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
                  name="name"
                  value={formValues?.name}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Passport
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0123 456 789"
                  required
                  name="passportNo"
                  value={formValues?.passportNo}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Lead Group
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="leadGroup" //
                  defaultValue={formValues?.leadGroup}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  <option>Select Group</option>
                  {/* ****** */}
                  {/* {console.log("leeeesssadsfwew", leadGroups)} */}
                  {leadGroups?.data?.faqs.map((group) => {
                    return (
                      <option
                        value={group.ID}
                        key={
                          group.ID +
                          "hey" +
                          group.Color +
                          group.name +
                          "choose in leed group"
                        }
                      >
                        {group.name}
                      </option>
                    );
                  })}
                  {/* <option>social media</option>
                  <option> Event</option>
                  <option> Walk In</option> */}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Nationality/Country
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="country" //
                  defaultValue={formValues?.country}
                  onChange={handleChange}
                  disabled={isViewMode}
                >
                  <option>Select Country</option>
                  <option>pakistan</option>
                  <option>India</option>
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
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  name="phoneNo" //
                  value={formValues?.phoneNo}
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
                  value={formValues?.email}
                  onChange={handleChange}
                  disabled={isViewMode}
                />
              </div>
              {isViewMode ? (
                ""
              ) : (
                <AddField
                  open={openCreateLeadAddModal}
                  close={() => setOpenCreateLeadAddModal(false)}
                  toAdd={CreateLeadNewFields}
                  setOpenAddModal={setOpenCreateLeadAddModal}
                  setToAdd={setCreateLeadNewFields}
                  formsData={formValues}
                  setFormsData={setFormValues}
                  handleFormsDataChange={handleAllFormsDataChange}
                  section={"Lead-CreateLead"}
                />
              )}
              {/* <div>
                  <label className="mb-2 block text-sm font-semibold text-[#333333]">
                    Add Field
                  </label>
                  <button
                    onClick={() => setOpenAddModal(true)}
                    type="button"
                    className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
                  >
                    Click to add more field
                  </button>
                  <Addfield
                    open={openAddModal}
                    close={() => setOpenAddModal(false)}
                  />
                </div> */}
            </div>
            {/* </form> */}
          </div>
          <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
            <p className="mb-8 text-2xl font-semibold text-[#333333]">
              Program Details
            </p>
            {/* <form> */}
            <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  School Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="School Name"
                  required
                  name="schoolName"
                  defaultValue={ProgrameDetailValues?.schoolName}
                  onChange={handleChange}
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Type of Qualification
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="qualificationType" //
                  defaultValue={ProgrameDetailValues?.qualificationType}
                  onChange={handleChange}
                  disabled={isViewMode}
                >
                  <option value={""}>Select Qualification</option>
                  {qualificationTypes?.data?.faqs.map((type) => {
                    return (
                      <option
                        value={type.ID}
                        key={type.ID + "jj" + type.name + type.Color + "qType"}
                      >
                        {type.name}
                      </option>
                    );
                  })}
                  {/* <option>Somali Cert</option>
                  <option>IGCSE</option>
                  <option>KCSE</option>
                  <option>American Diploma</option>
                  <option>Bachelor degree</option>
                  <option>master degree</option> */}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Selected University
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="selectUniversity" //
                  value={ProgrameDetailValues?.selectUniversity}
                  onChange={handleChange}
                  disabled={isViewMode}
                >
                  <option value={""}>Select University</option>
                  {universities?.data?.faqs.map((university) => {
                    return (
                      <option
                        value={university.id}
                        key={
                          university.id +
                          university.createdAt +
                          university.name +
                          "creatLead"
                        }
                      >
                        {university.name}
                      </option>
                    );
                  })}
                  {/* <option>punjab University</option>
                  <option>virtual University</option> */}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Interested Program
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="interestedProgramme" //
                  defaultValue={ProgrameDetailValues?.interestedProgramme}
                  onChange={handleChange}
                  disabled={isViewMode}
                >
                  <option value={""}>Select Program</option>
                  {interestedPrograms?.data?.faqs.map((category) => {
                    return (
                      <option
                        value={category.ID}
                        key={
                          category.id +
                          category.createdAt +
                          category.name +
                          "createlead"
                        }
                      >
                        {category.name}
                      </option>
                    );
                  })}
                  {/* <option>becholars</option>
                  <option>masters</option> */}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Status
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="status" //
                  defaultValue={ProgrameDetailValues?.status}
                  onChange={handleChange}
                  disabled={isViewMode}
                >
                  <option value={""}>Select Status</option>
                  {leadsManagmentModuleStatuss?.data?.faqs.map((status) => {
                    return (
                      <option
                        value={status.ID}
                        key={
                          status.ID +
                          "hey" +
                          status.Color +
                          status.name +
                          "choose in leed"
                        }
                      >
                        {status.name}
                      </option>
                    );
                  })}
                  {/* <option> Warm </option>
                  <option> Hot</option>
                  <option> Qualified</option> */}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Cert
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Cert"
                  required
                  name="cert"
                  value={ProgrameDetailValues?.cert}
                  onChange={handleChange}
                  disabled={isViewMode}
                />
              </div>
            </div>
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333]">
                  Comments With Date
                </label>
                <textarea
                  rows="6"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-sm text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Comments With Date"
                  name="comments" //
                  value={ProgrameDetailValues?.comments}
                  onChange={handleChange}
                  disabled={isViewMode}
                  required
                />
              </div>
            </div>
            {isViewMode ? (
              ""
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AddField
                  open={openProgramDetailsAddModal}
                  close={() => setOpenProgramDetailsAddModal(false)}
                  toAdd={ProgrameDetailNewForm}
                  setToAdd={setProgrameDetailNewForm}
                  setOpenAddModal={setOpenProgramDetailsAddModal}
                  formsData={ProgrameDetailValues}
                  setFormsData={setProgrameDetailsValues}
                  handleFormsDataChange={handleAllFormsDataChange}
                  section={"Lead-ProgramDetails"}
                />
              </div>
            )}
            {/* <div>
                  <label className="mb-2 block text-sm font-semibold text-[#333333]">
                    Add Field
                  </label>
                  <button
                    onClick={() => setOpenAddModal(true)}
                    type="button"
                    className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
                  >
                    Click to add more field
                  </button>
                  <Addfield
                    open={openAddModal}
                    close={() => setOpenAddModal(false)}
                  />
                </div> */}
            {/* </form> */}
          </div>
          <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
            <p className="mb-8 text-2xl font-semibold text-[#333333]">
              Referral Details
            </p>
            {/* <form> */}
            <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Referral Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Referral Name"
                  required
                  name="refferalName" //
                  value={formValues?.refferalName}
                  onChange={handleChange}
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  {" "}
                  Refferal Email
                </label>
                <input
                  type="email"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="example@email.com"
                  required
                  name="refferalEmail" //
                  value={formValues?.refferalEmail}
                  onChange={handleChange}
                  disabled={isViewMode}
                />
              </div>
              {isViewMode ? (
                ""
              ) : (
                <AddField
                  open={openThirdAddModal}
                  close={() => setOpenThirdAddModal(false)}
                  setOpenAddModal={setOpenThirdAddModal}
                  toAdd={thirdNewForm}
                  setToAdd={setThirdNewForm}
                  formsData={allFormsData}
                  setFormsData={setAllFormsData}
                  handleFormsDataChange={handleAllFormsDataChange}
                  section={"Lead-Third"}
                />
              )}
              {/* <div>
                  <label className="mb-2 block text-sm font-semibold text-[#333333]">
                    Add Field
                  </label>
                  <button
                    onClick={() => setOpenAddModal(true)}
                    type="button"
                    className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-[#F8F9FB] p-2.5 font-medium text-[#BEBFC3]"
                  >
                    Click to add more field
                  </button>
                  <Addfield
                    open={openAddModal}
                    close={() => setOpenAddModal(false)}
                  />
                </div> */}
            </div>
            {/* </form> */}
          </div>
          {isViewMode ? (
            <Button
              onClick={() => navigate(-1)}
              className="rounded-[15px]  bg-[#280559]"
            >
              <div className="flex flex-row items-center justify-center">
                <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                  Back
                </p>
              </div>
            </Button>
          ) : (
            <>
              {/* <NavLink to="university"> */}
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
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default CreateLead;
