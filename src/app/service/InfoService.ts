import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config, redirectErrorPage } from '../config/config';
import { Router } from '@angular/router';

@Injectable()
export class InfoService {
  constructor(private router: Router) {}

  getPersonalInfo = async (
    personId: number
  ): Promise<IPersonalInfoResponse> => {
    const personalInfo = await axios.get(
      `${config.baseURL}/personInfo?personId=${personId}`,
      {
        validateStatus: (status) => redirectErrorPage(status),
      }
    );

    return personalInfo.data;
  };

  getHousingInfo = async (personId: string): Promise<IHouse> => {
    const houseInfo = await axios.get(
      `${config.baseURL}/houseDetail/house/?personId=${personId}`,
      {
        validateStatus: (status) => this.redirectErrorPage(status),
      }
    );

    return houseInfo.data;
  };

  getHousingEmployees = async (
    personId: string
  ): Promise<IHouseTenantsInfo> => {
    const houseInfo = await axios.get(
      `${config.baseURL}/houseDetail/house/tenants?personId=${personId}`,
      {
        validateStatus: (status) => this.redirectErrorPage(status),
      }
    );
    return houseInfo.data;
  };

  getFacilityReport = async (
    personId: number
  ): Promise<IFacilityIssueResponse> => {
    const houseInfo = await axios.get(
      `${config.baseURL}/houseDetail/facility/list?personId=${personId}`,
      {
        validateStatus: (status) => this.redirectErrorPage(status),
      }
    );
    return houseInfo.data;
  };

  redirectErrorPage = (status) => {
    if (status >= 500) {
      window.location.href = '/';
    }
    return status < 500;
  };
}

  getHousingInfo = async (personId: string): Promise<IHouse> => {
    const houseInfo = await axios.get(
      `${config.baseURL}/houseDetail/house/?personId=${personId}`,
      {
        validateStatus: (status) => redirectErrorPage(status),
      }
    );

    return houseInfo.data;
  };

  getHousingEmployees = async (
    personId: string
  ): Promise<IHouseTenantsInfo> => {
    const houseInfo = await axios.get(
      `${config.baseURL}/houseDetail/house/tenants?personId=${personId}`,
      {
        validateStatus: (status) => redirectErrorPage(status),
      }
    );
    return houseInfo.data;
  };

  getFacilityReport = async (
    personId: number
  ): Promise<IFacilityIssueResponse> => {
    const houseInfo = await axios.get(
      `${config.baseURL}/houseDetail/facility/list?personId=${personId}`,
      {
        validateStatus: (status) => redirectErrorPage(status),
      }
    );
    return houseInfo.data;
  };
}
