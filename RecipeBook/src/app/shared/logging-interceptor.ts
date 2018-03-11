import { HttpInterceptor, HttpRequest, HttpEvent  } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


export class LoggingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do(
            event => {
                console.log('loggin interceptor', event);
            }
        );
    }
}
