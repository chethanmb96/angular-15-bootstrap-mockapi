import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactItem, NewContactItem } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private readonly apiUrl = 'https://6a9d95fca1b37296ad4c1a8b.mockapi.io/contacts';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ContactItem[]> {
    return this.http.get<ContactItem[]>(this.apiUrl);
  }

  getById(id: string): Observable<ContactItem> {
    return this.http.get<ContactItem>(`${this.apiUrl}/${id}`);
  }

  create(item: NewContactItem): Observable<ContactItem> {
    return this.http.post<ContactItem>(this.apiUrl, {
      ...item,
      createdAt: new Date().toISOString()
    });
  }

  update(id: string, updates: Partial<ContactItem>): Observable<ContactItem> {
    return this.http.put<ContactItem>(`${this.apiUrl}/${id}`, updates);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
