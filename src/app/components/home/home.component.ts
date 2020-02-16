import { Component, OnInit } from '@angular/core';
import { GetJsonService } from 'src/app/services/get-json.service';

import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeData = {};
  homeWidgets: [];
  homeTitle: string;

  constructor(private getJson : GetJsonService ) { }

  ngOnInit(): void {
    this.getJsonData();
  }

  getJsonData() {
    //getting data from the json files from service
    this.getJson.getHomeJSON().subscribe(data => {
      this.homeWidgets = data.widgets;
      this.homeTitle = data.title;
    });
  }

}
