import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateP'
})
export class DateP extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, 'EEE, d LLL yy');
  }

}
