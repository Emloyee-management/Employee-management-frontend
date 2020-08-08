import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { Router } from '@angular/router';

@Injectable()
export class InfoService {
  constructor(private router: Router) {}

  getPersonalInfo = async (
    personId: number
  ): Promise<IPersonalInfoResponse> => {
    const personalInfo = await axios.get(
      `${config.baseURL}/personInfo?personId=${personId}`
      // {
      //   validateStatus: (status) => {
      //     if (status >= 500) {
      //       window.location.href = '/';
      //     }
      //     return status < 500;
      //   },
      // }
    );
    console.info(personalInfo.data);
    return personalInfo.data;
  };
}
