import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-confirm-dialog',
  imports: [ ConfirmDialog, ButtonModule, ToastModule],
  providers: [ConfirmationService, MessageService],

  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css',
})
export class ConfirmDialogComponent {


}
