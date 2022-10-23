import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking';
import { BookingserviceService } from '../model/bookingservice.service';

@Component({
  selector: 'app-tablereport',
  templateUrl: './tablereport.component.html',
  styleUrls: ['./tablereport.component.css']
})
export class TablereportComponent implements OnInit {



  booking : Booking = new Booking();
  listbooking: Booking[];


  constructor(private bookingservice: BookingserviceService) { }

  filterPost: string= '';

  ngOnInit(): void {
    this.listBokings();
  }


  listBokings(): void{
    this.bookingservice.getReservas().subscribe(
     booking => this.listbooking = booking
   );
  }

}
