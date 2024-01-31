import { Component } from "@angular/core";
import { Details } from "../../../models/clients/details";
import { details } from "./data";

@Component({
  selector: "clients-details",
  standalone: true,
  imports: [],
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
})
export class DetailsComponent {
  constructor() {
    this.details = details;
  }
  details: Details[] = [];
}
