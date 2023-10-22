import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit{

  listing: Listing = {
    id: '',
    name: '',
    description: '',
    price: 0,
    userId: '',
    views: 0,
  };

  constructor(
    private listingsService: ListingsService,
    private route: ActivatedRoute,
  ){

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingRoute(id)
      .subscribe({
        next: listing => this.listing = listing,
        error: err => console.log(err),
        complete: ()=> console.log('Request has completed'),
      });
      this.listingsService.addViewToListing(id)
        .subscribe(() => console.log('Views updated'))

  }

}
