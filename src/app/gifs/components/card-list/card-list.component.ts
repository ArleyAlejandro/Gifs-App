import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];
}
