import { Component, OnInit } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import {MatDialog} from '@angular/material/dialog';
import { ServiciobienestarService } from '../serviciobienestar/serviciobienestar.service';


@Component({
  selector: 'app-add-service-form',
  templateUrl: './add-service-form.component.html',
  styleUrls: ['./add-service-form.component.css']
})


export class AddServiceFormComponent implements OnInit {

 

  constructor(private dialogRef : MatDialog) { }



  ngOnInit() {

    }

  crearCard()
  {

  }

  close(){

  }

}
