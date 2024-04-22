import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient)
  
  categories= signal<Category[]>([]);

  constructor() { }

  getAll(){
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
  }

}
