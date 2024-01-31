import { Component } from "@angular/core";
import { ArticlesComponent } from "./articles/articles.component";
import { BannerComponent } from "./banner/banner.component";

const COMPONENTS = [ArticlesComponent, BannerComponent];
@Component({
  selector: "app-blog-blog",
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: "./blog.component.html",
  styleUrl: "./blog.component.scss",
})
export class BlogComponent {}
