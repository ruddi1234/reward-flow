import { Component } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";

@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.css'
})
export class QRCodeComponent {

}
