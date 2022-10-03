import { Component, OnInit, Input } from '@angular/core';
import { DatiAnagrafici } from '../dati-anagrafici';

@Component({
  selector: 'app-dati-anagrafici',
  templateUrl: './dati-anagrafici.component.html',
  styleUrls: ['./dati-anagrafici.component.css'],
})
export class DatiAnagraficiComponent implements OnInit {
 
  @Input() datiAnagrafici: DatiAnagrafici;

  constructor() {}

  ngOnInit() {
    console.log(this.datiAnagrafici)
  }
}
