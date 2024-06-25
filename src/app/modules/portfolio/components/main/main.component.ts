import { Component } from '@angular/core';
import { CurriculumComponent } from '../curriculum/curriculum.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CurriculumComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
