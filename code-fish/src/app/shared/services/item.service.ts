import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  collectionName = 'Items';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadItems(): Observable<Array<Item>> {
    return this.afs.collection<Item>(this.collectionName).valueChanges();
  }

  loadImageForItem(imageUrl: string) {
    return this.storage.ref(imageUrl).getDownloadURL();
  }
}
