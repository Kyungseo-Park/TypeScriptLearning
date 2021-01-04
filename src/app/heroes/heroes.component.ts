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

  selectedHero: Hero | undefined;
  
  heroes: Hero[] | undefined;

  constructor(private HeroService: HeroService, private messageService: MessageService) { }
 
  ngOnInit(): void {
    console.log(this.getHerose());
    this.getHerose();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add('HeroesCompoenent: Selected Hero id=${hero.id}');
  }

  // 기존코드 
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // 옵저버 디자인 패턴 반영
  getHerose(): void {
    this.HeroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}