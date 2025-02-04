import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter, map, of, tap } from 'rxjs';
import { HomeService } from '../services/home.service';
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
  


  title = null;

constructor(private homeService: HomeService){

}
  clientes!: Pessoas;
  displayedColumns: string[] = ['matricula', 'nome', 'idade', 'serie'];
  dataSource !: MatTableDataSource<any>
  ngOnInit(){ 
      this.homeService.getCLientes().subscribe(clientes => {
        this.clientes = clientes;
        this.dataSource = new MatTableDataSource(this.clientes);
      })
    }

}