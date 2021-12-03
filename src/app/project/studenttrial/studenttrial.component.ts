import { Component, OnInit } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './studenttrial.component.html',
  styleUrls: ['./studenttrial.component.css'],
})
export class StudenttrialComponent implements OnInit {
  studentData: Student[];
  checked: boolean = true;
  grades = [];
  averages = [];
 

  constructor(public restApi: StudentService) {}

  ngOnInit() {
    this.loadDashboard();
  }
  showElement(element) {
    element.visible = !element.visible;
  }
  loadDashboard() {
    this.restApi.getDashboardData().subscribe((data: any) => {
      this.studentData = data.students;
      for (var i = 0; i < data.students.length; i++) {
        this.grades.push(data.students[i].grades);
      }
      for (var val of this.grades) {
        this.averageOfArray(val);
      }
    });
  }
  averageOfArray(val) {
    var i = 0,
      sum = 0,
      len = val.length;
    while (i < len) {
      sum = sum + parseInt(val[i++]);
    }

    var aver = sum / len;
    this.averages.push(aver);
    for (var j = 0; j < this.studentData.length; j++) {
      this.studentData[j].average = this.averages[j];
    }
  }

  tagData = [];
  addTag(newValue: any, student,indexValue) {
    var tagVal =newValue;
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input) => (input.value = ''));
    var stud = this.studentData.find((b) => b.id === student.id);
     const index = this.studentData.findIndex((e) => e.id === student.id); 
     for (var i = 0; i < this.studentData.length; i++) {
      var entry =this.studentData[i];
  
      if (entry.id ==student.id)
      var firstStudent = entry;
  }
    
    
      Object.defineProperty(firstStudent,"tagValues",{
        value: tagVal,
        writable: true,
        enumerable: true,
        configurable: true,
     });
    
  
       //create new div for 
       var tDiv = document.createElement("div");
       tDiv.className = 'tDivStyle';
       let cntent = document.createTextNode(tagVal);
       tDiv.appendChild(cntent);
       document.getElementById('tagDiv').appendChild(tDiv);
}
}
