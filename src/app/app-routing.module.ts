import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceControlComponent } from './1Valet/device-control/device-control.component';
import { StudentComponent } from './project/student/student.component';
import { StudenttrialComponent } from './project/studenttrial/studenttrial.component';

const routes: Routes = [{ path: "", redirectTo: "student", pathMatch: "full" },
{ path: "student", component: StudentComponent},
{ path: "studentexample", component: StudenttrialComponent},
{ path: "device", component: DeviceControlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
