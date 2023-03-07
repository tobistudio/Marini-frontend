import {
  LIST_ALL_UNIVERSITIES,
  LIST_ALL_LEADS,
  LIST_ALL_APPLICATIONS,
  LIST_PROGRAMMS,
  LIST_ALL_CURRENCIES,
  LIST_ALL_BRANCHES,
  LIST_ALL_USERS,
  LIST_ALL_ACTIVITIES,
  LIST_ALL_PROERTIES,
  // EDIT_UNIVERSITIE,
  VIEW_UNIVERSITY_DETAILS,
  VIEW_LEAD_DETAILS,
  VIEW_PROGRAMME_DETAILS,
  APPLICATION_DETAILS,
  VIEW_CURRENCY_DETAILS,
  LIST_ALL_BACKUPS,
  VIEW_ALL_BRANCH,
  VIEW_ALL_USERS,
  //
  DELETE_BACKUP_FILE,
  DOWNLOAD_BACKUP_FILE,
  RESTORE_BACKUP_FILE,
  // Anasite - Edits
  LIST_ALL_PROGRAM_LEVELS,
  VIEW_PROGRAM_LEVEL,
  //
  LIST_ALL_PROGRAM_CATEGORYS,
  VIEW_PROGRAM_CATEGORY,
  //
  LIST_ALL_QUALIFICATION_TYPES,
  VIEW_QUALIFICATION_TYPE,
  //
  LIST_ALL_UNIVERSITY_TYPES,
  VIEW_UNIVERSITY_TYPE,
  //
  LIST_ALL_LEAD_GROUPS,
  VIEW_LEAD_GROUP,
  //
  LIST_ALL_INTERESTED_PROGRAMS,
  VIEW_INTERESTED_PROGRAM,
  //
  LIST_ALL_APPLICATION_MODULE_STATUSS,
  VIEW_APPLICATION_MODULE_STATUS,
  //
  LIST_ALL_LEADS_MANAGMENT_MODULE_STATUS,
  VIEW_LEADS_MANAGMENT_MODULE_STATUS,
  //
  LIST_ALL_INVOICE_MODULE_STATUSS,
  VIEW_INVOICE_MODULE_STATUS,
  //
  // Module: Invoice (1)
  LIST_ALL_COMMISSION_INVOICES,
  VIEW_COMMISSION_INVOICE,
  DELETE_COMMISSION_INVOICE,
  EDIT_COMMISSION_INVOICE,
  //
  // login
  SING_IN 
} from "./actionType";
import axios from "axios";
import { ENV } from "@/config";

// Anasite - Edits: Adding list program files
export const listProgramLevels = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/programlevel/listProgramLevels?${qs}`
  );
  console.log("data.data of list program level uni in action file", data);
  dispatch({
    type: LIST_ALL_PROGRAM_LEVELS,
    payload: data.data,
  });
};
export const viewProgramLevel = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/programlevel/get/${id}`
    //
  );
  console.log("data of view porgram level in action", data);
  dispatch({
    type: VIEW_PROGRAM_LEVEL,
    payload: data.data,
  });
};
//
export const listProgramCategorys = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/programcategory/listProgramCategorys?${qs}`
  );
  console.log("data.data of list program category uni in action file", data);
  dispatch({
    type: LIST_ALL_PROGRAM_CATEGORYS,
    payload: data.data,
  });
};
export const viewProgramCategory = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/programcategory/get/${id}`
    //
  );
  console.log("data of view porgram category in action", data);
  dispatch({
    type: VIEW_PROGRAM_CATEGORY,
    payload: data.data,
  });
};
//
export const listQualificationTypes = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/qualificationtype/listQualificationTypes?${qs}`
  );
  console.log("data.data of list qualification type uni in action file", data);
  dispatch({
    type: LIST_ALL_QUALIFICATION_TYPES,
    payload: data.data,
  });
};
export const viewQualificationType = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/qualificationtype/get/${id}`
    //
  );
  console.log("data of view qualification type in action", data);
  dispatch({
    type: VIEW_QUALIFICATION_TYPE,
    payload: data.data,
  });
};
//
export const listUniversityTypes = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/universitytype/listUniversityTypes?${qs}`
  );
  console.log("data.data of list university type uni in action file", data);
  dispatch({
    type: LIST_ALL_UNIVERSITY_TYPES,
    payload: data.data,
  });
};
export const viewUniversityType = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/universitytype/get/${id}`
    //
  );
  console.log("data of view qualification type in action", data);
  dispatch({
    type: VIEW_UNIVERSITY_TYPE,
    payload: data.data,
  });
};
//
export const listLeadGroups = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(`${ENV.baseUrl}/leadgroup/listLeadGroups?${qs}`);
  console.log("data.data of list lead group uni in action file", data);
  dispatch({
    type: LIST_ALL_LEAD_GROUPS,
    payload: data.data,
  });
};
export const viewLeadGroup = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/leadgroup/get/${id}`
    //
  );
  console.log("data of view lead group in action", data);
  dispatch({
    type: VIEW_LEAD_GROUP,
    payload: data.data,
  });
};
//
export const listInterestedPrograms = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/interestedprogram/listInterestedPrograms?${qs}`
  );
  console.log("data.data of list interested program uni in action file", data);
  dispatch({
    type: LIST_ALL_INTERESTED_PROGRAMS,
    payload: data.data,
  });
};
export const viewInterestedProgram = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/interestedprogram/get/${id}`
    //
  );
  console.log("data of view interested program in action", data);
  dispatch({
    type: VIEW_INTERESTED_PROGRAM,
    payload: data.data,
  });
};
//

// STATUSS
export const listApplicationModuleStatuss = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/applicationmodulestatus/listApplicationModuleStatuss?${qs}`
  );
  console.log("data.data of list interested program uni in action file", data);
  dispatch({
    type: LIST_ALL_APPLICATION_MODULE_STATUSS,
    payload: data.data,
  });
};
export const viewApplicationModuleStatus = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/applicationmodulestatus/get/${id}`
    //
  );
  console.log("data of view applicationModuleStatus in action", data);
  dispatch({
    type: VIEW_APPLICATION_MODULE_STATUS,
    payload: data.data,
  });
};
//
export const listLeadsManagmentModuleStatuss = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/leadsmanagmentmodulestatus/listLeadsManagmentModuleStatuss?${qs}`
  );
  console.log(
    "data.data of list leads managment module status uni in action file",
    data
  );
  dispatch({
    type: LIST_ALL_LEADS_MANAGMENT_MODULE_STATUS,
    payload: data.data,
  });
};
export const viewLeadsManagmentModuleStatus = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/leadsmanagmentmodulestatus/get/${id}`
    //
  );
  console.log("data of view leads managment module status in action", data);
  dispatch({
    type: VIEW_LEADS_MANAGMENT_MODULE_STATUS,
    payload: data.data,
  });
};
//
export const listInvoiceModuleStatuss = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/invoicemodulestatus/listInvoiceModuleStatuss?${qs}`
  );
  console.log(
    "data.data of list invoice module status uni in action file",
    data
  );
  dispatch({
    type: LIST_ALL_INVOICE_MODULE_STATUSS,
    payload: data.data,
  });
};
export const viewInvoiceModuleStatus = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/invoicemodulestatus/get/${id}`
    //
  );
  console.log("data of view invoice module status in action", data);
  dispatch({
    type: VIEW_INVOICE_MODULE_STATUS,
    payload: data.data,
  });
};
//
// Module: Invoice (1)
export const listCommissionInvoices = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(`${ENV.baseUrl}/commissioninvoice/list?${qs}`);
  console.log(
    "data.data of list invoice module status commissioninvoice in action file",
    data
  );
  dispatch({
    type: LIST_ALL_COMMISSION_INVOICES,
    payload: data.data,
  });
};
export const viewCommissionInvoice = (id) => async (dispatch) => {
  console.log(" commisionInvoice param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/commissioninvoice/get/${id}`
    //
  );
  console.log("data of view invoice module status in action", data);
  dispatch({
    type: VIEW_COMMISSION_INVOICE,
    payload: data.data,
  });
};
// The Edit and Delete will be on the module page itself
//
// END
export const listUniversities = (qs) => async (dispatch) => {
  console.log("api url in action file", ENV.baseUrl);
  const data = await axios.get(
    `${ENV.baseUrl}/university/listUniversity?${qs}`
  );
  console.log("data.data of list uni nn action file", data);
  dispatch({
    type: LIST_ALL_UNIVERSITIES,
    payload: data.data,
  });
};

export const listProgramms = (qs) => async (dispatch) => {
  const data = await axios.get(`${ENV.baseUrl}/programme/listProgrammes?${qs}`);
  dispatch({
    type: LIST_PROGRAMMS,
    payload: data.data,
  });
};

export const listLeads = (qs) => async (dispatch) => {
  const data = await axios.get(`${ENV.baseUrl}/lead/listLead?${qs}`);
  dispatch({
    type: LIST_ALL_LEADS,
    payload: data.data,
  });
};

export const listApplications = (qs) => async (dispatch) => {
  const data = await axios.get(
    `${ENV.baseUrl}/applicants/listApplicants?${qs}`
  );
  console.log(qs, "data", data);
  dispatch({
    type: LIST_ALL_APPLICATIONS,
    payload: data.data,
  });
};

export const listCurrencies = (qs) => async (dispatch) => {
  const data = await axios.get(`${ENV.baseUrl}/currencies/list?${qs}`);
  dispatch({
    type: LIST_ALL_CURRENCIES,
    payload: data.data,
  });
};

export const listBackups =
  (qs = "") =>
  async (dispatch) => {
    const data = await axios.get(`${ENV.baseUrl}/backups/list${qs}`);
    dispatch({
      type: LIST_ALL_BACKUPS,
      payload: data.data,
    });
  };

export const listBranches =
  (qs = "") =>
  async (dispatch) => {
    const data = await axios.get(`${ENV.baseUrl}/branch/list?${qs}`);
    dispatch({
      type: LIST_ALL_BRANCHES,
      payload: data.data,
    });
  };

export const listUsers =
  (qs = "") =>
  async (dispatch) => {
    const data = await axios.get(`${ENV.baseUrl}/users/list?${qs}`);
    dispatch({
      type: LIST_ALL_USERS,
      payload: data.data,
    });
  };
//LIST_ALL_BRANCHES

export const viewUniversity = (id) => async (dispatch) => {
  console.log(" Umni param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/university/get/${id}`
    //
  );
  console.log("data of view university in action", data);
  dispatch({
    type: VIEW_UNIVERSITY_DETAILS,
    payload: data.data,
  });
};

export const viewLead = (id) => async (dispatch) => {
  console.log(" lead param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/lead/get/${id}`
    //
  );
  console.log("data of view lead in action", data);
  dispatch({
    type: VIEW_LEAD_DETAILS,
    payload: data.data,
  });
};

export const viewProgramme = (id) => async (dispatch) => {
  console.log(" programme param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/programme/get/${id}`
    //
  );
  console.log("data of view programme in action", data);
  dispatch({
    type: VIEW_PROGRAMME_DETAILS,
    payload: data.data,
  });
};

export const viewApplication = (id) => async (dispatch) => {
  console.log(" appplication param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/applicants/get/${id}`
    //
  );
  console.log("data of view applications in action", data);
  dispatch({
    type: APPLICATION_DETAILS,
    payload: data.data,
  });
};

export const viewCurrency = (id) => async (dispatch) => {
  console.log(" currency param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/currencies/get/${id}`
    //
  );
  console.log("data of view currency in action", data);
  dispatch({
    type: VIEW_CURRENCY_DETAILS,
    payload: data.data,
  });
};

export const viewBranch = (id) => async (dispatch) => {
  console.log(" branch param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/branch/get/${id}`
    // http://localhost:8080/v1/front/branch/get/4
    //
  );
  console.log("data of view brancb in action", data);
  dispatch({
    type: VIEW_ALL_BRANCH,
    payload: data.data,
  });
};

export const viewUser = (id) => async (dispatch) => {
  console.log(" user param id in action method", id);
  // console.log(" Umni param action in action method", action);

  const data = await axios.get(
    `${ENV.baseUrl}/users/get/${id}`
    // http://localhost:8080/v1/front/branch/get/4
    //
  );
  console.log("data of view brancb in action", data);
  dispatch({
    type: VIEW_ALL_USERS,
    payload: data.data,
  });
};

export const removeBackupFile = (fileName) => async (dispatch) => {
  console.log(" file name in delete file in action method", fileName);
  // console.log(" Umni param action in action method", action);

  const data = await axios.delete(
    `${ENV.baseUrl}/backups/delete/${fileName}`
    //
  );
  console.log("data of delete backup file in action", data);
  dispatch({
    type: DELETE_BACKUP_FILE,
    payload: data.data,
  });
};

export const downloadBackupFile = (fileName) => async (dispatch) => {
  console.log(" file name in download function in action method", fileName);
  // console.log(" Umni param action in action method", action);

  // const data = await axios.get(
  //   `${ENV.baseUrl}/backups/download/${fileName}`
  //   //
  // );

  fetch(`${ENV.baseUrl}/backups/download/${fileName}`)
    .then((res) => res.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${fileName}.sql`;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
    });
  // console.log("data of download backup file in action", data);
  // dispatch({
  //   type: DOWNLOAD_BACKUP_FILE,
  //   payload: data.data,
  // });
};

export const restoreBackupFile = (fileName) => async (dispatch) => {
  console.log(" file name in restore function in action method", fileName);
  // console.log(" Umni param action in action method", action);

  const data = await axios.put(
    `${ENV.baseUrl}/backups/restore/${fileName}`
    //
  );
  console.log("data of restore backup file in action", data);
  dispatch({
    type: RESTORE_BACKUP_FILE,
    payload: data.data,
  });
};

export const listActivities = (qs) => async (dispatch) => {
  const data = await axios.get(`${ENV.baseUrl}/activities/list?${qs}`);
  console.log("activities in action ==>", data);
  dispatch({
    type: LIST_ALL_ACTIVITIES,
    payload: data.data,
  });
};

export const listProperties = () => async (dispatch) => {
  const data = await axios.get(`${ENV.baseUrl}/properties/list`);
  console.log("properties in action ==>", data);
  dispatch({
    type: LIST_ALL_PROERTIES,
    payload: data.data,
  });
};

// Login API

export const loginUser = ( user ) => async (dispatch) => {
  try {
    let data = await axios.post(`${ENV.baseUrl}/users/login`, user);
      dispatch({
        type: LIST_ALL_USERS,
        payload: data.data
      });
      localStorage.setItem('access', data.data.roles);
      localStorage.setItem('name', data.data.username);
      return {success: true};
  } catch (err) {
    return {error: err.response.data.message};
  }
}

export const signUp = user => async (dispatch) => {
  try {
    let data = await axios.post(`${ENV.baseUrl}/users/signup`, user);
    if(data) {
      return {success: true};
    }
  } catch (error) {
    return {error: err.response.data.message};
  }
}

export const signOut = (user) => async (dispatch) => {
  try {
    console.log(user);
    localStorage.clear();
    let data = await axios.post(`${ENV.baseUrl}/users/signout`, user);
  } catch (error) {
    return {error: err.response.data.message};
  }
}
