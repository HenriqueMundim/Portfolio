import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TechSliderComponent } from '@components/tech-slider/tech-slider.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, TechSliderComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
    
}
