import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { authInterceptor } from './core/interceptors/auth-interceptor.service';
import { spinnerInterceptor } from './core/interceptors/spinner-interceptor';
import { BaseUrl } from 'auth';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([spinnerInterceptor,authInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme:{
        preset: Aura
      }
    }),
    {provide: BaseUrl, useValue: 'https://exam.elevateegy.com/api/v1/'}
  ]
};
