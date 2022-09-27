import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/class/categories';
import { Site } from 'src/app/class/site';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { TestData } from 'src/app/TestData/TestData';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  sites: Site[] = [];
  sortedSites: Site[] = [];
  categories: Categories[] = []

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.sitesSubject.subscribe(sites => this.sites = sites);
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories)
  }

  sortByCategories(number: number) {
    this.sites = TestData.sites;
    this.sites.map((item: any) => {
      if (item.category == TestData.categories[number]) {
        this.sortedSites.push(item);
        this.sites = this.sortedSites;
      }
    })
    this.sortedSites = [];
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
