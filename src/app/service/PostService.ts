import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Injectable()
export class PostService {
  constructor(private router: Router) {}

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
          validateStatus: (status) => this.redirectErrorPage(status),
        }
      )
      .then(() => {
        result = true;
      })
      .catch((e: AxiosResponse) => {
        return result;
      });
    return result;
  };

  redirectErrorPage = (status) => {
    if (status >= 500) {
      window.location.href = '/';
    }
    return status < 500;
  };
}
