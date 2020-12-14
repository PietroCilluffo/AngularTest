import { Component } from '@angular/core';
import {MyButtonConfig} from './MyButtonConfig';
import {MyTableConfig} from './MyTableConfig';
import {MyHeaders} from './MyHeaders';
import {DataObject} from './DataObject';
import {MyOrder} from './MyOrder';
import {MySearch} from './MySearch';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulartest';

  config1: MyButtonConfig = {

    text: 'Test1',
    icon : 'android',
    customCssClass : 'bottoneGrande',
};

  header = [{
    key: 'id',
    label: 'Id'
  },
    {
      key: 'nome',
      label: 'Nome'
    },
    {
      key: 'cognome',
      label: 'Cognome'
    }];
  data = [{
    nome: 'Manuel',
    cognome: 'Tocchi',
    id: 1
  },
    {
      nome: 'Luigi',
      id: 2,
      cognome: 'Durso'
    }];

   orderconfig: MyOrder = {
     defaultColumn: 'id',
     orderType: 'asc',

   };

   searchconfig: MySearch = {
     columns: ['id', 'nome', 'cognome']
   };
   provadati = this.data;
   configTable: MyTableConfig = {
    headers: this.header,
     order: this.orderconfig,
     search: this.searchconfig,

  };
}

