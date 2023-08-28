import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded = false;
  @Input() nameUser: string;
  @Input() products: any[];
  @Input() menuItems: any[];

  @Output() toggleSidebar = new EventEmitter<void>();

  queryParams: any;

  constructor(private router: Router) { }
 
  ngOnInit(): void {
    this.queryParams = {
      token: localStorage.getItem('userToken'),
      nameUser: localStorage.getItem('nameUser')
  };

  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  logout(): void {
    localStorage.removeItem('userToken');
    localStorage.removeItem('nameUser');

    this.router.navigate(['/login']);
  }

  getProductTitle(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.title : 'Producto no encontrado';}

}