import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    MatCardModule
  ]
})
export class BrowseModule { }
