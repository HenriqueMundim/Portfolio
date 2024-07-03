import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itechnologies } from 'app/interface/IcarouselItem.interface';

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

  public technologies = input<Array<Itechnologies>>([])
}
