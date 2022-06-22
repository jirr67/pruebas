import { Pipe, PipeTransform } from "@angular/core";
import {fechaEnum} from 'src/app/Modules/utils/utils'; 

@Pipe(
  {
    name:'fecha'
  }  
)


export class FechaPipe implements PipeTransform{
    transform(value: any): string {
      let anio = value.split("-")
      let mes = anio[1].split("-")

        return fechaEnum[Number(mes[0])-1] + " de "+anio[0];
    }

}