import { Component, signal } from '@angular/core';
import { CarouselComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';
import { IcarouselItem } from '../../../../interface/IcarouselItem.interface';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tech-slider',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    CarouselControlComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    ThemeDirective,
    RouterLink
  ],
  templateUrl: './tech-slider.component.html',
  styleUrl: './tech-slider.component.scss'
})
export class TechSliderComponent {

  public isAnimated = true;
  public isTouched = true;

  public backendItem = signal<Array<IcarouselItem>>([
    {
      src: '../../../../../assets/backend/java.svg',
      name: 'Java'
    },
    {
      src: '../../../../../assets/backend/node.svg',
      name: 'Node'
    },
    {
      src: '../../../../../assets/backend/postgresql.svg',
      name: 'PostgreSQL'
    },
    {
      src: '../../../../../assets/backend/mysql.svg',
      name: 'MySQL'
    }
  ])
}
