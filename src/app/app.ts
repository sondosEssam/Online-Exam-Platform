import { ModalService } from './shared/services/modal-service';
import { Component, inject, signal } from '@angular/core';
import { Auth } from "./features/auth/auth";
import { RouterOutlet } from '@angular/router';
import { Modal } from './shared/UI/modal/modal';
import { Loadingspinner } from './shared/UI/loadingspinner/loadingspinner';
import { LoadinSpinnerService } from './shared/services/loadin-spinner-service';
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Modal, Loadingspinner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Application');
  modalService = inject(ModalService);
  loadingService = inject(LoadinSpinnerService);

}
