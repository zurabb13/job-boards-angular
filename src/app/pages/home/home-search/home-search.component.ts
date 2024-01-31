import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropdownModule } from "primeng/dropdown";

const MATERIAL = [DropdownModule];
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
