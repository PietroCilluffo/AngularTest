import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import { PaginationPipe } from './pipe/pagination.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
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
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
