import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progress = new Subject<boolean>();

  getProgress() {
    return this.progress.asObservable();
  }

  show() {
    this.progress.next(true);
  }

  hide() {
    this.progress.next(false);
  }
}
