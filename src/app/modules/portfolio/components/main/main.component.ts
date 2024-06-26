import { Component } from '@angular/core';
import { CurriculumComponent } from '../curriculum/curriculum.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CurriculumComponent, ProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
