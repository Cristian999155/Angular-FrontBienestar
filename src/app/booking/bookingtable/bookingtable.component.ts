import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking';
import { BookingserviceService } from '../model/bookingservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Serviciobienestar } from 'src/app/serviciobienestar/model/serviciobienestar';

@Component({
  selector: 'app-bookingtable',
  templateUrl: './bookingtable.component.html',
  styleUrls: ['./bookingtable.component.css']
})
export class BookingtableComponent implements OnInit {
  serviciobienestar : Serviciobienestar = new Serviciobienestar();
  listService: Serviciobienestar[];

  booking : Booking = new Booking();
  listbooking: Booking[];

  constructor(private bookingservice: BookingserviceService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){

      // this.bookingservice.geReservasId(id).subscribe((serviciobienestar) => this.listService = serviciobienestar )
      this.bookingservice.geReservasId(id).subscribe(
         personas => this.listbooking = personas
      )
     }
    })
  }

  listBokings(): void{
    this.bookingservice.getReservas().subscribe(
     booking => this.listbooking = booking
   );
  }

}
