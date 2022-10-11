import { Persona } from "src/app/personas/model/persona";
import { Serviciobienestar } from "src/app/serviciobienestar/model/serviciobienestar";

export class Booking {
  id: number;
  date: Date;
  personId: Persona;
  offeredServiceId: Serviciobienestar;
}
