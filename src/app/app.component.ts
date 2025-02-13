import { Component } from '@angular/core';
import { AsideComponent } from "./shared/components/aside/aside.component";
import { HomePageComponent } from "./gifs/pages/home/home-page.component";
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsideComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gifs-App';
}
