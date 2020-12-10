import { Component } from '@angular/core';
import {MyButtonConfig} from './MyButtonConfig';
import {MyTableConfig} from './MyTableConfig';
import {MyHeaders} from './MyHeaders';
import {DataObject} from './DataObject';
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
   dataObject: DataObject = {
     campi: ['id', 'nome', 'cognome'],
     value: ['0', 'Niccolo', 'Carosio'],
   };
   dataObject2: DataObject = {
     campi: ['id', 'nome', 'cognome'],
     value: ['1', 'Aldo', 'Baglio'],
   };
   headerId =  new MyHeaders(this.dataObject.campi[0], 'id');
   headerNome = new MyHeaders(this.dataObject.campi[1], 'nome');
   headerCognome = new MyHeaders(this.dataObject.campi[2], 'cognome');

   headers = [this.headerId, this.headerNome, this.headerCognome];
   provadati = [this.dataObject, this.dataObject2];
   configTable: MyTableConfig = {
    headers: this.headers,
  };
}

