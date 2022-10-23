
import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Serviciobienestar } from './model/serviciobienestar';
import { ServiciobienestarService } from './model/serviciobienestar.service';
import { ServicetableComponent } from './servicetable/servicetable.component';


@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
//  @ViewChild(ServiceCardComponent) componenteAdd:ServiceCardComponent;
serviciobienestar : Serviciobienestar = new Serviciobienestar();


  constructor(private dialogRef: MatDialog, private bienestarService: ServiciobienestarService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.cargarServicio();
  }

  cargarServicio(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
       this.bienestarService.geServicioId(id).subscribe((serviciobienestar) => this.serviciobienestar = serviciobienestar )
     }
    })
  }


  public create(): void {

  var sede = (<HTMLInputElement>document.getElementById('sede')).value;


  if(sede == "Santa Ana")
  {
    this.serviciobienestar.campusId = {id: 1, name: "Santa Ana", address: "Salado"}

  } else {
    this.serviciobienestar.campusId = {id: 2, name: "Universidad De Ibagué", address: "Universidad"}
  }
  
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
