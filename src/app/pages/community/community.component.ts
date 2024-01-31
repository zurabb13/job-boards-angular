import { Component } from "@angular/core";
import { InfoComponent } from "./info/info.component";
import { BannerComponent } from "./banner/banner.component";
import { AlertComponent } from "../../shared/alert/alert.component";

const COMPONENTS = [InfoComponent, BannerComponent, AlertComponent];
@Component({
  selector: "app-community",
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: "./community.component.html",
  styleUrl: "./community.component.scss",
})
export class CommunityComponent {}
