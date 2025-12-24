import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatus } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatus, TrafficComponent, TicketsComponent, DashboardItem],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
