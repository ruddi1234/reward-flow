import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { QRCodeComponent } from './components/qrcode/qrcode.component';

export const routes: Routes = [
    {path: '',component: LandingPageComponent},
    {path: 'qrcode',component: QRCodeComponent}
];
