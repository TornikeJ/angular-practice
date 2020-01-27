import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value.length > 60) {
      return value.slice(0, 60) + '...';
    }
    return value;
  }

}
