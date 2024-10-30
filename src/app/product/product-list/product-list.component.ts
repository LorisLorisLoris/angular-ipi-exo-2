// product-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: ProductModel[] = [];
  @Output() productDeleted = new EventEmitter<number>();

  deleteProduct(productId: number) {
    if (confirm("Etes-vous sûr de vouloir supprimer ce produit ?")) {
      this.productDeleted.emit(productId);
    }
  }
}
