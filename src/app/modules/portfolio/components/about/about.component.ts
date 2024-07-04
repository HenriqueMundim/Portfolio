import { Component } from '@angular/core';
import { ExperiencesCarouselComponent } from '@components/experiences-carousel/experiences-carousel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ExperiencesCarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public perfilUrl: string = '../../../../../assets/images/perfil.jfif'
}
