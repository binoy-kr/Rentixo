import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CarSectionsAddComponent } from '../car-sections-add/car-sections-add.component';

@Component({
  selector: 'app-car-section-listing',
  imports: [MatIconModule],
  templateUrl: './car-section-listing.component.html',
  styleUrl: './car-section-listing.component.sass'
})
export class CarSectionListingComponent {

  constructor(private dialog: MatDialog) { }

  openAddCarDialog() {
    this.dialog.open(CarSectionsAddComponent, {
      width: '1000px',
      maxWidth: '95vw',
      height: '85vh',
      panelClass: 'custom-dialog-container',
      disableClose: false
    });
  }
}