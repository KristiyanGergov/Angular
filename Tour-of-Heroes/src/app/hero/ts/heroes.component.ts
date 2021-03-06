import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: '../html/heroes.component.html',
  styleUrls: ['../css/heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(
    private heroService: HeroService,
    private router: Router) { }
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes);
  }
  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string) {
    name = name.trim();
    if (!name)
      return;
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  };
  delete(hero: Hero) {
    if (!hero)
      return;
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h != hero);
        if (this.selectedHero == hero) {
          this.selectedHero = null
        };
      })
  }
}