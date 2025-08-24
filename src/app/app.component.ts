import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
