import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { Headers, Http } from "@angular/http";
import { Logger } from "./logger.service";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroService{

    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type' : 'aplication/json'});
    // private heroes: Hero[] = [];

    constructor(
        private http: Http){ }


    getHeroes() {
        return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{

        console.error('An error has occured', error);
        return Promise.reject(error.message || error);
    
    }
    
    getHero(id: number) : Promise<Hero>{

        const url = `${this.heroesUrl}/${id}`

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);  
          }


    public update(hero: Hero) : Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
     }

    public create(name: string): Promise<Hero>{
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
     }
    public delete(id: number): Promise<void>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
     }
}