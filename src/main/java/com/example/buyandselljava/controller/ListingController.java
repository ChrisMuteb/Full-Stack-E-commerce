package com.example.buyandselljava.controller;

import com.example.buyandselljava.entity.Listing;
import com.example.buyandselljava.service.ListingService;
import jakarta.transaction.Transactional;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class ListingController {
    private ListingService listingService;

    public ListingController(ListingService listingService) {
        this.listingService = listingService;
    }
    @GetMapping("/api/listings")
    public ResponseEntity<List<Listing>> getListings(){
        return new ResponseEntity<>(listingService.getListings(), HttpStatus.OK);
    }

    @GetMapping("/listings/{name}")
    public Listing getListing(@PathVariable String name){
        return listingService.getListing(name);
    }

    @GetMapping("/listingsById/{id}")
    public Listing getListingId(@PathVariable String id){
        return listingService.getListingById(id);
    }

    @PostMapping("/edit-listin/{id}")
    public Listing updateListing(@PathVariable Listing listing){
        return listingService.updateListing(listing);
    }

    @PostMapping("/listingsById/{id}/add-view")
    public Listing addViewListing(@PathVariable String id){
        return listingService.addViewToListing(id);
    }

    @GetMapping("/users/{userId}/listings")
    public List<Listing> getUserListingsRoute(@PathVariable String userId){
        return listingService.getUserListings(userId);
    }

    @PostMapping("/listings")
    public Listing createNewListingRoute(Listing listing){
        listing.setId(UUID.randomUUID().toString());
        return listingService.saveListing(listing);
    }
    @DeleteMapping("/listings/{id}")
    public String deleteListingRoute(String id){
        listingService.deleteById(id);
        return "Success!";
    }
}
