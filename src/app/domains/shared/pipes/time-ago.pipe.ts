import { Pipe, PipeTransform } from '@angular/core';
import {formatDistance} from 'date-fns'
@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(fechaCreacion: string ): string {
    const date =new Date(fechaCreacion)
    const today = new Date();

    return formatDistance(today,date);

  }

}
