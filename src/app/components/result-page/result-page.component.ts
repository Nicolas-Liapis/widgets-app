import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetJsonService } from 'src/app/services/get-json.service';

import { PercentPipe, CurrencyPipe } from '@angular/common';
import { DateP } from 'src/app/pipes/date-pipe.pipe';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss', '../home/home.component.scss']
})
export class ResultPageComponent implements OnInit {

  homeTitle: string;
  display;
  widgets;
  listSchema;
  list;

  listLength;
  listArray = [];
  allItems = [];
  groups;

  constructor(private getJson : GetJsonService, 
              private route: ActivatedRoute,
              private pctPipe: PercentPipe,
              private currency: CurrencyPipe) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getJsonData(id);
  }

  
  getJsonData(id) {
    //getting data from the json files from service
    this.getJson.getResultJSON(id).subscribe(
      res => {this.homeTitle = res.title,
              this.display = res.display,
              this.widgets = res.widgets,
              this.listSchema = res.listSchema,
              this.list = res.list},
      err => this.homeTitle = `Result (id: ${id}) was not found.`,
      () => this.combineJsons()
    );
  }

  combineJsons() {
    const list = this.list;
    const schema = this.listSchema;
    //get each list item
    for (let l of list) {
      //count size of list array
      let length = Object.keys(l).length;
      this.listLength = length;
      for (let i=0; i<length; i++) {
        //go through all values of the schema to find the right one
        for (let ls of schema) {   
          //fix misspelled data entry bug 
          //check if same schema property and list attribute      
          if ((Object.keys(l)[i] == 'returned' && ls.property == 'retuned') || Object.keys(l)[i] === ls.property) {
            let item = [];
            if (ls.label === '') {
              //when label in status schema is empty
              item.push('Status');
            } else {
              item.push(ls.label);
            }      
            if(ls.format !== '') {
              //apply pipes
              let res;
              switch(ls.format) {
                case 'percent':
                  //fix misspelled data entry bug 
                   res = this.pctPipe.transform((l[ls.property] || l['returned'])/100, '1.1');
                   break;
                case 'currency':
                   res = this.currency.transform(l[ls.property], 'GBP');
                   break;
                case 'status':
                   res = 'Status'+l[ls.property];
              }
              item.push(res, ls.order);              
            } else if (ls.format === '') {
              item.push(l[ls.property], ls.order);     
            }     
            //add item to array of all items  
              this.allItems.push(item);          
          }
        }
      }
      
    }
    //split the allitems array into the groups we want to dispay
    let groups = this.allItems.length / this.listLength;
    this.splitToChunks(this.allItems, groups); 
    this.orderGroup(this.groups);
  }
  
  splitToChunks(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    this.groups = result;
  }

  orderGroup(groups) {
    for (let g of groups) {
      for (let i=0; i<this.listLength; i++) {
        if (g[i].includes(i+1) === false) {
          let replace = g[i];
          g.splice(i, 1);
          g.push(replace);
        }  
      }
    }
  }
  
}
