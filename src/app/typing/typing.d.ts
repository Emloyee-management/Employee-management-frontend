declare interface ILoginInfo {
  userInfo: IUserInfo;
  scopeId: number;
  token: string;
}

declare interface IUserInfo {
  id: number;
  userName: string;
  email: string;
  password: String;
  personId: number;
  createDate: string;
  modificationDate: string;
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
