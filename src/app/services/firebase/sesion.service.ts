import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private sessionStatus = new BehaviorSubject<boolean>(false);
  currentSessionStatus = this.sessionStatus.asObservable();

  constructor() { }

  updateSessionStatus(status: boolean) {
    this.sessionStatus.next(status);
  }
}
