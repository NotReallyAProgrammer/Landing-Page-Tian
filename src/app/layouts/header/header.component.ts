import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  state: boolean = true;
  @Output() isDarkMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  darkMode(): void {
    if (this.state == true) {
      this.isDarkMode.emit(true);
      this.state = false;
    } else {
      this.isDarkMode.emit(false);
      this.state = true;
    }
  }
}
