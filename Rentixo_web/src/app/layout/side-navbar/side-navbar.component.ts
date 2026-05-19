import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-navbar',
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.sass'
})
export class SideNavbarComponent {

  isSidebarOpen: boolean = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
