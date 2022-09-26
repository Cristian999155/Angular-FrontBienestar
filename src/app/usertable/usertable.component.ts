import { Component, OnInit } from '@angular/core';
import { Persona } from '../personas/persona';
import { PersonaService } from '../personas/persona.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
persona : Persona = new Persona();
personas: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
     personas => this.personas = personas
   );
  }

}
