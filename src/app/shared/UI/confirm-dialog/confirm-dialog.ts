import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-confirm-dialog',
  imports: [ ConfirmDialog, ButtonModule, ToastModule],
  providers: [],

  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css',
})
export class ConfirmDialogComponent {


}
