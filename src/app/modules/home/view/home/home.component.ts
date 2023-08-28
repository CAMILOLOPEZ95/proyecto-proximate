import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePresenter } from '../../presenter/home.presenter';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSidebarExpanded = false;
  userToken: string;
  nameUser: string;

  menuItems: any[];
  products: any[];

  selectedProduct: any | null = null;

  constructor(
    private presenter: HomePresenter,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const storedToken = localStorage.getItem('userToken');
    const storedUserName = localStorage.getItem('nameUser');
    console.log("yyyyyyyy ", storedUserName);
    if (storedToken) {
      this.router.navigate(['/home'], { queryParams: { token: storedToken, nameUser: storedUserName } });
    }

    this.route.queryParams.subscribe(params => {
      this.userToken = params['token'];
      this.nameUser = params['nameUser'];
      this.loadProducts(this.userToken);
    });

    this.presenter.setupComponent(this);
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  loadProducts(token: string) {
    this.presenter.loadProducts(token);
  }

  onProductsLoaded(response: any) {
    console.log("response getProducts: ", response);
    if (response.status) {
      this.menuItems = JSON.parse(response.data).menu;
      this.products = JSON.parse(response.data).products;
      console.log("menu items: ", this.menuItems);
      console.log("Productos: ", this.products);
    } else {
      console.log("Error en la respuesta de productos");
    }
  }

  handleImageError(event: any) {
    event.target.src = 'https://static.wikia.nocookie.net/videojuego/images/9/9c/Imagen_no_disponible-0.png/revision/latest?cb=20170910134200';
  }

  getProductTitle(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.title : 'Producto no encontrado';
  }

  showProduct(productId: number): void {
    this.selectedProduct = this.products.find(p => p.id === productId);
    document.getElementById('content')?.classList.add('hidden');
    document.getElementById('content-detail')?.classList.remove('hidden');
  }


  hideProductDetails(): void {
    this.selectedProduct = null;
    document.getElementById('content')?.classList.remove('hidden');
    document.getElementById('content-detail')?.classList.add('hidden');
  }
}