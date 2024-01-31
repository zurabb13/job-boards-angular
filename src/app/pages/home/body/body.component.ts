import { Component } from "@angular/core";
import { card } from "./card";
import { Card } from "../../../models/home/card";

@Component({
  selector: "home-body",
  standalone: true,
  imports: [],
  templateUrl: "./body.component.html",
  styleUrl: "./body.component.scss",
})
export class BodyComponent {
  constructor() {
    this.card = card;
  }
  card: Card[] = [];
}
