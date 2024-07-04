import { Component, Input, input, signal } from '@angular/core';
import { IcardInfo } from '../../../../interface/IcardInfo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public cardInfo = input<IcardInfo| null>(null) 

}
