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
      url: 'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg',
      title: 'Monkey Project',
      description: 'Work as a Full stack monkey dev, using technologies like java, angular, typescript and springboot',
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
          name: 'Springboot'
        }
      ]
    }
  ])
}
