import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/class/site';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  sites: Site[] = [];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.sitesSubject.subscribe(sites => this.sites = sites);
  }

}
