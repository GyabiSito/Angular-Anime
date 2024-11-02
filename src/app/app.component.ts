import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchAnimeComponent } from "./components/search-anime/search-anime.component";
import { ResultAnimeComponent } from "./components/result-anime/result-anime.component";
import { SelectedAnimeComponent } from "./components/selected-anime/selected-anime.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchAnimeComponent, ResultAnimeComponent, SelectedAnimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Anime';
}
