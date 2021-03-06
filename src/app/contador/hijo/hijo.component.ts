import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador : number;
  

  constructor(private store : Store<AppState>) { 
    this.contador = 10;
  }

  ngOnInit() {

    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    });

  }

  multiplicar = () => {
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
    //this.contador *= 2;
    //this.cambioContador.emit(this.contador);    
  }

  dividir = () => {
    //this.contador /= 2;
    const action = new DividirAction(2);
    this.store.dispatch(action);
    //this.cambioContador.emit(this.contador);
  }


  resetNieto = (nuevoContador) => {
    this.contador = nuevoContador;
    //this.cambioContador.emit(this.contador);
  }

}
