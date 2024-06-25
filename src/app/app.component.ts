import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { MainComponent } from './modules/portfolio/components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  template: 
  `
    <app-header></app-header>
    <app-main></app-main>
  `
})
export class AppComponent {
  title = 'portfolioProject';
}
