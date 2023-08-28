import { Injectable } from '@angular/core';
import { LoginInteractor } from '../interactor/login.interactor';
import { LoginComponent } from '../view/login/login.component';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginPresenter {
    private component: LoginComponent

    constructor(
        private interactor: LoginInteractor,
        private router: Router) { }

    setupComponent(component: LoginComponent): void {
        this.component = component;
    }

    login(username: string, password: string): void {
        this.interactor.login(username, password).subscribe(
            response => {
                if (!response.status) {
                    var errorMessage = response.message
                    this.component.onLoginSuccessfull(errorMessage);
                } else {
                    const responsData = JSON.parse(response.data);
                    const userToken = responsData.userToken
                    const nameUser = responsData.name + " " + responsData.lastName;
                    console.log("name full: ", nameUser);

                    localStorage.setItem('userToken', userToken);
                    localStorage.setItem('nameUser', nameUser);

                    this.router.navigate(['/home'], { queryParams: { token: userToken, nameUser: nameUser } });
                }
            },
            error => {
                console.log("entró a este error.", error);
                this.component.onLoginSuccessfull("Ocurrió un error en el servidor.");
            }
        );
    }
}