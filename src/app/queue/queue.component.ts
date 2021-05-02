import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { DeleteVideoService } from '../deleteVideo.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit{

  constructor(
    private videosService: VideosService,
    private deleteVideoService: DeleteVideoService
  ) { };
        
  get videos(){
    return this.videosService.videos
  };

  isPlayed(index: number){
    this.videosService.videos[index].isPlay = !this.videosService.videos[index].isPlay
  };

  isFavorite(index: number){
    this.videosService.videos[index].isFavorite = !this.videosService.videos[index].isFavorite
  }

  onDeleteVideo(index: number){
    this.deleteVideoService.deleteVideo(this.videos, index);
  }
  
  ngOnInit(){
    
    
    
  }
}
