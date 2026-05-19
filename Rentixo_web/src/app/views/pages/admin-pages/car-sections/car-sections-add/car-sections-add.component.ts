import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-car-sections-add',
  imports: [MatIconModule],
  templateUrl: './car-sections-add.component.html',
  styleUrl: './car-sections-add.component.sass'
})
export class CarSectionsAddComponent {

  constructor(private dialogRef: MatDialogRef<CarSectionsAddComponent>) { }

  close() {
    this.dialogRef.close();
  }
}