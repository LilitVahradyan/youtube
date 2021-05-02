import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMinutes'
})

export class ConvertMinutesPipe implements PipeTransform {
  
  min: any;

  transform(sec: any) {
    this.min = Math.floor(sec/60);
    (this.min >= 1) ? sec = sec - (this.min*60) : this.min = '00';
    (sec < 1) ? sec= '00' : 0;

    (this.min.toString().length === 1) ? this.min = '0'+ this.min : 0;    
    (sec.toString().length === 1) ? sec = '0' + sec :  0;    

    return this.min+':'+sec;
  }

}
