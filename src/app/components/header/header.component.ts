import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('cursor1') cursor1 = {} as ElementRef;
  @ViewChild('cursor2') cursor2 = {} as ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu = false;
  toggleHeader = false;

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  onToggleHeader() {
    this.toggleHeader = !this.toggleHeader;
  }

  closeToggle() {
    this.toggleHeader = false;
    this.toggleMenu = false;
  }

  @HostListener('document:mousemove', ['$event'])

  onMouseMove(e: MouseEvent) {
    this.cursor1.nativeElement.style.top = e.pageY + 'px';
    this.cursor1.nativeElement.style.left = e.pageX + 'px';
    this.cursor2.nativeElement.style.top = e.pageY + 'px';
    this.cursor2.nativeElement.style.left = e.pageX + 'px';
  }
}
