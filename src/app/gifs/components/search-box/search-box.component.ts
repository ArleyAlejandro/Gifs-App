import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  // función que se ejecuta al hacer click en el botón de buscar
  searchTag(){
    // guarda el valor del input
    const newTag = this.tagInput.nativeElement.value;

    // guarda el valor del input en el array del servicio gifsService
    this.gifsService.searchTag(newTag);

    // limpia el input
    this.tagInput.nativeElement.value = '';

  }



}
