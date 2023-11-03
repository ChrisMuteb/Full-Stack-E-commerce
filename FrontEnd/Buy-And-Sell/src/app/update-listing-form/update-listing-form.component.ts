import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListingsService } from '../listings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-update-listing-form',
  templateUrl: './update-listing-form.component.html',
  styleUrls: ['./update-listing-form.component.css']
})
export class UpdateListingFormComponent implements OnInit{

  @Input() currName: string = '';
  @Input() currDescription: string = '';
  @Input() currPrice: number = 0;
  @Input() currId: string = '';
  @Output() onSubmit = new EventEmitter<Listing>();

  buttonText: string = 'Edit Listing';
  listing: Listing = {
    id: '',
    name: '',
    description: '',
    price: 0,
    views: 0,
    userId: ''
  }
  
  constructor(
    private listingsService: ListingsService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    
    // console.log(this.currName + ' ' + this.currDescription + ' ' + this.currPrice)
  }

  OnButtonClicked(){
    this.listing.name = this.currName;
    this.listing.description = this.currDescription;
    this.listing.price = this.currPrice;

    this.onSubmit.emit(this.listing);
    console.log(this.listing);
  }

}
