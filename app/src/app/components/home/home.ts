import { Component } from '@angular/core';

import { ListItems } from '../list-items/list-items';
import { AddItems } from '../add-items/add-items';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddItems, ListItems],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

}