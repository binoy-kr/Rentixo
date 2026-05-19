import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-listing',
  imports: [MatIconModule],
  templateUrl: './customer-listing.component.html',
  styleUrl: './customer-listing.component.sass'
})
export class CustomerListingComponent {
  openAddcustomerDialog() {

  }
}
