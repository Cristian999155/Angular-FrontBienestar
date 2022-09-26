import { Component, OnInit } from '@angular/core';
import { Serviciobienestar } from '../serviciobienestar/serviciobienestar';
import { ServiciobienestarService } from '../serviciobienestar/serviciobienestar.service';
import {MatDialog} from '@angular/material/dialog';
import { AddserviceComponent } from '../serviciobienestar/addservice.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicetable',
  templateUrl: './servicetable.component.html',
  styleUrls: ['./servicetable.component.css']
})
export class ServicetableComponent implements OnInit {

servicioBienestar : Serviciobienestar = new Serviciobienestar();
listService: Serviciobienestar[];
  constructor(private ser: ServiciobienestarService, private dialogRef : MatDialog) { }

  ngOnInit(): void {
 this.listServices();

  }

 listServices(){
   this.ser.getServicios().subscribe(
   listService => this.listService = listService
 );
 }




    openAddForm(){
      this.dialogRef.open(AddserviceComponent);
    }

    close(){

      this.dialogRef.closeAll();

    }


}
