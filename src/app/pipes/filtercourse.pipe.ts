import { Pipe, PipeTransform } from '@angular/core';
import {course} from '../course';
@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(cources: course[], pricerange: any): any {
let temp:course[]=[];
if(pricerange=="High price"){
  for(let x in cources)
    if(cources[x].price>15000)
        temp.push(cources[x]);
} else if(pricerange=="Moderate price"){
  
} else if(pricerange=="Normal price"){
  
} else{
  return cources;
}

  }

}
