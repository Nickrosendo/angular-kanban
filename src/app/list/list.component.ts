import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private cardService: CardService) { }

  cards: Array<Object> = [];

  ngOnInit() {
    this.cards = this.cardService.cards;
  }
  
  addCard(){
    this.cardService.addCard({});
  }
}
