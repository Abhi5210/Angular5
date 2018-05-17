import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(dummy: any, price: any): any {

    return price<1500?"OFFER20 (20% discount)":"No Offer";
  }

}
