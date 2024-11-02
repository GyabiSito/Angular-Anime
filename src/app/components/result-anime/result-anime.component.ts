import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime, MyAnime } from '../../interfaces/api-movies';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-anime',
  standalone: true,
  imports: [],
  templateUrl: './result-anime.component.html',
  styleUrl: './result-anime.component.css'
})
export class ResultAnimeComponent implements OnInit, OnDestroy{

  anime_results:Anime[]=[];
  animeSubscription!:Subscription;
  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getResultAnime().subscribe((result)=>{
      this.anime_results=result;
    })
  }
  
  ngOnDestroy(): void {
    this.animeSubscription.unsubscribe();
  }
  
    addAnime(anime:Anime){
      const addAnime:MyAnime={
        id:anime.mal_id,
        title:anime.title,
        imagen:anime.images['jpg'].image_url,
        total_episodes:anime.episodes,
        watched_episodes:0,
      }

      this.animeService.animeSelected(addAnime);
      this.anime_results=[];
    }
}
