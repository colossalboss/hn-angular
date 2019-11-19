import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  // transform(value: string, ...args: any[]): any {
  //   let eventTime = new Date(value).getTime() / 1000 / 3600;
  //   let rightNow = new Date(Date.now()).getTime() / 1000 / 3600;
  //   let age = Math.floor(rightNow - eventTime);
  //   console.log(age);
  //   let result;

  //   if (age > 24) {
  //     result = `${Math.ceil(age / 24)} days ago`;
  //   } else {
  //     result = `${age} hours ago`;
  //   }
  //   return result;
  // }

  transform(value: any, args?: any): any {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) { // less than 30 seconds ago will show as 'Just now'
            return 'Just now';
        }
        const intervals = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };
        let counter;
        // tslint:disable-next-line:forin
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0) {
                if (counter === 1) {
                    return counter + ' ' + i + ' ago'; // singular (1 day ago)
                } else {
                    return counter + ' ' + i + 's ago'; // plural (2 days ago)
                }
            }
        }
    }
    return value;
}

}
