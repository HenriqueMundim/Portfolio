import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { Iicon } from '../../../../interface/iicon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public logoHeader:string  = '../../../../../assets/icons/computer.svg'

  public icons = signal<Iicon[]>([
    {
      name: 'Github icon',
      href: 'https://github.com/HenriqueMundim',
      src: '../../../../../assets/icons/github-mark.svg'
    },
    {
      name: 'Linkedln icon',
      href: 'https://www.linkedin.com/in/henriquemmatos/',
      src: '../../../../../assets/icons/linkedInLogo.svg'
    },
    {
      name: 'email icon',
      href: 'mailto:henriquemundimmatos@gmail.com',
      src: '../../../../../assets/icons/emailLogo.svg'
    }
  ])

  public smoothScrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
  }
}
