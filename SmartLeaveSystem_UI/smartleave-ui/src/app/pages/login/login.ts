import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  email = '';
  password = '';
  showPassword = false;
  rememberMe = false;

  isLoading: boolean = false;   // ✅ ADD THIS LINE
  errorMessage: string = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}