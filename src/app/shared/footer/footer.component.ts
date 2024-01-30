import { Component } from "@angular/core";
import { Footer, Social } from "../../models/footer";
import { data, social } from "./data";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  constructor() {
    this.data = data;
    this.social = social;
  }
  data: Footer[] = [];
  social: Social[] = [];
  date: Date = new Date();
}
