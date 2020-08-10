declare interface ILoginInfo {
  userInfo: IUserInfo;
  scopeId: number;
  token: string;
}

declare interface IUserInfo {
  id: number;
  userName: string;
  email: string;
  password: string;
  personId: number;
  createDate: string;
  modificationDate: string;
  avartar: Blob;
  fullname: string;
  title: string;
  eid: number;
  startDate: string;
  cellPhone: string;
}

declare interface IPersonalInfoResponse {
  firstName: string;
  lastName: string;
  avatar: string;
  dob: string;
  gender: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateName: string;
  zipCode: string;
  personalEmail: string;
  workEmail: string;
  cellPhone: string;
  alternatePhone: string;
  visaType: string;
  visaStartDate: string;
  visaEndDate: string;
  employmentStartDate: string;
  employmentEndDate: string;
  title: string;
  ssn: string;

  //change later
  emergencyContactFullname: string;
  emergencyContactPhone: string;
  emergencyContactAddress: string;

  //change later
  personalDocumentTitle: string;
}

declare interface IHouse {
  id: number;
  contactId: number;
  address: string;
  numberOfPerson: number;
}

declare interface IHouseTenantsInfo {
  address: string;
  employeeList: IHouseEmployee[];
}

declare interface IHouseEmployee {
  firstName: string;
  middleName: string;
  lastName: string;
  cellphone: string;
}

declare interface IReportResponse {
  firstName: string;
  middleName: string;
  lastName: string;
  id: number;
  title: string;
  description: string;
  reportDate: string;
  status: string;
}

declare interface ICommentResponse {
  firstName: string;
  middleName: string;
  lastName: string;
  reportID: number;
  comment: string;
  createdDate: string;
}

declare interface IFacilityIssueResponse {
  reportResponse: IReportResponse[];
  commentResponse: ICommentResponse[];
}

declare interface DialogData {
  comments: ICommentResponse[];
}

declare interface IEmployee {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  cellphone: string;
  car: string;
  driverLicense: string;
  driverLicense_expirationDate: string;
  avatar: string;
  dob: string;
  gender: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateName: string;
  zipCode: string;
  stateAbbr: string;
  alternatePhone: string;
  visaType: string;
  visaStartDate: string;
  isaEndDate: string;
  employmentStartDate: string;
  employmentEndDate: string;
  title: string;
  ssn: string;
  appWorkFlowStatus: string;
  emergency_firstname: string;
  emergency_lastname: string;
  emergency_middlename: string;
  emergencyContactPhone: string;
  emergencyContactAddress: string;
  personalDocumentTitle: string;
}
