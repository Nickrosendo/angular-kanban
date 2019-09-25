import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit{

  constructor(private appService: AppService) {}
  title = 'kanban';
  messages: Array<string> = [];

  ngOnInit() {  
    this.messages = this.appService.messages;
  }

  addMessage() {
    this.appService.addMessage('service changed message');
  }
}
