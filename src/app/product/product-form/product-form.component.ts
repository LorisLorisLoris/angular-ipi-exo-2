// product-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() productAdded = new EventEmitter<ProductModel>();
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      checked: [false]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct: ProductModel = {
        id: 0,
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        checked: this.productForm.value.checked
      };
      this.productAdded.emit(newProduct);
      this.productForm.reset();
    }
  }
}
