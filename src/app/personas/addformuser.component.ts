import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';


@Component({
  selector: 'app-addformuser',
  templateUrl: './addformuser.component.html',
  styleUrls: ['./addformuser.component.css']
})
export class AddformuserComponent implements OnInit {
persona : Persona = new Persona();
personas: Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    
  }

  public create(): void {
  this.personaService.create(this.persona).subscribe()

  console.log(this.persona)
  }

}
