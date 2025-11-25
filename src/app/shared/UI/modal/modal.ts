import { Component, inject, input } from '@angular/core';
import { ModalService } from '../../services/modal-service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
_modalService = inject(ModalService);


}
