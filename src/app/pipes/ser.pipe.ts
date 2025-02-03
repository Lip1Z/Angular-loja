import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ser'
})
export class SerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   let serie = '4º';

   if(value === '1 Semestre'){
    serie = '1º'
   }
  
   return serie;

}
}
