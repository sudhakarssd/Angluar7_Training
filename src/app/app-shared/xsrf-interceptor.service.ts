import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XsrfInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    console.log("XsrfInterceptorService");
    const token=sessionStorage.getItem("AUTH_TOKEN");
    if(!token){
      return next.handle(req);
    }
    else
    {
      const modifiedRequest=req.clone({
        setHeaders:{"x-access-token":token}
      })
      return next.handle(modifiedRequest);
    }
  }

  constructor() { }
}
