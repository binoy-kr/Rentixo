import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-booking-sections-listing',
  imports: [
    MatIconModule
  ],
  templateUrl: './booking-sections-listing.component.html',
  styleUrl: './booking-sections-listing.component.sass'
})
export class BookingSectionsListingComponent {
  openAddbookingDialog() {
    alert('hello');
  }
}
