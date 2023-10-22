import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Listing } from './types';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  
  private url: string = 'http://locahost:8080/api';
  constructor(
    private http: HttpClient,
  ) { }

  getListingsRoute(): Observable<Listing[]>{
    return this.http.get<Listing[]>('http://localhost:8080/api/listings');
  }

  getListingRoute(id: any): Observable<Listing>{
    return this.http.get<Listing>(`http://localhost:8080/api/listings/${id}`);
  }

  addViewToListing(id: any): Observable<Listing> {
    return this.http.put<Listing>(`http://localhost:8080/api/listings/${id}/add-view`, {});
  }

  createNewListingRoute(listing: Listing): Observable<Listing>{
    return this.http.post<Listing>('http://localhost:8080/api/listings', listing);
  }

  getUserListingsRoute(userId: string): Observable<Listing[]>{
    return this.http.get<Listing[]>(`http://localhost:8080/api/users/${userId}/listings`);
  }

  deleteListingRoute(id: string): Observable<string>{
    return this.http.delete<string>(`http://localhost:8080/api/listings/${id}`);
  }

}
