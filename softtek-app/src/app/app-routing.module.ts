import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./Modules/usuarios/usuarios.module').then(m => m.UsuariosModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
