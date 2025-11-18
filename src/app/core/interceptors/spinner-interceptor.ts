import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoadinSpinnerService } from "../../shared/services/loadin-spinner-service";
import { finalize } from "rxjs/internal/operators/finalize";

export function spinnerInterceptor(req:HttpRequest<any>, next:HttpHandlerFn){
let _loadingService = inject(LoadinSpinnerService);
_loadingService.show();
return next(req).pipe(
  finalize(() => {
    _loadingService.close();
  })
);      

return next(req)
}