import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  conferencias : Array<Conferencia> =[];
  constructor(private conferenciaService: ConferenciaService) { }

  getConferencias():void{
    this.conferenciaService.getConferencias().subscribe((conferencias) =>{
      this.conferencias = conferencias;

    });
  }

  ngOnInit() {
    this.getConferencias();
  }

}
