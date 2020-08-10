import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { Observable, of } from 'rxjs';

@Injectable()
export class FileService {
  constructor() {}

  upload = async (formData: FormData): Promise<IUserInfo> => {
    return axios.post(
      `${config.baseURL}upload?id=${parseInt(localStorage.getItem('eId'))}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf-8',
        },
      }
    );
  };

  getDoc = async (id: number): Promise<IDocData[]> => {
    const result = await axios.get(
      `${config.baseURL}viewAllDocs/?eid=${parseInt(
        localStorage.getItem('eId')
      )}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf-8',
        },
      }
    );
    return result.data;
  };

  downLoad = (fileName: string, uId: number) => {
    axios.post(`${config.baseURL}download?fileName=${fileName}&id=${uId}`);
  };
}
