import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { FooterComponent } from "./shared/footer/footer.component";

const COMPONENTS = [NavigationComponent, FooterComponent];
@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, ...COMPONENTS],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "dream-home";
}
