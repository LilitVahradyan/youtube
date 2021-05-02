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
            duration: 350,
            isPlay: true,
            watchedDate: new Date()
        },
        {
            title: 'Ռուբեն Հախվերդյան - Ձյունը իր երգն է երգում',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nulla.',
            isWatched: false,
            isFavorite: false,
            duration: 400,
            isPlay: true,
            watchedDate: new Date()
        },
        {
            title: 'Mer siro ashun@ Rouben Haxverdyan,Lilit Pipoyan',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nulla.',
            isWatched: false,
            isFavorite: false,
            duration: 260,
            isPlay: false,
            watchedDate: new Date()
        },

    ];

    

}