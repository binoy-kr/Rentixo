import { Component } from '@angular/core';
import { FooterComponent } from "../../../../layout/footer/footer.component";
import { NavbarComponent } from "../../../../layout/navbar/navbar.component";

@Component({
  selector: 'app-collections',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.sass'
})
export class CollectionsComponent {

}
