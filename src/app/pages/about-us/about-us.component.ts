import { Component } from "@angular/core";
import { DitailsComponent } from "./ditails/ditails.component";
import { PartnersComponent } from "./partners/partners.component";
import { MembersComponent } from "../clients/members/members.component";
import { AlertComponent } from "../../shared/alert/alert.component";
import { BannerComponent } from "./banner/banner.component";

const COMPONENTS = [
  BannerComponent,
  DitailsComponent,
  PartnersComponent,
  MembersComponent,
  AlertComponent,
];
@Component({
  selector: "app-about-us",
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: "./about-us.component.html",
  styleUrl: "./about-us.component.scss",
})
export class AboutUsComponent {}
