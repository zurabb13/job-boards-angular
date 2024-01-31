import { Component } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { DetailsComponent } from "./details/details.component";
import { MembersComponent } from "./members/members.component";
import { AlertComponent } from "../../shared/alert/alert.component";

const COMPONENTS = [
  BannerComponent,
  DetailsComponent,
  MembersComponent,
  AlertComponent,
];
@Component({
  selector: "app-clients",
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: "./clients.component.html",
  styleUrl: "./clients.component.scss",
})
export class ClientsComponent {}
