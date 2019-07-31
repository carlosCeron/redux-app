import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador : number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { 
    this.contador = 10;
  }

  ngOnInit() {
  }

  multiplicar = () => {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir = () => {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }


  resetNieto = (nuevoContador) => {
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }

}
