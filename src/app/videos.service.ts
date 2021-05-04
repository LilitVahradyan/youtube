import { Injectable } from '@angular/core';
import { Videos } from './models/videos.model';

@Injectable({
    providedIn: 'root'
})

export class VideosService {
    videos: Videos[] = [
        {
            title: 'Ruben Haxverdyan - Im Pokrik Navak',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nulla.',
            isWatched: false,
            isFavorite: false,
            duration: 3,
            isPlay: false,
            watchedDate: new Date(),
            isCliced: false
        },
        {
            title: 'Ռուբեն Հախվերդյան - Ձյունը իր երգն է երգում',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nulla.',
            isWatched: false,
            isFavorite: false,
            duration: 5,
            isPlay: false,
            watchedDate: new Date(),
            isCliced: false
        },
        {
            title: 'Mer siro ashun@ Rouben Haxverdyan,Lilit Pipoyan',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nulla.',
            isWatched: false,
            isFavorite: false,
            duration: 12,
            isPlay: false,
            watchedDate: new Date(),
            isCliced: false
        },

    ];

    

}