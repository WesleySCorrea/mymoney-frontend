import { Component } from '@angular/core';
import { AuthService } from '../../services/auto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login bem sucedido, bem vindo ' + response.username);

        this.authService.storeTokens(response.accessToken, response.refreshToken)

        this.router.navigate(['/'])
      },
      error: (error) => {
        console.error('Erro ao fazer login:', error);
        
        if (error.status === 401) {
          alert('Usuário ou senha inválidos. Por favor, tente novamente. 🙄');
        } else if (error.status === 403) {
          alert('Você não tem permissão para acessar esta página. 😡');
        } else if (error.status === 0) {
          alert('Não foi possível acessar o servidor. Verifique sua conexão. 😢');
        } else {
          alert('Um erro inesperado aconteceu 😢. Por favor, tente novamente mais tarde. 🤔');
        }
      }
    });
  }

  // Função chamada quando o botão "Recuperar Senha" é clicado
  onRecoverPassword(): void {
    console.log('Recuperar senha clicado');
    // Aqui você pode adicionar a lógica para mostrar um modal de recuperação ou redirecionar
  }
}
