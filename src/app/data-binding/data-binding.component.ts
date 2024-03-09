import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url = 'http://loiane.com'
  cursoAngular = true
  urlImg = 'http://lorempixel.com.br/500/400/?5'

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }
  constructor() {
  }
}
