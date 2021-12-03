import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstant from "src/app/Appconstant";
@Injectable({
  providedIn: 'root'
})
export class StudentService {


dashboardDataAPI : any;
constructor(private http: HttpClient) { }
getDashboardData(){


  this.dashboardDataAPI = AppConstant.dashboardDataURL;

  let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json" );

    const value = this.http.get(this.dashboardDataAPI, {
      headers: headers
    });

    return value;

}

}
