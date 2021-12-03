import { Component, OnInit, ViewChild } from '@angular/core';
import { Device } from '../device';
import { DeviceDataByIdComponent } from '../device-data-by-id/device-data-by-id.component';
import { DeviceControlService } from './deviceControl.service';

@Component({
  selector: 'app-device-control',
  templateUrl: './device-control.component.html',
  styleUrls: ['./device-control.component.css']
})
export class DeviceControlComponent implements OnInit {
  @ViewChild(DeviceDataByIdComponent) quickviewchild: DeviceDataByIdComponent;
  deviceData: Device[];
  isShown: boolean;
  constructor(public restApi: DeviceControlService) { }

  ngOnInit() {
    this.isShown = true; 
    this.loadDashboard();
  }
  loadDashboard() {
    this.restApi.getDashboardData().subscribe((data:any) => {
     
        this.deviceData=data.returnedResult;
   
    });
  }
  openQuickview(deviceId:any)
{
  this.isShown = false; 
  this.quickviewchild.openRelatedDevicesView(deviceId);
 
}
}
