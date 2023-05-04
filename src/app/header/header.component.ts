import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() selected = new EventEmitter<string>()

  onSelect(selected: string) {
    this.selected.emit(selected)
  }
}