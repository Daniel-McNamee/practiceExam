import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../interfaces/item';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsapiService {

  private _http = inject(HttpClient);

  private _apiUrl = environment.apiUrl;

  public items = signal<Item[]>([]);
  public selectedItem = signal<any | null>(null);

  // GET all items
  getItems() {

    this._http.get<Item[]>(this._apiUrl)
      .subscribe(data => {

        this.items.set(data);

      });

  }

  // ADD item
  addItem(item: any) {

    this._http.post(this._apiUrl, item)
      .subscribe(() => {

        this.getItems();

      });

  }

  // DELETE item
  deleteItem(id: string) {

    this._http.delete(`${this._apiUrl}/${id}`)
      .subscribe(() => {

        this.getItems();

      });

  }

  // UPDATE item
  updateItem(id: string, updatedItem: any) {

    this._http.put(`${this._apiUrl}/${id}`, updatedItem)
      .subscribe(() => {

        this.getItems();

      });

  }

}