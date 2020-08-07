import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable()
export class InfoService {
  constructor() {}

  

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

  getInfo = () => {
      axios.get(
          `${config.baseURL}`
      ).then((data) => {
          return data.data;
      }
          
      )
  }
};
