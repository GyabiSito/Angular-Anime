import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AnimeService } from '../../services/anime.service';
@Component({
  selector: 'app-search-anime',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-anime.component.html',
  styleUrl: './search-anime.component.css'
})
export class SearchAnimeComponent {
  searchTerm:string='naruto';

  constructor(private animeService:AnimeService) { }

  search(){
    this.animeService.getAnimes(this.searchTerm).subscribe((result)=>{
      this.animeService.addResultAnime(result.data);
      this.searchTerm=''; 
    })
  }
}
