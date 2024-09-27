import { Component } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  HandleClick(){
    console.log("Click");
    this.router.navigate(['/qrcode']);
  }
}
