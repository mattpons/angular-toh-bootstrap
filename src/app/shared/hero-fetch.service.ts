import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero.model';

@Injectable()
export class HeroFetchService {

    private heroesUrl = 'app/heroes';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }


    addHero(name: string): Observable<Hero> {
        const options = new RequestOptions({ headers: this.headers });
        return this.http.post(this.heroesUrl, { name }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateHero(hero: Hero): Observable<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        const options = new RequestOptions({ headers: this.headers });
        return this.http.put(url, hero, options)
            .map(() => hero)
            .catch(this.handleError);
    }

    deleteHero(id: number): Observable<void> {
        const url = `${this.heroesUrl}/${id}`;
        const options = new RequestOptions({ headers: this.headers });
        return this.http.delete(url, options)
            .map(() => null)
            .catch(this.handleError);
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getHero(id: number): Observable<Hero> {
        return this.getHeroes()
            .map(heroes => heroes.find(hero => hero.id === id));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private extractListData(res: Response) {
        let body = res.json();
        return body.data || [];
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
