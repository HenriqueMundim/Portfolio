import { Component, signal } from '@angular/core';
import { IcarouselItem } from '../../../../interface/IcarouselItem.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-slider',
  standalone: true,
  imports: [CommonModule],
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
