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
  {position: 1, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senior', location: 'Sofia', salary: 6500, view: 'https://google.bg'},
  {position: 2, company: 'sGoogle', posname: 'Front-ensd developer with AngularJS', level: 'Sesnior', location: 'Sosfia', salary: 65200, view: 'htdtps://google.bg'},
  {position: 3, company: 'Google', posname: 'Front-end developer with AngularJS', level: 'Senisor', location: 'Sosfia', salary: 65020, view: 'httdps://google.bg'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  displayedColumns: string[] = ['position', 'company', 'posname', 'level', 'location', 'salary', 'view'];
  dataSource = ELEMENT_DATA;
}
