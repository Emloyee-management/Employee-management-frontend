import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption=[]
  public emp: Employee[]
  postUrl : string = "https://my-json-server.typicode.com/thuvo22/empProfile/employees"; 

  constructor(
    private http: HttpClient
  ) { }


  getPosts(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.postUrl);
    
  }

  filteredListOptions() 
  {
    let emps = this.emp;
        let filteredPostsList = [];
        for (let e of emps) {
            for (let options of this.searchOption) {
                if (options.fullname === e.fullname) {
                  filteredPostsList.push(e);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
  }
}
