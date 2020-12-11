import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from '../MyTableConfig';
import {orderBy} from 'lodash';
import * as _ from 'lodash';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input () tableConfig: MyTableConfig ;
  @Input () data: any [];


  orderType: string;
  icon: string;
  key: string;
  value: string;
  constructor() { }

  ngOnInit(): void {
this.orderType = this.tableConfig.order.orderType;
    if (this.tableConfig.order.orderType === 'asc'){
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['asc']);
      this.orderType = 'asc';

      this.icon = 'arrow_drop_down';

    }else{
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['desc']);
      this.orderType = 'desc';
      this.icon = 'arrow_drop_up';


    }


  }
  ordina(key: string) {

    if(this.orderType === 'desc'){
      this.data = _.orderBy(this.data, [key], ['asc']);
      this.orderType = 'asc';
      this.icon = 'arrow_drop_down';

    }else{
      this.data = _.orderBy(this.data, [key], ['desc']);
      this.icon = 'arrow_drop_up';
      this.orderType = 'desc';

    }

  }
}



