import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';

@Component({
  selector: 'app-landin-page',
  standalone: true,
  templateUrl: './landin-page.component.html',
  styleUrl: './landin-page.component.scss',
  imports: [HeaderComponent],
})
export class LandinPageComponent {}
