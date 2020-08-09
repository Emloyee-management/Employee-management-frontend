import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config, redirectErrorPage } from '../config/config';
import { Observable, of } from 'rxjs';

@Injectable()
export class SessionService {
  userInfo: IUserInfo;

  constructor() {}

  login = async (username: String, password: String): Promise<IUserInfo> => {
    const result = await axios.get(
      `${config.baseURL}/login/?username=${username}&password=${password}`,
      {
        validateStatus: (status) => {
          if (status >= 500) {
            window.location.href = '/**';
          }
          return status < 500;
        },
      }
    );
    this.userInfo = result.data;
    return this.userInfo;
  };

  register = async (
    username: string,
    email: string,
    password: string
  ): Promise<IUserInfo> => {
    const result = await axios.post(
      `${config.baseURL}/registerUser/?username=${username}&email=${email}&password=${password}`,
      {
        validateStatus: (status) => redirectErrorPage(status),
      }
    );
    return result.data;
  };

  logout = () => {};

  getUserinfo = (): Observable<IUserInfo> => {
    return of(this.userInfo);
  };
}
