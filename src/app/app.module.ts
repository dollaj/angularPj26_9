import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatiAnagraficiComponent } from './dati-anagrafici/dati-anagrafici.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DatiAnagraficiComponent, AddItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
