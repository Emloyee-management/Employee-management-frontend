import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config, redirectErrorPage } from '../config/config';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Injectable()
export class PostService {
  constructor(private router: Router) {}

  postOnboardingForm = async (
    firstName: string,
    lastName: string,
    middleName: string,
    cellphone: string,
    alternatePhone: string,
    ssn: string,
    dob: string,
    gender: string,
    email: string,
    avatar: string,
    car: string,
    visaStartDate: string,
    visaEndDate: string,
    driverLicence: string,
    driverL_expirationDate: string,
    visaType: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    zipcode: string,
    stateName: string,
    stateAbbr: string,
    reference_firstName: string,
    reference_lastName: string,
    reference_middleName: string,
    reference_cellphone: string,
    reference_email: string,
    reference_addressLine1: string,
    reference_addressLine2: string,
    reference_city: string,
    reference_zipcode: string,
    reference_stateName: string,
    reference_stateAbbr: string,
    reference_relationship: string,
    emergency_firstName: string,
    emergency_lastName: string,
    emergency_middleName: string,
    emergency_cellphone: string,
    emergency_email: string,
    emergency_relationship: string,
    userName: string,
    personId: string
  ): Promise<boolean> => {
    let result = false;
    await axios
      .post(
        `${config.baseURL}applicationForm?userName=${userName}&personId=${personId}`,
        {
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
          cellphone: cellphone,
          alternatePhone: alternatePhone,
          ssn: ssn,
          dob: dob,
          gender: gender,
          email: email,
          avatar: avatar,
          car: car,
          visaStartDate: visaStartDate,
          visaEndDate: visaEndDate,
          driverLicence: driverLicence,
          driverL_expirationDate: driverL_expirationDate,
          visaType: visaType,
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          city: city,
          zipcode: zipcode,
          stateName: stateName,
          stateAbbr: stateAbbr,
          reference_firstName: reference_firstName,
          reference_lastName: reference_lastName,
          reference_middleName: reference_middleName,
          reference_cellphone: reference_cellphone,
          reference_email: reference_email,
          reference_addressLine1: reference_addressLine1,
          reference_addressLine2: reference_addressLine2,
          reference_city: reference_city,
          reference_zipcode: reference_zipcode,
          reference_stateName: reference_stateName,
          reference_stateAbbr: reference_stateAbbr,
          reference_relationship: reference_relationship,
          emergency_firstName: emergency_firstName,
          emergency_lastName: emergency_lastName,
          emergency_middleName: emergency_middleName,
          emergency_cellphone: emergency_cellphone,
          emergency_email: emergency_email,
          emergency_relationship: emergency_relationship,
        }
        // {
        //   validateStatus: (status) => redirectErrorPage(status),
        // }
      )
      .then(() => {
        result = true;
      })
      .catch((e: AxiosResponse) => {
        // redirectErrorPage(500);
      });
    return result;
  };

  postFacilityReport = async (
    title: string,
    description: string,
    employeeId: number
  ): Promise<boolean> => {
    let result = false;
    await axios
      .post(
        `${
          config.baseURL
        }houseDetail/facility/list?title=${title}&description=${description}&employeeID=${employeeId}&reportDate=${moment(
          moment.now()
        ).format('MM/DD/YYYY')}&status=open`,
        {
          validateStatus: (status) => redirectErrorPage(status),
        }
      )
      .then(() => {
        result = true;
      })
      .catch((e: AxiosResponse) => {
        redirectErrorPage(500);
      });
    return result;
  };
}
