import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Pessoa{
  matricula: number;
  nome: string;
  idade: number;
  serie: string;
}

export interface Pessoas extends Array<Pessoa>{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  matricula!: Pessoas;
  title = null;

  clientes = [
  ]
  displayedColumns: string[] = ['matricula', 'nome', 'idade', 'serie'];
  dataSource !: MatTableDataSource<any>
  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.matricula);   

    this.matricula[0].idade
  } 


}