import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside',
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

  constructor(private gifsService: GifsService) {
  }

  // Método que devuelve el historial de etiquetas
  getTagsHistory(): string[] {
    return this.gifsService.tagHistory;
  }

}
