import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/models/Item';
import { ItemService } from '../../shared/services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  fishingSupplies?: Array<Item>;
  loadedImages: {[key: string]: boolean} = {};

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.loadItems().subscribe((data: Array<Item>) => {
      this.fishingSupplies = data; 
      this.loadImages();
    });
  }

  loadImages() {
    this.fishingSupplies?.forEach((item) => {
      this.itemService.loadImageForItem(item.image_url).subscribe(data => {
        item.image_url = data;
        this.loadedImages[item.id] = true;
      });
    });
  }

  isImageLoaded(item: Item): boolean {
    return this.loadedImages[item.id] ?? false;
  }

  addToCart(item: Item) {
    
  }
}
