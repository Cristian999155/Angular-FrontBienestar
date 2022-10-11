import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from './model/persona';
import { PersonaService } from './model/persona.service';
import { UsertableComponent } from './usertable/usertable.component';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-addformuser',
  templateUrl: './addformuser.component.html',
  styleUrls: ['./addformuser.component.css']
})
export class AddformuserComponent implements OnInit {
persona : Persona = new Persona();
personas: Persona[];
  constructor(private personaService: PersonaService, private dialogRef: MatDialog) { }

  ngOnInit(): void {

  }

  public create(): void {
  this.personaService.create(this.persona)
  .subscribe()

  Swal.fire('Nuevo usuario', `El usuarioha sido creado con éxito`, 'success');



}









  listAndCloseService()
  {

  //  let addForm = new ServicetableComponent(this.bienestarService, this.dialogRef )
  //  addForm.listServices();
  //  addForm.close();

  let addForm = new UsertableComponent(this.personaService, this.dialogRef )
  this.create();
  //addForm.listPeople();
  addForm.close();

}


}
