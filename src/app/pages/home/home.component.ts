import { Component } from "@angular/core";
import { BodyComponent } from "./body/body.component";
import { BannerComponent } from "./banner/banner.component";
import { ClientsComponent } from "./clients/clients.component";
import { FindWorksComponent } from "./find-works/find-works.component";
import { HomeSearchComponent } from "./home-search/home-search.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";

const COMPONENTS = [
  BannerComponent,
  BodyComponent,
  ClientsComponent,
  FindWorksComponent,
  HomeSearchComponent,
  TestimonialComponent,
];
@Component({
  selector: "app-home",
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
