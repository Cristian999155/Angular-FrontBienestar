import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../model/persona.service';
import {MatDialog} from '@angular/material/dialog';
import { AddformuserComponent } from '../addformuser.component';
import Swal from 'sweetalert2'

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
persona : Persona = new Persona();
personas: Persona[];

  constructor(private personaService: PersonaService, private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.listPeople();
  }


listPeople(): void{
  this.personaService.getPersonas().subscribe(
   personas => this.personas = personas
 );
}
  openAddForm(){
    this.dialogRef.open(AddformuserComponent);
  }

  close(){

    this.dialogRef.closeAll();

  }

  delete(persona: Persona): void{
    swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    this.personaService.delete(persona.id).subscribe(
      () => {
        this.personas = this.personas.filter(cli => cli !== persona)


    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  })
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})


  }

eliminar(persona: Persona): void {
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.personaService.delete(persona.id).subscribe()

    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'

  )



  }
})

  this.listPeople();
}


}
