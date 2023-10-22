import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent implements OnInit{

  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.listingsService.getUserListingsRoute('12345').subscribe(
      {
        next: listings => this.listings = listings,
        error: err => console.log(err),
        complete: () => console.log('Request has completed')
      }
    )
  }

  onDeleteClicked(listingId: string): void{
    this.listingsService.deleteListingRoute(listingId).subscribe();
    this.router.navigateByUrl('/listings');
    alert(`Deleting your listing with id ${listingId}`);
  }
}
