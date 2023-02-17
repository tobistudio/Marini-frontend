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
} from "./actionType";
import axios from "axios";
import { ENV } from "@/config";

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
