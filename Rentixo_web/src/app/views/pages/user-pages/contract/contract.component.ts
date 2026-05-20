import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../layout/navbar/navbar.component";
import { FooterComponent } from "../../../../layout/footer/footer.component";

@Component({
  selector: 'app-contract',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.sass'
})
export class ContractComponent {

}
