import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Itemsmod } from '../models/itemsmod';

@Component({
  selector: 'app-items',
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})

export class Items {
  items_title = "Items List";

  items: Itemsmod[] = [];

  ngOnInit() {
    this.items = [
      { id:1, desc: "First"},
      { id:2, desc: "Second"}
    ]
  }

}
