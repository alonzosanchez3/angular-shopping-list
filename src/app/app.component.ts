import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list-angular';
  selected = 'list'
  onSelectChange(event: string) {
    this.selected = event;
  }
}
