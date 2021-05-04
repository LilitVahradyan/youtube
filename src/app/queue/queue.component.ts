import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { DeleteVideoService } from '../deleteVideo.service';
import { FavoriteVideoService } from '../favorite.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit{
  timer: ReturnType<typeof setTimeout>;
  video;

  constructor(
    private videosService: VideosService,
    private deleteVideoService: DeleteVideoService,
    private favoriteVideoService: FavoriteVideoService
  ) { };
        
  get videos(){
    return this.videosService.videos
  };
  

  onPlay(index: number){
    this.video = this.videosService.videos[index];

    this.video.isCliced = !this.video.isCliced;
    this.timer = setTimeout(() => {
      this.video.isPlay = true;
      this.video.watchedDate = new Date();
      
    },this.video.duration * 1000);
   
  }
  
  onStop(){
    this.video.isCliced = !this.video.isCliced;
    clearTimeout(this.timer)
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
  
  ngOnInit(){
    
    
    
  }
}
