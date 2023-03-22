import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAddOnService {

  private baseUrl: string = `${environment.SERVER_URL}/${environment.SERVER_API_PREFIX}/user-add-on`;
  private httpOptions: any;

  userAddOns: BehaviorSubject<any[]> = new BehaviorSubject([{}]);

  userId: string = '04b4d9b4-ed57-4748-9a78-9b4e8dc3d767';

  constructor(private http: HttpClient) {
    this.httpOptions = { withCredentials: true };
  }

  getByUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/by-user/${this.userId}`, this.httpOptions);
  }

  load(): void {
    this.getByUser()
      .subscribe((res: any) => res && this.userAddOns.next(res));
  }

  create(addOnId: string): Observable<any> {
    return this.http.post(this.baseUrl, { userId: this.userId, addOnId }, this.httpOptions);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.httpOptions);
  }

}
