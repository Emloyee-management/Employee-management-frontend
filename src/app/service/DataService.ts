import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios, { AxiosResponse } from 'axios';
import { config, redirectErrorPage } from '../config/config';

@Injectable()
//@ts-ignore
export class DataService {
  searchOption = [];
  public emp: IEmployee[];
  postUrl: string =
    'https://my-json-server.typicode.com/thuvo22/empProfile/employees';

  constructor(private http: HttpClient) {}

  async getPosts(): Promise<Observable<IEmployee[]>> {
    const employeeList = await axios.get(
      `${config.baseURL}/hiring/personInfoList`,
      { validateStatus: (status) => redirectErrorPage(status) }
    );
    return of(employeeList.data);
  }

  filteredListOptions = () => {
    let emps = this.emp;
    let filteredPostsList = [];
    for (let e of emps) {
      for (let options of this.searchOption) {
        if (options.fullname === e.firstName) {
          filteredPostsList.push(e);
        }
      }
    }
    return filteredPostsList;
  };
}
