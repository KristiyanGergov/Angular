import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: '../html/hero-detail.component.html',
    styleUrls: ['../css/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }
    @Input() hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location) { }
    goBack() : void{
        this.location.back();
    }
    save() : void{
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

}