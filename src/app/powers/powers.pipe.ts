import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powers'
})
export class powersPipe implements PipeTransform {
  transform(value: number): string {
    if(value <= 2) {
      return value + " (weak)";
    } else if(value >= 3 && value < 5) {
      return value + " (strong)";
    } else {
      return value + " (unbelievable)";
    }
  }
}
