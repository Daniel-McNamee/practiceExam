import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ItemsapiService } from '../../services/itemsapi';

@Component({
  selector: 'app-add-items',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-items.html',
  styleUrl: './add-items.css',
})

export class AddItems {

  private _itemsapiService = inject(ItemsapiService);

  title = '';
  description = '';
  image = '';

  editingId: string | null = null;

  addItem() {

    const item = {
      title: this.title,
      description: this.description,
      image: this.image
    };

    this._itemsapiService.addItem(item);

    this.title = '';
    this.description = '';
    this.image = '';

  }

}