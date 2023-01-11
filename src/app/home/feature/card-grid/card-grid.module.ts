import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    CardGridComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    CardGridComponent
  ]
})
export class CardGridModule { }
