import { Component } from "@angular/core";
import { DitailsComponent } from "./ditails/ditails.component";

@Component({
  selector: "blog-articles",
  standalone: true,
  imports: [DitailsComponent],
  templateUrl: "./articles.component.html",
  styleUrl: "./articles.component.scss",
})
export class ArticlesComponent {}
