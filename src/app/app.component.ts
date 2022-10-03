import { Component, VERSION } from '@angular/core';
import { DatiAnagrafici } from './dati-anagrafici';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  datiGlobali: DatiAnagrafici = {
    nome: "M",
    cognome: "D",
    dataDiNascita: "1/1/01"
  };

  lista: String[] = ["Mela", "Pera", "Banana"];

  addItem(value: String) {
    this.lista.push(value);
  }

}
