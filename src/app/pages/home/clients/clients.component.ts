import { Component } from "@angular/core";
import { client } from "./client";
import { Clients } from "../../../models/home/clients";

@Component({
  selector: "home-clients",
  standalone: true,
  imports: [],
  templateUrl: "./clients.component.html",
  styleUrl: "./clients.component.scss",
})
export class ClientsComponent {
  constructor() {
    this.client = client;
  }
  client: Clients[] = [];
}
