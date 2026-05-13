import { Component, inject } from '@angular/core';

import { ItemsapiService } from '../../services/itemsapi';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [],
  templateUrl: './list-items.html',
  styleUrl: './list-items.css',
})

export class ListItems {

  private _itemsapiService = inject(ItemsapiService);

  // items = this._itemsapiService.items;
  items = () => [
    {
      _id: '1',
      title: 'Example Item',
      description: 'This is a reusable Bootstrap card template.',
      image: 'https://picsum.photos/400/250'
    },
    {
      _id: '2',
      title: 'Second Item',
      description: 'Perfect for exam preparation.',
      image: 'https://picsum.photos/400/251'
    }
  ];

  constructor() {
    this._itemsapiService.getItems();
  }

  deleteItem(id: string) {
    this._itemsapiService.deleteItem(id);
  }

  editItem(item: any) {
    console.log(item);
  }

}