import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit{

  listing: Listing = {
        "id": '',
        "name": '',
        "description": '',
        "price": 0,
        "userId": '',
        "views": 0
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
    ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this.listingsService.getListingRoute(id).subscribe({
      next: listing => this.listing = listing,
      error: err => console.log(err),
      complete: ()=> console.log('Request has completed'),
    });
    console.log(' name:' + this.listing.name)
  }

  onSubmit(): void{
    
    
  }

  updateListing(listing: Listing){
    this.listingsService.updateListingRoute(listing.id).subscribe();
    this.router.navigateByUrl('/my-listings');
  }

}
