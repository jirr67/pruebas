import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(public service: UsuariosService) { }
  users: any=[];
  usersReady=false;
  ngOnInit(): void {
    this.service.listadoUsuarios().subscribe(
      (response)=>{
        this.users=response;
        this.usersReady=true
      },
      (error)=>{
        //Normalmente uso snackBar de angular materials para este tipo de alertas. Como es prueba técnica lo obviaré.
      }
    )
  }

}
