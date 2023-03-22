import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddOnService {

  private baseUrl: string = `${environment.SERVER_URL}/${environment.SERVER_API_PREFIX}/add-on`;
  private httpOptions: any;

  allAddOns: any[] = [];

  constructor(private http: HttpClient) {
    this.httpOptions = { withCredentials: true };
  }

  list(): Observable<any> {
    return this.http.get(this.baseUrl, this.httpOptions);
  }

  load(): void {
    this.http.get(this.baseUrl, this.httpOptions)
      .subscribe((res: any) => res && (this.allAddOns = res));
  }

}
