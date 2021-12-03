import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';
import { StudentComponent } from './project/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/fieldset';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { StudenttrialComponent } from './project/studenttrial/studenttrial.component';
import { TagModule } from 'primeng/tag';
import {InputTextModule} from 'primeng/inputtext';
import { DeviceControlComponent } from './1Valet/device-control/device-control.component';
import { DeviceDataByIdComponent } from './1Valet/device-data-by-id/device-data-by-id.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudenttrialComponent,
    DeviceControlComponent,
    DeviceDataByIdComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DataViewModule,
    FieldsetModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    TagModule,
    InputTextModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
