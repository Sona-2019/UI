import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DeviceByIdService } from './DeviceById.service';

@Component({
  selector: 'app-device-data-by-id',
  templateUrl: './device-data-by-id.component.html',
  styleUrls: ['./device-data-by-id.component.css']
})
export class DeviceDataByIdComponent implements OnInit {
  deviceDataById: Device[];
  visible:boolean=false;
  isShown: boolean;
  deviceRelatedData: Device[];
  constructor(public restApi: DeviceByIdService) { }

  ngOnInit(){
    
  }
 
  openRelatedDevicesView(deviceId:any) {
    this.visible=true;
    this.restApi.getDashboardrelatedData(deviceId).subscribe((data:any) => {
     
        this.deviceRelatedData=data.returnedResult;
   
    });
    this.restApi.getDashboardData(deviceId).subscribe((data:any) => {
     
      this.deviceDataById=data.returnedResult;
 
  });
  }
  
}
