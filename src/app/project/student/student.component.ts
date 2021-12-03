import { Component, OnInit } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  studentData: Student[];
 
  grades=[];
  averages=[];
  index=[];
  constructor(public restApi: StudentService) { }

  ngOnInit(){
    this.loadDashboard();
    
  }
  loadDashboard() {
    this.restApi.getDashboardData().subscribe((data:any) => {
     
        this.studentData=data.students;
        for (var i = 0; i < data.students.length; i++) {
        this.grades.push(data.students[i].grades);
       
        }
        for (var val of this.grades) {
          this.averageOfArray(val);
        }
         
    });
  }
  averageOfArray(val) {
    var i = 0, sum = 0, len = val.length;
    while (i < len) {
        sum = sum + parseInt(val[i++]);
       
    }
   
    var aver= sum / len;
    this.averages.push(aver);
    for (var j = 0; j < this.studentData.length; j++){
    this.studentData[j].average = this.averages[j];
   
 }
}

}
