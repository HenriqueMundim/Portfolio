import { Component, ElementRef, ViewChild, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itechnologies } from 'app/interface/IcarouselItem.interface';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-tech-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-slider.component.html',
  styleUrl: './tech-slider.component.scss'
})
export class TechSliderComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  public technologies = input<Array<Itechnologies>>([])

  ngAfterViewInit() {
    this.sliderRef = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 6,
        spacing: 10,
      },
      breakpoints: {
        '(max-width: 750px)': {
          slides: {
            perView: 1
          }
        }
      }
    })
  }
}
