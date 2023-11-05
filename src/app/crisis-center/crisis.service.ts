import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);

    return crises;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Crisis[]) => heroes.find((hero) => hero.id === +id)!)
    );
  }
}
