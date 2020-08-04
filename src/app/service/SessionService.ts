import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable()
export class SessionService {
  constructor() {}

  login = async (username: String, password: String): Promise<IUserInfo> => {
    const result = await axios.get(
      `${config.baseURL}/login/?username=${username}&password=${password}`
    );
    return result.data;
  };

  register = async (username: string, email: string, password: string) => {
    axios
      .post(
        `${config.baseURL}/registerUser/?username=${username}&email=${email}&password=${password}`,
        {}
      )
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        console.info(e);
      });
    // return result.data;
  };
}
