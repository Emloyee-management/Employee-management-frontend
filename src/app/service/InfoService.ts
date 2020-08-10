import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config, redirectErrorPage } from '../config/config';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';

@Injectable()
export class InfoService
{
  constructor(private router: Router) { }

  getPersonalInfo = async (
    personId: number
  ): Promise<IPersonalInfoResponse> =>
  {
    const personalInfo = await axios.get(
      `${ config.baseURL }/personInfo?personId=${ personId }`,
      // {
      //   validateStatus: (status) => redirectErrorPage(status),
      // }
    );

    return personalInfo.data;
  };

  getHousingInfo = async (personId: string): Promise<IHouse> =>
  {
    const houseInfo = await axios.get(
      `${ config.baseURL }/houseDetail/house/?personId=${ personId }`,
      // {
      //   validateStatus: (status) => redirectErrorPage(status),
      // }
    );

    return houseInfo.data;
  };

  getHousingEmployees = async (
    personId: string
  ): Promise<IHouseTenantsInfo> =>
  {
    const houseInfo = await axios.get(
      `${ config.baseURL }/houseDetail/house/tenants?personId=${ personId }`,
      // {
      //   validateStatus: (status) => redirectErrorPage(status),
      // }
    );
    return houseInfo.data;
  };

  getFacilityReport = async (
    personId: number
  ): Promise<IFacilityIssueResponse> =>
  {
    const houseInfo = await axios.get(
      `${ config.baseURL }/houseDetail/facility/list?personId=${ personId }`,
      // {
      //   validateStatus: (status) => redirectErrorPage(status),
      // }
    );
    return houseInfo.data;
  };

  getAllEmployee = async (): Promise<IEmployee[]> => {
    const employeeList = await axios.get(
      `${config.baseURL}/hiring/personInfoList`,
      { validateStatus: (status) => redirectErrorPage(status) }
    );
    return employeeList.data;
  };

  getHouseDetails = async (
    houseId: number
  ): Promise<IFacilityInfo> =>
  {
    const houseDetail = await axios.get(
      `${ config.baseURL }/getHouseDetail?hid=${ houseId }`,
      // {
      //   validateStatus: (status) => redirectErrorPage(status),
      // }
    );
    return houseDetail.data;
  }

  getFacilityInfo = async (

  ): Promise<IHouseInfo[]> =>
  {
    const facilityInfo = await axios.get(
      `${ config.baseURL }/viewAllHouses`,
      // {
      //   validateStatus: (status) => redirectErrorPage(status),
      // }
    );
    return facilityInfo.data;
  }
}
