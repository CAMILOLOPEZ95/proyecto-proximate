import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() productId: number | null = null;
  @Input() products: any[];

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  getProductTitle(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.title : 'Producto no encontrado';
  }

  getProductImage(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.image : 'ruta-de-imagen-por-defecto';
  }

  getProductDescription(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.shortDescription : 'Descripción no disponible';
  }
}