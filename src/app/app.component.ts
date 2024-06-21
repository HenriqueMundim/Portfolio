import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: `
    <h1>TESTE</h1>
  `
})
export class AppComponent {
  title = 'portfolioProject';
}
