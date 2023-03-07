import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import universityLogo from "../../../public/img/universityLogo.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import upload from "../../../public/img/upload.svg";
import esc from "../../../public/img/esc.svg";
import deletee from "../../../public/img/delete.svg";
import up from "../../../public/img/up.svg";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
// import Loader from "@/loader";
import FullPageLoader from "@/FullPageLoader/FullPageLoader";
import { toast } from "react-toastify";
import { ENV } from "@/config";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  viewApplication,
  listApplicationModuleStatuss,
} from "@/redux/actions/actions";
import {
  listApplications,
  listInterestedPrograms,
  listQualificationTypes,
  listUniversities,
  listProgramLevels,
} from "@/redux/actions/actions";
import { data } from "autoprefixer";
import AddField from "@/helpers/Addfield";

// import [useSelector]
export function AddNewApplication() {
  // Anasite - Edits
  const {
    programLevels,
    qualificationTypes,
    universities,
    interestedPrograms,
    applicationModuleStatuss,
  } = useSelector((state) =>
    state?.universitiesReducer ? state?.universitiesReducer : {}
  );
  useEffect(() => {
    dispatch(listInterestedPrograms("limit=100000"));
    dispatch(listQualificationTypes("limit=100000"));
    dispatch(listUniversities("limit=100000"));
    dispatch(listProgramLevels("limit=100000"));
    dispatch(listApplicationModuleStatuss("limit=100000"));
  }, []);
  // End
  const [openAddModal, setOpenAddModal] = useState(false);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isViewMode, setIsViewMode] = useState(true);
  /*{ toAdd, setToAdd,  open,close,  setOpenAddModal,  formsData,  setFormsData,  handleFormsDataChange,  section,} */
  const [NewApplicantState, setNewApplicantState] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openNewApplicantAddModal, setOpenNewApplicantAddModal] =
    useState(false);
  const [NewApplicantNewFields, setNewApplicantNewFields] = useState([]);
  const [openSecondNewApplicantAddModal, setOpenSecondNewApplicantAddModal] =
    useState(false);
  const [SecondNewApplicantNewFields, setSecondNewApplicantNewFields] =
    useState([]);
  const [allFormsData, setAllFormsData] = useState({});
  const handleAllFormsDataChange = (e) => {
    let { name, value } = e.target;
    setAllFormsData({ ...allFormsData, [name]: value });
  };

  const applicationsData = useSelector(
    (state) => state?.universitiesReducer?.viewApplications
  );
  console.log(
    "applications datta in create application module",
    applicationsData
  );
  // list all applications
  useEffect(() => {
    dispatch(listApplications());

    if (applicationsData?.success == true) {
      let { message } = applicationsData;
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 3000,
      });
    }
  }, []);

  const applicantData = useSelector((state) => {
    return state?.universitiesReducer?.applications;
  });

  // console.log("applicantData ==>", applicantData);

  const handlefileChange = (file) => {
    // console.log("file", file[0]);
    setFile(file);
    //
    let reader = new FileReader();
    reader.onload = function () {
      let output = document.getElementById("university-logo");
      output.src = reader.result;
    };
    // console.log("><><><><><><><><><><><><><><><><><><>", file);
    if (file[0]) {
      reader.readAsDataURL(file[0]);
    }
  };
  const fileTypes = ["JPEG", "PNG", "GIF"];

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    country: "",
    passportNo: "",
    id: "",

    //
  };
  const [formValues, setFormValues] = useState(initialValues);
  const secondInitialValues = {
    applicationLevel: "",
    interestedProgramme: "",
    schoolName: "",
    qualificationType: "",
    selectUniversity: "",
    completionLetter: "",
    programmeLevel: "",
    healthForm: "",
    paymentReceipt: "",
    researchProposal: "",
    refreeForm: "",
    medium: "",
    scholorshipForm: "",
    otherDocuments: "",
    attestationLetter: "",
    releaseLetter: "",
    status: "",
    fileUpload: "",
    applicantsId: "",
    image: "",
  };
  const [appDetailValues, setAppDetailValue] = useState(secondInitialValues);

  useEffect(() => {
    if (params.id) dispatch(viewApplication(params.id));
    if (params.action == 1) {
      setIsViewMode(true);
    } else {
      setIsViewMode(false);
    }
  }, [params.id]);

  useEffect(() => {
    if (applicationsData?.applicant) setFormValues(applicationsData?.applicant);
  }, [applicationsData.applicant]);

  useEffect(() => {
    if (applicationsData?.applicant?.programmeDetails)
      setAppDetailValue(applicationsData?.applicant?.programmeDetails);
  }, [applicationsData?.applicant?.programmeDetails]);

  // ApplicationDetails

  const handleSubmit = async (e) => {
    console.log("submittin the main form");
    e.preventDefault();
    setIsLoading(true);
    const {
      fullName,
      email,
      phoneNumber,
      address1,
      address2,
      country,
      passportNo,
      //

      // applicantsId,
    } = formValues;
    const {
      applicationLevel,
      interestedProgramme,
      schoolName,
      qualificationType,
      selectUniversity,
      completionLetter,
      programmeLevel,
      healthForm,
      paymentReceipt,
      researchProposal,
      refreeForm,
      medium,
      scholorshipForm,
      otherDocuments,
      attestationLetter,
      releaseLetter,
      status,
    } = appDetailValues;
    console.log("Front Image", file);
    let formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address1", address1);
    formData.append("address2", address2);
    formData.append("country", country);
    formData.append("passportNo", passportNo);
    formData.append("applicationLevel", applicationLevel);
    formData.append("interestedProgramme", interestedProgramme);
    formData.append("schoolName", schoolName);
    formData.append("qualificationType", qualificationType);
    formData.append("selectUniversity", selectUniversity);
    formData.append("completionLetter", completionLetter);
    formData.append("programmeLevel", programmeLevel);
    formData.append("Uname", localStorage.name);
    formData.append("role", localStorage.access);
    if (params.id) formData.append("id", params.id);

    formData.append("healthForm", healthForm);
    formData.append("paymentReceipt", paymentReceipt);
    formData.append("researchProposal", researchProposal);
    formData.append("refreeForm", refreeForm);
    formData.append("medium", medium);
    formData.append("scholorshipForm", scholorshipForm);
    formData.append("otherDocuments", otherDocuments);
    formData.append("attestationLetter", attestationLetter);
    formData.append("releaseLetter", releaseLetter);
    formData.append("status", status);
    formData.append("image", file ? file[0] : {});
    formData.append("fileUpload", file ? file[0] : {});

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const apiCall = await axios[params.action == 2 ? "put" : "post"](
      `${ENV.baseUrl}/applicants/${
        params.action == 2 ? "edit" : "createApplicant"
      }`,
      formData,
      config
    );

    setIsLoading(false);
    console.log("applicant created successfully ", apiCall);

    if (apiCall.data?.success) {
      let { message } = apiCall.data;
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 3000,
      });
    }
  };
  const handleFullNameChange = (e) => {
    const { name, value } = e.target;
    // console.log(">>>>>>>>>>>>>>>>>>>>>>", value);
    if (value === "" && name === "id") {
      setAppDetailValue(secondInitialValues);
      return setFormValues(initialValues);
    }
    // if (value === "") return;
    // Anasite - Edits: showing applicant info.
    let newFormValues = { ...formValues, [name]: value };
    let newAppDetailValues = { ...appDetailValues };
    fetch(`${ENV.baseUrl}/applicants/get/${value}`)
      .then((res) => res.json())
      .then((data) => {
        const { applicant } = data;
        Object.keys(newFormValues).forEach((key) => {
          newFormValues[key] =
            applicant[key] !== undefined && applicant[key] !== null
              ? applicant[key]
              : "";
        });
        setFormValues(newFormValues);
        Object.keys(newAppDetailValues).forEach((key) => {
          newAppDetailValues[key] =
            (applicant["programmeDetails"][key] !== undefined) &
            (applicant["programmeDetails"][key] !== null)
              ? applicant["programmeDetails"][key]
              : "";
        });
        setAppDetailValue(newAppDetailValues);
      })
      .catch((err) => {
        //
      });
    // newFormValues = { ...newFormValues, [name]: value };
    // console.log("ooooooookkkkkkkkmmmmmmm", newFormValues);
    // setFormValues(newFormValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("formValues ===>", formValues);
    setFormValues({ ...formValues, [name]: value });
    // console.log("appDetailValues ===>", appDetailValues);
    setAppDetailValue({ ...appDetailValues, [name]: value });
  };

  return (
    <>
      {isLoading && <FullPageLoader />}
      <div className="mt-12 w-full bg-[#E8E9EB] pr-8 font-display">
        <div className="my-10 grid grid-cols-1">
          <p className=" text-4xl font-semibold text-[#280559]">
            {/* Add New Application */}
            {params.action == 1
              ? "View Application"
              : params.action == 2
              ? "Edit Application"
              : "Create Application"}
          </p>
          <p className=" font text-base text-[#9898A3]">
            {/* Create or edit application */}
            {params.action == 1
              ? "View Application"
              : params.action == 2
              ? "Edit Application"
              : "Create Application"}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="rounded-[34px] bg-white p-[39px]">
            <p className="mb-8 text-2xl font-semibold text-[#333333]">
              Applicants Personal Info
            </p>
            <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Full Name
                </label>

                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Full Name"
                  name="id"
                  value={formValues?.id}
                  disabled={isViewMode}
                  onChange={handleFullNameChange}
                  data-index={formValues?.index}
                >
                  <option value="">Select Option</option>
                  {applicantData?.data?.faqs?.map((ele, ind) => (
                    <option
                      key={ele?.fullName + ind}
                      value={ele?.id}
                      data-index={ind}
                    >
                      {ele?.fullName}
                    </option>
                  ))}
                </select>
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
                  placeholder="+91 123 456 789"
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  name="phoneNumber"
                  value={formValues?.phoneNumber}
                  onChange={handleChange}
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Address (line 1)
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Address line 1"
                  required
                  name="address1"
                  value={formValues?.address1}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Address (line 2)
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Address line 2"
                  required
                  name="address2"
                  disabled={isViewMode}
                  value={formValues?.address2}
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
                  value={formValues?.country || ""}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  <option value={""}>Select Country</option>
                  <option value={"pakistan"}>pakistan</option>
                  <option value={"india"}>india</option>
                  <option value={formValues?.country || ""}>
                    {formValues?.country || ""}
                  </option>
                </select>
              </div>
            </div>

            <div className=" flex flex-row gap-4">
              <p className="mr-[50px] text-base font-semibold text-[#333333]">
                Full Passport Pages
              </p>
              <div className="flex flex-col items-center justify-center ">
                <img
                  id="university-logo"
                  className="width:156px mb-3 rounded-2xl"
                  style={{ width: "200px" }}
                  src={
                    preview ||
                    (formValues?.image &&
                      `${ENV.imageUrl}${formValues?.image}`) ||
                    universityLogo
                  }
                  onError={(e) => {
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
                    name="file"
                    // disabled={isViewMode }
                    // style={{border:"2px solid red"}}
                    // types={fileTypes}
                  >
                    <button className="w-[200px]">
                      <p
                        className="rounded-2xl border-[1px] border-[#cbd2dc]/50 py-3 text-sm font-semibold text-[#333333] shadow-md"
                        // style={{ border: "none" }}
                      >
                        Upload
                      </p>
                    </button>
                  </FileUploader>
                )}
              </div>
            </div>
            <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Passport No
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0123 456 789"
                  name="passportNo"
                  value={formValues?.passportNo}
                  onChange={handleChange}
                  disabled={isViewMode}
                  required
                />
              </div>
              {isViewMode ? (
                ""
              ) : (
                <AddField
                  open={openNewApplicantAddModal}
                  close={() => setOpenNewApplicantAddModal(false)}
                  toAdd={NewApplicantNewFields}
                  setOpenAddModal={setOpenNewApplicantAddModal}
                  setToAdd={setNewApplicantNewFields}
                  formsData={formValues}
                  setFormsData={setFormValues}
                  handleFormsDataChange={handleAllFormsDataChange}
                  section={"Accounting-NewApplicant"}
                />
              )}
            </div>
          </div>

          <div className="my-[30px] rounded-[34px] bg-white p-[39px]">
            <p className="mb-8 text-2xl font-semibold text-[#333333]">
              Application Details
            </p>
            <div className="mt-12 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Application Level
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="applicationLevel"
                  value={appDetailValues?.applicationLevel || ""}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  <option value={""}>Select Type</option>
                  <option value={"Diploma"}>Diploma</option>
                  <option value={"Undergraduate"}>Undergraduate</option>
                  <option value={"Master"}>Master</option>
                  <option value={"PhD"}>PhD</option>
                  <option value={"Postdoc"}>Postdoc</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Interested Programme
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="interestedProgramme"
                  value={appDetailValues?.interestedProgramme || ""}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  <option value={""}>Select Programme</option>
                  {interestedPrograms?.data?.faqs.map((signleProgram) => {
                    return (
                      <option
                        value={signleProgram.ID}
                        key={
                          signleProgram.ID +
                          signleProgram.createdAt +
                          signleProgram.name +
                          "create Applicaon t"
                        }
                      >
                        {signleProgram.name}
                      </option>
                    );
                  })}
                  {/* <option>Master</option>
                  <option>Becholars</option>
                  <option>Intermediate</option>
                  <option>IGSCE</option>
                  <option>KCSE Diploma</option> */}
                </select>
              </div>
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
                  disabled={isViewMode}
                  value={appDetailValues?.schoolName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Type of qualification
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="qualificationType"
                  value={appDetailValues?.qualificationType || ""}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  <option value={""}>Select Type</option>
                  {qualificationTypes?.data?.faqs.map((qType) => {
                    return (
                      <option
                        value={qType.ID}
                        key={
                          qType.ID +
                          qType.createdAt +
                          qType.name +
                          "add new app"
                        }
                      >
                        {qType.name}
                      </option>
                    );
                  })}
                  {/* <option>Somali Cert</option>
                  <option>IGCSE</option>
                  <option>KCSE</option>
                  <option>Thanawiya</option>
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
                  name="selectUniversity"
                  value={appDetailValues?.selectUniversity}
                  disabled={isViewMode}
                  onChange={handleChange}
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
                          "add new app"
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
                  Cert and Transcript / Completion Letter
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Cert and Transcript / Completion Letter"
                  required
                  name="completionLetter"
                  value={appDetailValues?.completionLetter || ""}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              {/* <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Selected University
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="selectUniversity"
                  value={appDetailValues?.selectUniversity || ""}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  <option value={""}>Select University</option>
                  <option>punjab University</option>
                  <option>virtual University</option>
                </select>
              </div> */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Programme Level
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="programmeLevel"
                  value={appDetailValues?.programmeLevel}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  <option value={""}>Select Programme</option>
                  {programLevels?.data?.faqs.map((level) => {
                    return (
                      <option
                        value={level.ID}
                        key={
                          level.ID +
                          level.createdAt +
                          level.name +
                          "add new app"
                        }
                      >
                        {level.name}
                      </option>
                    );
                  })}
                  {/* <option>Master</option>
                  <option>Becholars</option>
                  <option>Intermediate</option>
                  <option>IGSCE</option>
                  <option>KCSE Diploma</option> */}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Health Declaration Form
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Health Declaration Form"
                  required
                  name="healthForm"
                  value={appDetailValues?.healthForm}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Payment receipt
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Payment receipt"
                  required
                  name="paymentReceipt"
                  value={appDetailValues?.paymentReceipt}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Research Proposal
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Research Proposal"
                  required
                  name="researchProposal"
                  value={appDetailValues?.researchProposal}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Referee Form / Recommendation
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Referee Form / Recommendation"
                  required
                  name="refreeForm"
                  value={appDetailValues?.refreeForm}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Medium of Instruction
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Medium of Instruction"
                  required
                  name="medium"
                  value={appDetailValues?.medium}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Scholarship Form
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Scholarship Form"
                  required
                  name="scholorshipForm"
                  value={appDetailValues?.scholorshipForm}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Other Documents
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Other Documents"
                  required
                  name="otherDocuments"
                  value={appDetailValues?.otherDocuments}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Attestation Letter
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Attestation Letter"
                  required
                  name="attestationLetter"
                  value={appDetailValues?.attestationLetter}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Release Letter
                </label>
                <input
                  type="text"
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Release Letter"
                  required
                  name="releaseLetter"
                  value={appDetailValues?.releaseLetter}
                  disabled={isViewMode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">
                  Status
                </label>
                <select
                  className="block w-full rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                  name="status"
                  value={appDetailValues?.status}
                  disabled={isViewMode}
                  onChange={handleChange}
                >
                  <option value={""}>Select Status</option>
                  {applicationModuleStatuss?.data?.faqs.map((status) => {
                    return (
                      <option
                        value={status.ID}
                        key={
                          status.ID +
                          "hey" +
                          status.Color +
                          status.name +
                          "choose in application module"
                        }
                      >
                        {status.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {isViewMode ? (
                ""
              ) : (
                <AddField
                  open={openSecondNewApplicantAddModal}
                  close={() => setOpenSecondNewApplicantAddModal(false)}
                  toAdd={SecondNewApplicantNewFields}
                  setOpenAddModal={setOpenSecondNewApplicantAddModal}
                  setToAdd={setSecondNewApplicantNewFields}
                  formsData={appDetailValues}
                  setFormsData={setAppDetailValue}
                  handleFormsDataChange={handleAllFormsDataChange}
                  section={"Accounting-SecondNewApplicant"}
                />
              )}
            </div>
          </div>

          {isViewMode ? (
            ""
          ) : (
            <div className="my-[30px] rounded-[34px] bg-white p-[39px] ">
              <p className="mb-8 text-2xl font-semibold text-[#333333]">
                Upload Document
              </p>
              <div className="grid grid-cols-1 gap-[20px] xl:grid-cols-2">
                <img
                  className="h-full w-auto rounded-lg object-cover"
                  src={upload}
                  alt="..."
                  // src={
                  //   preview ||
                  //   (formValues?.image &&
                  //     `${ENV.imageUrl}${formValues?.image}`) ||
                  //   universityLogo
                  // }
                />

                <div className="w-full items-center">
                  <div className=" border-b-4 border-deep-purple-900">
                    <p className=" text-sm font-semibold text-[#92929D]">
                      Uploading - 3/3 files
                    </p>
                    <div className=" relative my-7 flex flex-row items-center justify-between rounded-lg p-3 outline outline-1 outline-[#E3E3E3]">
                      <p className="text-sm text-black ">your-file-here.PDF</p>
                      <button>
                        <img className="flex justify-end" src={esc} alt="..." />
                      </button>
                    </div>
                  </div>
                  <div className="my-5">
                    {isViewMode ? (
                      ""
                    ) : (
                      <p className=" text-sm font-semibold text-[#92929D]">
                        Uploading{" "}
                      </p>
                    )}
                    <div className="my-7 flex flex-row items-center justify-between rounded-lg p-3 outline outline-1 outline-[#11AF22]">
                      <p className="text-xs text-black ">document-name.PDF</p>
                    </div>
                    <div className="my-7 flex flex-row items-center justify-between rounded-lg p-3 outline outline-1 outline-[#11AF22]">
                      <p className="text-xs text-black ">
                        image-name-goes-here.png
                      </p>
                    </div>
                  </div>
                  {isViewMode ? (
                    ""
                  ) : (
                    <Button
                      className="rounded-[15px]  bg-[#280559]"
                      disabled={isViewMode}
                    >
                      <div className="flex flex-row items-center justify-center">
                        <img src={up} alt="..." />

                        <FileUploader
                          multiple={true}
                          handleChange={handlefileChange}
                          name="file"
                          types={fileTypes}
                        >
                          <p className="p-1 px-[11px] text-base font-medium normal-case text-white">
                            Upload Document
                          </p>
                        </FileUploader>
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
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
              {/* <NavLink to="leads"> */}
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
            </>
          )}
          {/* </NavLink> */}
        </form>
      </div>
    </>
  );
}

export default AddNewApplication;
