import { Component } from '@angular/core';
import {MyButtonConfig} from './MyButtonConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulartest';

  config1: MyButtonConfig = {

    text: 'Test1',
    icon : '',
    customCssClass : 'Custom',
};
}
