import { Component } from '@angular/core';
import { NewTickets } from "./new-tickets/new-tickets.component";

@Component({
  selector: 'app-tickets',
  imports: [NewTickets],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {

}
