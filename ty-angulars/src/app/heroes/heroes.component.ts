import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // 선택한 데이터 출력하기 위해 초기화
  selectedHero: Hero | undefined;
  
  // 히어로 목업을 불러오기 위해 초기화
  heroes: Hero[] | undefined;

  constructor(private heroService: HeroService, private messageService: MessageService) { }
 
  ngOnInit(): void {
    this.getHerose();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected Hero id=${hero.id}');
  }

  // 기존코드 
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // 옵저버 디자인 패턴 반영
  getHerose(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}