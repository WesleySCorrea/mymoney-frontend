import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    // Aqui você pode adicionar a lógica de autenticação ou enviar os dados para o servidor
  }

  // Função chamada quando o botão "Recuperar Senha" é clicado
  onRecoverPassword(): void {
    console.log('Recuperar senha clicado');
    // Aqui você pode adicionar a lógica para mostrar um modal de recuperação ou redirecionar
  }
}
