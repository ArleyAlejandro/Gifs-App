import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from "./shared/components/aside/aside.component";
import { HomePageComponent } from "./gifs/pages/home/home-page.component";
import { CardListComponent } from "./gifs/components/card-list/card-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsideComponent, HomePageComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gifs-App';
}
