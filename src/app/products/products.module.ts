import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, AddProductComponent]
})
export class ProductsModule { }
