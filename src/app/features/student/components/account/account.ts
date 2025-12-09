import { routes } from './../../../../app.routes';
import { Token } from './../../../../core/services/token';
import { ModalService } from './../../../../shared/services/modal-service';
import { Component, inject } from '@angular/core';
import { BackButton } from "../../shared/back-button/back-button";
import { Headtag } from '../../shared/headtag/headtag';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ColorDir } from '../../../../core/directives/color-dir';
import { AuthLibraryService } from 'auth';

@Component({
  selector: 'app-account',
  imports: [BackButton, Headtag, RouterOutlet, RouterLink, RouterLinkActive, ColorDir],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {
ModalService = inject(ModalService);
authSerivce = inject(AuthLibraryService);
Token = inject(Token);
router = inject(Router);
  logOut(){
    this.authSerivce.logout().subscribe((res) => {
      this.router.navigate(['/student/diploma']).then(()=>{
        this.ModalService.triggerModal('Logged out successfully', 'success');
        this.Token.clearToken();
      });
    });
  }

}
