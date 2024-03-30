import { CommonModule } from "@angular/common";
import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "communiry-info",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./info.component.html",
  styleUrl: "./info.component.scss",
})
export class InfoComponent implements OnChanges {
  myContext = { $impicilit: "world", localSk: "Svetlana" };

  ngOnChanges(changes: SimpleChanges): void {}
}
