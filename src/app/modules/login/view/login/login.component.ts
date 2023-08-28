import { Component, OnInit } from '@angular/core';
import { LoginPresenter } from '../../presenter/login.presenter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  usernameIsEmpty: boolean = false;
  passwordIsEmpty: boolean = false;
  errorMessage: string = '';

  showSpinner: boolean = false;

  showError: boolean = false;

  constructor(
    private presenter: LoginPresenter,
    private router: Router) { }

  ngOnInit(): void {
    const storedToken = localStorage.getItem('userToken');
    const storedUserName = localStorage.getItem('nameUser');

    console.log("xxxxx ", storedUserName);
    
    if (storedToken) {
      this.router.navigate(['/home'], { queryParams: { token: storedToken, nameUser: storedUserName } });
    }

    this.presenter.setupComponent(this);
    
  }

  onLogin(): void {
    this.usernameIsEmpty = this.username.trim() === '';
    this.passwordIsEmpty = this.password.trim() === '';

    if (this.usernameIsEmpty && this.passwordIsEmpty) {
      this.errorMessage = "Por favor ingrese un usuario y una contraseña."
      this.showError = true;
    } else if (this.usernameIsEmpty) {
      this.errorMessage = "Por favor ingrese un usuario";
      this.showError = true;
    } else if (this.passwordIsEmpty) {
      this.errorMessage = "Por favor ingresa una contraseña";
      this.showError = true;
    }
    else {
      this.errorMessage = '';
      this.showSpinner = true;
      this.presenter.login(this.username, this.password);
    }
  }

  onLoginSuccessfull(error: string): void {
    this.showSpinner = false;
    this.errorMessage = error;
    this.showError = true;
    this.clearForm();
  }

  clearForm(): void {
    this.username = '';
    this.password = '';
  }

}