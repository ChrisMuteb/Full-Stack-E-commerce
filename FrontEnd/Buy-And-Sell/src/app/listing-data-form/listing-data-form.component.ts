import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listing } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit{

  @Input() buttonText: any;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';

  name: string = '';
  description: string = '';
  price: string = '';

  // update output event
  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  // emit the data to the parent
  OnButtonClicked(): void{
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price),
      userId: '12345',
      views: 0,
    });

    console.log('listing-data-form.component');
  }

}
