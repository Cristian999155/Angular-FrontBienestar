import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddserviceComponent } from '../addservice.component';
import { Serviciobienestar } from '../model/serviciobienestar';
import { ServiciobienestarService } from '../model/serviciobienestar.service';
import Swal from 'sweetalert2'



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


    eliminar(servicio: Serviciobienestar): void {
      Swal.fire({
      title: '¿Esta seguro que desea eliminar el servicio?',
      text: "Una vez hecho esto, no podra revertir el cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ser.delete(servicio.id).subscribe()

        Swal.fire(
          'Eliminado!',
          'El servicio ha sido eliminado exitosamente.',
          'success'

      )



      }
    })

      this.listServices();
    }

}
