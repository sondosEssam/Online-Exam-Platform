import { Injectable, signal, WritableSignal } from '@angular/core';
import { single } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  message :WritableSignal<string> = signal('');
  theme :WritableSignal<'success' | 'error' | 'info'> = signal('info');
  visiable :WritableSignal<boolean> = signal(false);
  closing:WritableSignal<boolean> = signal(false);
  constructor() {}
  open(message:string, theme:'success' | 'error' | 'info'='info'){
    
    this.visiable.set(true);
    this.message.set(message);
    this.theme.set(theme);
    this.closing.set(false);
  }
  close(){
    this.closing.set(true);
    setTimeout(() => {
    this.message.set('');
    this.theme.set('info');
    this.visiable.set(false); 
    this.closing.set(false);
  }, 300);
  }

}
