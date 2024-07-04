import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IcontactInfo } from 'app/interface/IcontactInfo.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public contactInfo = signal<Array<IcontactInfo>>([
    {
      src: '../../../../../assets/icons/whatsapp.svg',
      contactMethod: 'Whatsapp',
      contactInfo: '+55 31 99339 9903',
      link: 'https://wa.me/5531993399903'
    },
    {
      src: '../../../../../assets/icons/emailLogo.svg',
      contactMethod: 'Email',
      contactInfo: 'henriquemundimmatos@gmail.com',
      link: 'mailto:henriquemundimmatos@gmail.com'
    }
  ])
}
