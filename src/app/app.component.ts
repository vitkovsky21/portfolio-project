import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('cursor1') cursor1 = {} as ElementRef;
  @ViewChild('cursor2') cursor2 = {} as ElementRef;

  @HostListener('window:mousemove', ['$event'])

  onMouseMove(e: MouseEvent) {
    this.cursor1.nativeElement.style.top = e.clientY + 'px';
    this.cursor1.nativeElement.style.left = e.clientX + 'px';
    this.cursor2.nativeElement.style.top = e.clientY + 'px';
    this.cursor2.nativeElement.style.left = e.clientX + 'px';
  }

}
