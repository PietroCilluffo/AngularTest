import { Component } from '@angular/core';
import {MyButtonConfig} from './MyButtonConfig';
import {MyTableConfig} from './MyTableConfig';
import {MyHeaders} from './MyHeaders';

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

   headerId =  new MyHeaders('0', 'id');
   headerNome = new MyHeaders('1', 'nome');
   headerCognome = new MyHeaders('1', 'cognome');

   headers = [this.headerId, this.headerNome, this.headerCognome];
   provadati = ['0', 'Niccolo', 'Carosio'];
  configTable: MyTableConfig = {
    headers: this.headers,
  };
}
