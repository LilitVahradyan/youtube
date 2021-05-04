import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { DeleteVideoService } from '../deleteVideo.service';
import { FavoriteVideoService } from '../favorite.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(
    private videosService: VideosService,
    private deleteVideoService: DeleteVideoService,
    private favoriteVideoService: FavoriteVideoService
  ) { }

  get videos(){
    return this.videosService.videos
  };

  onGoBack(index: number){
    this.videosService.videos[index].isPlay = false;
    this.videosService.videos[index].isCliced = false;
  }

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
