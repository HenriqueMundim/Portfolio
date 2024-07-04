import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { IexperienceInfo } from 'app/interface/IexperienceInfo';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-experiences-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences-carousel.component.html',
  styleUrl: './experiences-carousel.component.scss'
})
export class ExperiencesCarouselComponent {
    @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

    public experiences = signal<Array<IexperienceInfo>>([
      {
        year: "2018",
        description: "Started computer networking tech in CEFET-MG - Centro Federal de Tecnologia e Educação de Minas Gerais"
      },
      {
        year: "2022",
        description: "Complete computer networking tech in CEFET-MG"
      },
      {
        year: "08/2023",
        description: "Started an internship at Infinity School as a programming tutor and teacher"
      },
      {
        year: "04/2024",
        description: "Finish an internship in Infinity School"
      },
      {
        year: "05/2024",
        description: "Full Stack developer at Group FCamara"
      },
    ])


    ngAfterViewInit() {
      this.sliderRef = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: 'free-snap',
        slides: {
          perView: 4,
          spacing: 25,
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
