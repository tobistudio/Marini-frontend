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
  DELETE_BACKUP_FILE,
  DOWNLOAD_BACKUP_FILE,
  RESTORE_BACKUP_FILE,
} from "../actions/actionType";

const initialState = {
  universities: [],
  programms: [],
  leads: [],
  applications: [],
  currency: [],
  backups: [],
  branch: [null],
  users: [],
  activities: [],
  properties: [],
  //
  viewsUniversity: [null],
  viewLeads: [null],
  viewProgramme: [null],
  viewApplications: [null],
  viewCurrency: [null],
  viewBranch: [null],
  viewUser: [null],
  //
  deleteBackupFile: [null],
  downloadBackupFile: [null],
  restoreBackupFile: [null],
};
const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ALL_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload,
      };
    case LIST_ALL_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case LIST_ALL_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };
    case LIST_ALL_CURRENCIES:
      return {
        ...state,
        currency: action.payload,
      };
    case LIST_PROGRAMMS:
      return {
        ...state,
        programms: action.payload,
      };
    case LIST_ALL_BACKUPS:
      return {
        ...state,
        backups: action.payload,
      };
    case LIST_ALL_BRANCHES:
      return {
        ...state,
        branch: action.payload,
      };
    case LIST_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LIST_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case LIST_ALL_PROERTIES:
      return {
        ...state,
        properties: action.payload,
      };

    //
    case VIEW_UNIVERSITY_DETAILS:
      return {
        ...state,
        viewsUniversity: action.payload,
      };
    case VIEW_LEAD_DETAILS:
      return {
        ...state,
        viewLeads: action.payload,
      };
    case VIEW_PROGRAMME_DETAILS:
      return {
        ...state,
        viewProgramme: action.payload,
      };
    case APPLICATION_DETAILS:
      return {
        ...state,
        viewApplications: action.payload,
      };
    case VIEW_CURRENCY_DETAILS:
      return {
        ...state,
        viewCurrency: action.payload,
      };
    case VIEW_ALL_BRANCH:
      return {
        ...state,
        viewBranch: action.payload,
      };
    case DELETE_BACKUP_FILE:
      return {
        ...state,
        deleteBackupFile: action.payload,
      };
    case DOWNLOAD_BACKUP_FILE:
      return {
        ...state,
        downloadBackupFile: action.payload,
      };
    case RESTORE_BACKUP_FILE:
      return {
        ...state,
        restoreBackupFile: action.payload,
      };
    case VIEW_ALL_USERS:
      return {
        ...state,
        viewUser: action.payload,
      };
    default:
      return state;
  }
};
export default universitiesReducer;
