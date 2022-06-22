import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FechaComponent } from './components/fecha/fecha.component';
import { FechaPipe } from 'src/app/pipes/fechaPipe.pipe';


@NgModule({
  declarations: [
    FechaComponent,
    FechaPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  
  ]
})
export class HomeModule { }
