import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-app-listing-data-form',
  templateUrl: './app-listing-data-form.component.html',
  styleUrls: ['./app-listing-data-form.component.css']
})
export class AppListingDataFormComponent implements OnInit{
  @Input() buttonText: any;

  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = 0;

  name: string = '';
  description: string = '';
  price: string = '';
  listingId: string = '';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){

  }
  ngOnInit(): void {
    listingId: this.route.snapshot.paramMap.get('id');
  }

  OnButtonClicked(){
    this.onSubmit.emit({
      id: this.listingId,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      userId: '',
      views: 0,
    })
  }

}
