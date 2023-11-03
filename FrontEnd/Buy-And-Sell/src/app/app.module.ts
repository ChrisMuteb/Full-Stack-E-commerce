import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';
import { AppListingDataFormComponent } from './app-listing-data-form/app-listing-data-form.component';
import { UpdateListingFormComponent } from './update-listing-form/update-listing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ContactPageComponent,
    EditListingPageComponent,
    ListingDetailPageComponent,
    NewListingPageComponent,
    MyListingPageComponent,
    NavBarComponent,
    ListingDataFormComponent,
    AppListingDataFormComponent,
    UpdateListingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
