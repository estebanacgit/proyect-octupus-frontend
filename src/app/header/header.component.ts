import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 title: string = 'App Angular'

  constructor(public authService: AuthService, private router: Router){

  }

  logout(): void {
    Swal.fire('Logout', `${this.authService.usuario.username}, has cerrado session con exito!`, 'success');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
