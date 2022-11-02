import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serviciobienestar } from '../model/serviciobienestar';
import { ServiciobienestarService } from '../model/serviciobienestar.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-updateservice',
  templateUrl: './updateservice.component.html',
  styleUrls: ['./updateservice.component.css']
})
export class UpdateserviceComponent implements OnInit {
serviciobienestar : Serviciobienestar = new Serviciobienestar();
  constructor(private bienestarService: ServiciobienestarService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
      this.cargarServicio();
  }

  public update(): void {

  this.bienestarService.create(this.serviciobienestar).subscribe()

   Swal.fire('Servicio actualizado', `El servicio ha sido actualizado con éxito`, 'success');
 }

  cargarServicio(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
       this.bienestarService.geServicioId(id).subscribe((serviciobienestar) => this.serviciobienestar = serviciobienestar )
     }
    })
  }

}
