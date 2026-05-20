import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../layout/navbar/navbar.component";
import { FooterComponent } from "../../../../layout/footer/footer.component";

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent {

}
