import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddserviceComponent } from '../serviciobienestar/addservice.component';
import { Serviciobienestar } from '../serviciobienestar/model/serviciobienestar';
import { ServiciobienestarService } from '../serviciobienestar/model/serviciobienestar.service';



@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})




export class ServiceCardComponent {

  ngOnInit(): void {
this.cargarServicio();
  }

ser: Serviciobienestar = new Serviciobienestar();



  constructor(private dialogRef : MatDialog, private addService:ServiciobienestarService ) {


  }


  openAddForm(){
    this.dialogRef.open(AddserviceComponent);
  }

  close(){
    this.dialogRef.closeAll();
  }

cargarServicio(){
  // this.addService.geServicioId().subscribe( (ser) => this.ser = ser)
}

 addCardService(){ // funcion que agrega la card al html usando plantillas literales
      document.querySelector(".box-container")!.insertAdjacentHTML(`beforeend`,`


        <div class="box">
          <div class="icons">
      <i class="fa-solid fa-gear"></i>
          </div>
            <img src="assets\img\balon.png" alt="">
            <h3 id= "nombreE">asas</h3>
           <p>asas</p>
            <a href="#" class="btn" routerLink="/table">Ver Reservas</a>
        </div>

        <script>
        var x = document.getElementById("nombreE");
        x.innerHTML == "Holaaa";

        </script>
        <style>

        .box-container{
            position: relative;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap:45px;
            top:-1400px;
        }

      .box-container .box{
            box-shadow: 0 5px 10px rgba(1,0,0,.2);
            border-radius: 15px;
            border: 2px solid #114177;
            background: #fff;
            text-align: center;
            padding:20px 5px;

        }

      .box-container .box img{
            height: 80px;
        }

      .box-container .box h3{
            color:#114177;
            font-size: 22px;
            padding:10px 0;
        }

      .box-container .box p{
            color:#777;
            font-size: 15px;
            line-height: 1.8;
        }

      .box-container .box .btn{
            margin-top: 10px;
            display: inline-block;
            background:#FAB400;
            color:#114177;
            font-size: 17px;
            border-radius: 5px;
            padding: 8px 25px;
        }

    .box-container .box .btn:hover{
            letter-spacing: 1px;
        }

    .box-container .box:hover{
            box-shadow: 0 10px 15px rgba(0,0,0,.3);
            transform: scale(1.03);
        }
    .icons {
          color:#114177;
          position: relative;
          left: 130px;
          top: -20px;
          cursor: pointer;
          font-size: 1.5rem;
          margin-left: 2rem;
        }
      </style>

      `)


  }


   addEditables(){ // funcion que modifica la propiedad "editable" a true a todos los titulos y la descripciones, lo que nos permite modificarlas
    document.getElementById("nombreE")!.innerHTML = this.ser.name;

}

 getMensaje() {
   console.log("Holis"); }

}
