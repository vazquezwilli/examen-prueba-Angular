import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
    private router = inject(Router);
  userName: any;

  
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
