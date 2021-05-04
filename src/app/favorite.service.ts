import { Injectable } from '@angular/core';
import { VideosService } from './videos.service';

@Injectable({
    providedIn: 'root'
})
export class FavoriteVideoService{

    constructor(private videosService: VideosService,){}
    
    favoriteVideo(index: number){
        this.videosService.videos[index].isFavorite = !this.videosService.videos[index].isFavorite
    }
}