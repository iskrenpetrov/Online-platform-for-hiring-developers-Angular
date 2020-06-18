import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  company: string;
  position: number;
  posname: string;
  level: string;
  location: string;
  salary: number;
  view: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: '/job1'},
  {position: 2, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: '/job1'},
  {position: 3, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: '/job1'},
  {position: 4, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: '/job1'},
  {position: 5, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: '/job1'},
  {position: 6, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: '/job1'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'company', 'posname', 'level', 'location', 'salary', 'view'];
  dataSource = ELEMENT_DATA;
}
