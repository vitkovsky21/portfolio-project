import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categories } from '../class/categories';
import { Site } from '../class/site';
import { TestData } from '../TestData/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  sitesSubject = new BehaviorSubject<Site[]>(TestData.sites)
  categoriesSubject = new BehaviorSubject<Categories[]>(TestData.categories)

  constructor() { }
}
