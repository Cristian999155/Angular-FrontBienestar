import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../model/booking';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(bookings: Booking[], filterPost: String){




   if(bookings?.length === 0 || filterPost === '') {
     return bookings;
   }else {
     return bookings.filter((booking) => {
       return booking.personId.name.toLowerCase() === filterPost.toLowerCase()


     })
   }


  }

}
