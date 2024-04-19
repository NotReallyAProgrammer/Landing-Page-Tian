import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-landin-page',
  standalone: true,
  templateUrl: './landin-page.component.html',
  styleUrl: './landin-page.component.scss',
  imports: [HeaderComponent, FooterComponent],
})
export class LandinPageComponent {}
