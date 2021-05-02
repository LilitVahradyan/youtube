import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
 
export class DeleteVideoService{
    deleteVideo(array, index: number){
        array.splice(index, 1)
    }
}