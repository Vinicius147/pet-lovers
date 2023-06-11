import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface animals {
  name: string;
  state: string;
  local: string;
  photo: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})



export class CardComponent {
  constructor(private router: Router) {}

  @Input() animals: animals[] = [];

  navigateSite(url: string) {
    this.router.navigateByUrl(url)
  }
}
