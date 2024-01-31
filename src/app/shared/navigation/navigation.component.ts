import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { navigation } from "./navigation";
import { Nav } from "../../models/home/navigation";
import { RouterLink, RouterLinkActive } from "@angular/router";

const MATERIAL = [MatToolbarModule, MatIconModule, MatButtonModule];
@Component({
  selector: "app-nav",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ...MATERIAL],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.scss",
})
export class NavigationComponent {
  constructor() {
    this.navigation = navigation;
  }
  navigation: Nav[] = [];
}
