import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() {
  }

  create(name: string): Observable<number> {
    return new Observable(subscribe => {
      let initValue = 1;
      const id = setInterval(() => {
        subscribe.next(initValue++);
      }, 1000);

      console.log(`Create ${name}`);
      return () => {
        clearInterval(id);
        console.log(`Unsubscribe ${name}`);
      };
    });
  }
}
