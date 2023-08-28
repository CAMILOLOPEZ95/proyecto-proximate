import { Injectable } from '@angular/core';
import { HomeInteractor } from '../interactor/home.interactor';
import { HomeComponent } from '../view/home/home.component';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HomePresenter {
    private component: HomeComponent;

    constructor(private interactor: HomeInteractor, private router: Router) { }

    setupComponent(component: HomeComponent): void {
        this.component = component;
    }

    loadProducts(userToken: string): void {
        console.log("token que llega al presenter: ", userToken);
        this.interactor.getProducts(userToken).subscribe(
            response => {
                if (response.status) {
                    console.log("response true: ", response);
                    this.component.onProductsLoaded(response);

                } else {
                    console.log("response false: ", response);
                }
            },
            error => {
                console.log("Error al cargar los productos.", error);

            }
        );
    }
}