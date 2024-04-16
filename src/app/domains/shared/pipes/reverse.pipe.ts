import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    // return value.split('').reverse().join();
    let textoInvertido = '';
    for (let i = value.length - 1; i >= 0; i--) {
      textoInvertido += value[i];
    }
    return textoInvertido;
  }

}
