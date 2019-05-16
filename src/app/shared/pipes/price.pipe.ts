import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(price: string) {
    return parseFloat(price)
      .toFixed(2)
      .replace('.', ',')
  }
}
