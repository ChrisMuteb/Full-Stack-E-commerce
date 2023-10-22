import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';

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
    ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

  }

  onSubmit(): void{
    this.router.navigateByUrl('/my-listings');
  }

}
