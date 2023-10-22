import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit{
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService){}

  ngOnInit(): void {
    this.listingsService.getListingsRoute()
      .subscribe({
        next: listings => this.listings = listings,
        error: err => console.log(err),
        complete: () => console.log('Request has completed')
      });
  }
  
}
