import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {DurationPipe} from '../duration.pipe';

@Component({
  selector: 'pm-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  news;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNews().subscribe(
      response => {
        this.news = response;
      },
      err => console.log(err),
      () => console.log('Done')
    );
  }

}
