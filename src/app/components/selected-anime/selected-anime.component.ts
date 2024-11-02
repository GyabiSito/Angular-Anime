import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { MyAnime } from '../../interfaces/api-movies';

@Component({
  selector: 'app-selected-anime',
  standalone: true,
  imports: [],
  templateUrl: './selected-anime.component.html',
  styleUrl: './selected-anime.component.css'
})
export class SelectedAnimeComponent implements OnInit {

  animes_selected: MyAnime[] = [];
  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animes_selected = JSON.parse(localStorage.getItem('animes') as any) || [];
    this.animeService.getAnimeSelected().subscribe((anime) => {
      console.log(anime);
      this.animes_selected.push(anime);
      localStorage.setItem('animes', JSON.stringify(this.animes_selected));
    })
  }
  increaseWatch(anime: MyAnime) {

    anime.watched_episodes++;
    localStorage.setItem('animes', JSON.stringify(this.animes_selected));
  }
  decreaseWatch(anime: MyAnime) {
    anime.watched_episodes--;
    localStorage.setItem('animes', JSON.stringify(this.animes_selected));

  }
}
