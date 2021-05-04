import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { DeleteVideoService } from '../deleteVideo.service';
import { FavoriteVideoService } from '../favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(
    private videosService: VideosService,
    private deleteVideoService: DeleteVideoService,
    private favoriteVideoService: FavoriteVideoService
  ) { };
        
  get videos(){
    return this.videosService.videos
  };

  onIsFavorite(index: number){
    this.favoriteVideoService.favoriteVideo(index);
  }

  onNotFavorite(index: number){
    this.favoriteVideoService.favoriteVideo(index);
  }

  onDeleteVideo(index: number){
    this.deleteVideoService.deleteVideo(this.videos, index);
  }

  ngOnInit(): void {
  }

}
