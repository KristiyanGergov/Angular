import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HeroDetailComponent } from "./hero-detail.component";
// import { HeroesComponent } from "./heroes.component";
import { HeroSearchComponent } from "./hero-search.component";

// import { HeroService } from "./hero.service";

@NgModule({
    declarations: [
        // HeroDetailComponent,
        // HeroesComponent,
        HeroSearchComponent,
        // AppComponent
    ],
    imports: [
        CommonModule,
        ],
    exports: [],
    providers: [],
})
export class HeroModule { }