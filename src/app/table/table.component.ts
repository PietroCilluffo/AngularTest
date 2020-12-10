import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from '../MyTableConfig';
import {newArray} from "@angular/compiler/src/util";
import {MapOperator} from "rxjs/internal/operators/map";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input () tableConfig: MyTableConfig ;
  @Input () data: any [];
  reordered: any[];

  key: string;
  value: string;
  constructor() { }

  ngOnInit(): void {


    let table = new Array();

    for(let i = 0; i < this.tableConfig.headers.length; i++) {
      let a = new Array();
      for(let k = 0; k < this.data.length; k++){

          this.key = this.tableConfig.headers[i].key;

          this.value = this.data[k][this.key];

          a.push(this.value);

        }

      table.push(a);
      }



    this.reordered = table;

  }

}
