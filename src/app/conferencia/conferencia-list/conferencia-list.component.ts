import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  conferencias : Array<Conferencia> =[];
  constructor() { }

  ngOnInit() {
  }

}
