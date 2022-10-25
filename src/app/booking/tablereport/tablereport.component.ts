import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../model/booking';
import { BookingserviceService } from '../model/bookingservice.service';

@Component({
  selector: 'app-tablereport',
  templateUrl: './tablereport.component.html',
  styleUrls: ['./tablereport.component.css']
})
export class TablereportComponent implements OnInit {

    range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  booking : Booking = new Booking();
  listbooking: Booking[];


  constructor(private bookingservice: BookingserviceService, private datePipe : DatePipe,  private activatedRoute: ActivatedRoute) { }

  filterPost: string= '';

  ngOnInit(): void {
    this.listBokings();
  }


  listBokings(): void{
    this.bookingservice.getReservas().subscribe(
     booking => this.listbooking = booking
   );

  }

  listaBookingsByDate(){
   const dateStart = this.datePipe.transform(this.range.controls.start.value, 'yyy-MM-dd') as unknown as Date;
   const dateEnd =  this.datePipe.transform(this.range.controls.end.value, 'yyy-MM-dd') as unknown as Date;
// this.bookingservice.geReservasId(id).subscribe((serviciobienestar) => this.listService = serviciobienestar )
   this.bookingservice.geReservasByDate(dateStart, dateEnd).subscribe(
    personas => this.listbooking = personas
     )


  }

  filrarPorFecha(): void{
  //console.log(this.range.controls.start.value.format('dd-MM-YYYY'))
   //var mydate = new Date(this.datePipe.transform(this.range.controls.start.value, 'yyy-MM-dd')?.toString())
  console.log(this.datePipe.transform(this.range.controls.start.value, 'yyyy-MM-dd'));
//  console.log(this.range.controls.end.value)
  }

}
