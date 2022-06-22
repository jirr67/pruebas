import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-tabla-listado',
  templateUrl: './tabla-listado.component.html',
  styleUrls: ['./tabla-listado.component.css']
})
export class TablaListadoComponent implements OnInit {
  @Input('users') users:any;
  constructor() { }

  displayedColumns: string[] = ["name","email","city","phone"];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator,{static:true})paginator!: MatPaginator;
  @ViewChild(MatSort,{static:true})sort!: MatSort;

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getValueFromInput(event:any):any{
    return (<HTMLInputElement>event.target).value;
  }

  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
  }


  ngOnInit(): void {
    this.dataSource.data=this.users;
    this.dataSource.paginator = this.paginator
  }

}
