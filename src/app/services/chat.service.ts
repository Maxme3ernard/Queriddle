import { Injectable } from '@angular/core';
import {Subject} from 'node_modules/rxjs';
import {WebSocketService} from './web-socket.service';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

// Service mettant le chat en relation avec le service de connexion au socket (web-socket service).
export class ChatService {

  messages: Subject<any>;

  constructor(private wsService: WebSocketService) {
    this.messages = wsService
      .connect()
      .pipe(map((response: any) => {
        return response;
      })) as Subject<any>;
  }

  sendMsg(msg) {
    this.messages.next(msg);
  }
}
