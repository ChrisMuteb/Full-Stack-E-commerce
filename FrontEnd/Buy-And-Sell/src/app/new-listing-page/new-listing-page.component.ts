import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit{

  
  constructor(
    private router: Router,
    private listingsService: ListingsService,
  ){}
  ngOnInit(): void {}

  onSubmit(data: Listing): void{
    alert('creating a new listing...');
    this.listingsService.createNewListingRoute(data).subscribe(() => {
      this.router.navigateByUrl('/my-listings');
    });
    
  }

}
