import { computed, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadinSpinnerService {

  requestsCount :WritableSignal<number> = signal(0);
  isOpen = computed(()=>this.requestsCount()>0)
  constructor() {}
  show(){
    this.requestsCount.update(value => value + 1);
  }
  close(){
    this.requestsCount.update(value => {  return value > 0 ? value - 1 : 0; });
  }
}
