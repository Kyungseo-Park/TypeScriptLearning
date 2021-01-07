// 비즈니스 로직은 서비스에서 처리한다.

import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  //  기존코드 
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  // 옵저버에 메세지 반영
  // getHeroes(): Observable<Hero[]> {
  //   // 서비스에 메세지 추가 
  //   this.messageService.add('HeroService: fetched heroes');
  //   // TODO: 메세지는 히어로 데이터를 가져온 후에 보내야 한다.
  //   return of(HEROES);
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }

}
