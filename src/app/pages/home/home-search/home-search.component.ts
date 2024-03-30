import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
const MATERIAL = [DropdownModule, ButtonModule];
@Component({
  selector: "home-search",
  standalone: true,
  imports: [CommonModule, ...MATERIAL],
  templateUrl: "./home-search.component.html",
  styleUrl: "./home-search.component.scss",
})
export class HomeSearchComponent {
  cities = [
    {
      name: "saba",
    },
    {
      name: "saba1",
    },
    {
      name: "saba2",
    },
    {
      name: "saba3",
    },
  ];
}
