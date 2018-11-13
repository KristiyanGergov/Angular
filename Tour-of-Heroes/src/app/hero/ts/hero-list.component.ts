import { HeroService } from "./hero.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'hero-list',
    templateUrl: '../html/hero-list.component.html',
    providers: [ HeroService ]
})

export class HeroListComponent implements OnInit{
    constructor(
        private service: HeroService
    ){}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}