import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(items: any[], arg1: number, arg2: number): any {
    let data: any[] = [];
    let index = 0;
    let perPage = arg1;
    console.log(items);



    for (let val of items) {
      console.log(index);
      if (index >= (arg2 * perPage) && index < (arg2 + 1) * perPage) {
        console.log(index);
        data.push(val);

      }
      index++;
    }
    console.log(data);
    return data;

  }
  }

