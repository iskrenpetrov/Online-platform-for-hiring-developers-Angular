import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  actions: string;
  company: string;
  position: number;
  posname: string;
  level: string;
  location: string;
  salary: number;
  view: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {actions: '', position: 1, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: 'https://google.bg'},
  {actions: '', position: 2, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: 'https://google.bg'},
  {actions: '', position: 3, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: 'https://google.bg'},
  {actions: '', position: 4, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: 'https://google.bg'},
  {actions: '', position: 5, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: 'https://google.bg'},
  {actions: '', position: 6, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: 'https://google.bg'},
];

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  displayedColumns: string[] = ['actions', 'position', 'company', 'posname', 'level', 'location', 'salary', 'view'];
  dataSource = ELEMENT_DATA;
}
