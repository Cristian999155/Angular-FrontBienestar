
import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { ServicetableComponent } from '../servicetable/servicetable.component';
import { Serviciobienestar } from './serviciobienestar';
import { ServiciobienestarService } from './serviciobienestar.service';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
//  @ViewChild(ServiceCardComponent) componenteAdd:ServiceCardComponent;
serviciobienestar : Serviciobienestar = new Serviciobienestar();


  constructor(private dialogRef: MatDialog, private bienestarService: ServiciobienestarService) {

  }

  ngOnInit(): void {

  }

  public create(): void {
  this.bienestarService.create(this.serviciobienestar).subscribe()

 console.log(this.serviciobienestar)
 }



  listAndCloseService()
  {

    let addForm = new ServicetableComponent(this.bienestarService, this.dialogRef )
  //  addForm.listServices();
    addForm.close();

  }


}
