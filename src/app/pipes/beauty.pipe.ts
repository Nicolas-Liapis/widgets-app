import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beauty'
})
export class BeautyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let str = value.toString().replace(',', ': ');
    str = str.substring(0, str.length - 2);
    if (str === 'Status: Status1' || str === 'Status: Status2' 
      ||str === 'Status: Status3' ||str === 'Status: Status0') {
      str = '';
    } 

    return str;
  }

}
