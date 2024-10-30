// product.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ProductModel } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: ProductModel[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProduits();
  }

  addProduct(product: ProductModel) {
    this.productService.ajouterProduit(product);
    this.products = this.productService.getProduits(); 
  }

  deleteProduct(productId: number) {
    this.productService.supprimerProduit(productId);
    this.products = this.productService.getProduits();
  }
}
