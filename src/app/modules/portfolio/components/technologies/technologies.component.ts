import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TechSliderComponent } from '@components/tech-slider/tech-slider.component';
import { ItechInfo } from 'app/interface/ItechInfo.interface';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, TechSliderComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
    public technologies = signal<Array<ItechInfo>>(
      [
        {
          stack: "Backend",
          technologies: [
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
          ]
        },
        {
          stack: "Frontend",
          technologies: [
            {
              src: '../../../../../assets/frontend/html.svg',
              name: 'Html'
            },
            {
              src: '../../../../../assets/frontend/css.svg',
              name: 'Css'
            },
            {
              src: '../../../../../assets/frontend/javascript.svg',
              name: 'Javascript'
            },
            {
              src: '../../../../../assets/frontend/typescript.svg',
              name: 'Typescript'
            }
          ]
        },
        {
          stack: "Framework",
          technologies: [
            {
              src: '../../../../../assets/framework/angular.svg',
              name: 'Angular'
            },
            {
              src: '../../../../../assets/framework/spring.svg',
              name: 'Spring Boot'
            },
            {
              src: '../../../../../assets/framework/hibernate.svg',
              name: 'Hibernate'
            }
          ]
        }
      ]
    )
}
