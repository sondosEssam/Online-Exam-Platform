import { Component, inject } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadinSpinnerService } from '../../services/loadin-spinner-service';


@Component({
  selector: 'app-loadingspinner',
  imports: [MatProgressSpinnerModule],
  templateUrl: './loadingspinner.html',
  styleUrl: './loadingspinner.css',
})
export class Loadingspinner {
_loadSpinnerService = inject(LoadinSpinnerService);
}
