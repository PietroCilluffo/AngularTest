import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import { PaginationPipe } from './pagination.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TableComponent,
    PaginationPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    MatSortModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
