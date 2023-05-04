import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {


  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) onButtonClick(event: Event) {
    this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false
  }

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {

  }

}
