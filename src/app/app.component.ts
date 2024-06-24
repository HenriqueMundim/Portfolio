import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: 
  `
    <app-header></app-header>
  `
})
export class AppComponent {
  title = 'portfolioProject';
}
