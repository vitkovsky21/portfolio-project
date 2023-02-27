import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  certificates: any[] = [];
  toggleZoomOne: boolean = false;
  toggleZoomTwo: boolean = false;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.certificatesSubject.subscribe(certificates => this.certificates = certificates)
  }

  zoomImage(id: number) {
    console.log(id)
    if (id == 0) {
      this.toggleZoomOne = !this.toggleZoomOne;
      this.toggleZoomTwo = false;
    } else if (id == 1) {
      this.toggleZoomTwo = !this.toggleZoomTwo;
      this.toggleZoomOne = false;
    }
  }

}
