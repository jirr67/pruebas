import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechaComponent } from './components/fecha/fecha.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'fecha', component: FechaComponent},
      {path: '**', redirectTo: 'fecha'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
