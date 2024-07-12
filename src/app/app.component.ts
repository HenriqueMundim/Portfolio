import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { MainComponent } from './modules/portfolio/components/main/main.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent],
  template: 
  `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer id="footer"></app-footer>
  `
})
export class AppComponent {
  title = 'portfolioProject';
}
