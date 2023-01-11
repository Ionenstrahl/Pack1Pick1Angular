import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataProviderService {

  constructor() { }

  getDummyData(): string[] {
    return ['1', '2', '3']
  }
}
