import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  headerList = [
    {tittle: 'Sobre nós', highlight: false, icon: false},
    {tittle: 'Contato', highlight: false, icon: false},
    {tittle: 'Quero Adotar', highlight: true, pathIcon: '../../assets/images/heart.svg'},
    {tittle: 'Contato', highlight: true, icon: false}
  ]

  iconsList = [
    {icon: 'Instagram', pathIcon: '../../assets/images/instagram.svg', url: 'https://color.adobe.com/pt/create/image'},
    {icon: 'WhatsApp', pathIcon: '../../assets/images/whatsApp.svg', url: 'https://color.adobe.com/pt/create/image'},
    {icon: 'Facebook', pathIcon: '../../assets/images/facebook.svg', url: 'https://color.adobe.com/pt/create/image'}
  ]

  animals = [
    {name: 'AMORA', local: 'SÃO PAULO', state: 'SP', photo: '../../assets/images/Amora.svg'},
    {name: 'APOLO', local: 'UBERLANDIA', state: 'MG', photo: '../../assets/images/apolo.svg'},
    {name: 'ANAHI', local: 'BRASILIA', state: 'DF', photo: '../../assets/images/Anahi.svg'}
  ]

  navigate(url: string) {
    window.open(url, "_blank")
  }
}
