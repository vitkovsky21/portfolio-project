import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Site } from '../class/site';
import { TestData } from '../TestData/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  sitesSubject = new BehaviorSubject<Site[]>(TestData.sites)

  constructor() { }
}
