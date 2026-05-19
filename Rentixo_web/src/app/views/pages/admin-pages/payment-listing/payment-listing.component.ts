import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payment-listing',
  imports: [
    MatIconModule
  ],
  templateUrl: './payment-listing.component.html',
  styleUrl: './payment-listing.component.sass'
})
export class PaymentListingComponent {
  openAddPaymentDialog() {

  }
}
