import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";

@Component({
  selector: 'cap-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatapp-front';
  private faIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
