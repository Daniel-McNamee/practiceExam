import { Component, inject } from '@angular/core';

import { ItemsapiService } from '../../services/itemsapi';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})

export class Details {

  itemService = inject(ItemsapiService);

}