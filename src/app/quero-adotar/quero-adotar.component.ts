import { Component } from '@angular/core';

@Component({
  selector: 'app-quero-adotar',
  templateUrl: './quero-adotar.component.html',
  styleUrls: ['./quero-adotar.component.scss']
})

export class QueroAdotarComponent {
  animals = [
    {name: 'AMORA', local: 'SÃO PAULO', state: 'SP', photo: '../../assets/images/Amora.svg'},
    {name: 'APOLO', local: 'UBERLANDIA', state: 'MG', photo: '../../assets/images/apolo.svg'},
    {name: 'ANAHI', local: 'BRASILIA', state: 'DF', photo: '../../assets/images/Anahi.svg'},
    {name: 'BILL', local: 'BRASILIA', state: 'DF', photo: '../../assets/images/pet.svg'},
    {name: 'AGNES', local: 'TERESINA', state: 'PI', photo: '../../assets/images/pet.svg'},
    {name: 'DESIRRE', local: 'FLORIANOPOLIS', state: 'SC', photo: '../../assets/images/pet.svg' , email: 'giovannacmandu@gmail.com'},
    
    
  ]
}
