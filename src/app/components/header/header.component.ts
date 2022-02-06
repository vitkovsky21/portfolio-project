import { Component, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
}
