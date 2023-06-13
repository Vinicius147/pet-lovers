import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sfc-header',
  templateUrl: './sfc-header.component.html',
  styleUrls: ['./sfc-header.component.scss']
})

export class SfcHeaderComponent {

  constructor(private router: Router) {}
  
  headerList = [
    {tittle: 'Sobre nós', highlight: false, icon: false, url: 'quero-adotar'},
    {tittle: 'Contato', highlight: false, icon: false, url: 'quero-adotar'},
    {tittle: 'Quero Adotar', highlight: true, pathIcon: '../../assets/images/heart.svg', url: '/quero-adotar'},
    {tittle: 'Home', highlight: true, icon: false, url: 'index'}
  ]

  navigateSite(url: string) {
    this.router.navigateByUrl(url)
  }
}
