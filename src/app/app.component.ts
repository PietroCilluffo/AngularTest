import {Component} from '@angular/core';
import {MyButtonConfig} from './MyButtonConfig';
import {MyTableConfig} from './MyTableConfig';
import {MyOrder} from './MyOrder';
import {MySearch} from './MySearch';
import {MyPagination} from './MyPagination';
import {MyTableActionEnum} from './MyTableActionEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulartest';
  opButton(op: number){
    console.log(op);
  }
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
    },

    {
      nome: 'Fabio',
      id: 3,
      cognome: 'Caressa'
    },

    {
      nome: 'Billy',
      id: 4,
      cognome: 'Costacurta'
    },
    {
      nome: 'Ste',
      id: 5,
      cognome: 'De Grandis'
    },
    {
      nome: 'Sandro',
      id: 6,
      cognome: 'Piccinini'
    },

    {
      nome: 'Luigi',
      id: 7,
      cognome: 'Kokko'
    }];

   orderconfig: MyOrder = {
     defaultColumn: 'id',
     orderType: 'asc',

   };
   pagination: MyPagination = {
     itemPerPage: 5,
     itemPerPageOptions: [3, 5, 10]
   };
   searchconfig: MySearch = {
     columns: ['id', 'nome', 'cognome']
   };
   actions: MyTableActionEnum[] = [MyTableActionEnum.NEW_ROW, MyTableActionEnum.EDIT, MyTableActionEnum.DELETE];
   provadati = this.data;
   configTable: MyTableConfig = {
     headers: this.header,
     order: this.orderconfig,
     search: this.searchconfig,
     pagination : this.pagination,
     actions: this.actions,


  };
}

