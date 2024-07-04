import { Component, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { IcardInfo } from '../../../../interface/IcardInfo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public cardInfo = signal<Array<IcardInfo>>([
    {
      url: '../../../../../assets/images/orange.png',
      title: 'Orange App',
      description: 'The project is a platform for displaying portfolios. We use technologies such as Node and Express, and some DDD and Solid principles.',
      stack: [
        {
          name: 'NodeJs'
        },
        {
          name: 'Typescript'
        },
        {
          name: 'Express'
        }
      ],
      link: 'https://github.com/Laranja-Mecanica/orange-portifolio-api'
    },
    {
      url: '../../../../../assets/images/fcamara.jpg',
      title: 'FCamara',
      description: 'Full Stack developer in Fcamara, i developed projects for clients using technologies like Java, Typescript, Angular and Spring boot.',
      stack: [
        {
          name: 'Java'
        },
        {
          name: 'Typescript'
        },
        {
          name: 'Angular'
        },
        {
          name: 'Spring Boot'
        }
      ],
      link: 'https://fcamara.com/'
    }
  ])
}
