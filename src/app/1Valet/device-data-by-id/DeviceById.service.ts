import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppConstant from "src/app/Appconstant";
@Injectable({
  providedIn: 'root'
})
export class DeviceByIdService {


dashboardDataAPI : any;
dashboardRelatedDataAPI : any;
constructor(private http: HttpClient) { }
getDashboardData(deviceId : any){


  this.dashboardDataAPI = AppConstant.dashboardDeviceDataByIdURL+ "/" + deviceId;;

  let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json" );

    const value = this.http.get(this.dashboardDataAPI, {
      headers: headers
    });

    return value;

}
getDashboardrelatedData(deviceId : any){


  this.dashboardRelatedDataAPI = AppConstant.dashboardDeviceRelatedDataURL+ "/" + deviceId;;

  let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json" );

    const value = this.http.get(this.dashboardRelatedDataAPI, {
      headers: headers
    });

    return value;

}
}