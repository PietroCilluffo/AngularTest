import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from '../MyTableConfig';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input () tableConfig: MyTableConfig ;
  @Input () data: any [];
  constructor() { }

  ngOnInit(): void {
  }

}
