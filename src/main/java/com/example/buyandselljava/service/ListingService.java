package com.example.buyandselljava.service;

import com.example.buyandselljava.entity.Listing;
import com.example.buyandselljava.repository.ListingRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListingService {
    private ListingRepository listingRepository;

    public ListingService(ListingRepository listingRepository) {
        this.listingRepository = listingRepository;
    }

    public List<Listing> getListings(){
        return listingRepository.findAll();
    }

    public Listing getListing(String name){
        return listingRepository.findByName(name);
    }

    public Listing getListingById(String id){
        return listingRepository.findById(id).orElse(null);
    }

    public String deleteListing(Listing listing){
        listingRepository.delete(listing);
        return "item removed " + listing.getName();
    }

    public Listing updateListing(Listing listing){
        Listing existingListing = listingRepository.findByName(listing.getId());
        listing.setName(listing.getName());
        listing.setPrice(listing.getPrice());
        listing.setDescription(listing.getDescription());
        return listingRepository.save(existingListing);
    }

    public Listing saveListing(Listing listing){
        return listingRepository.save(listing);
    }

    public List<Listing> saveListings(List<Listing> listings){
        return listingRepository.saveAll(listings);
    }

    public Listing addViewToListing(String id){
        Listing existingListing = getListingById(id);
        existingListing.setViews(existingListing.getViews()+1);
        return listingRepository.save(existingListing);
    }

    public List<Listing> getUserListings(String userId){
        return listingRepository.findByUserId(userId);
    }

    @Transactional
    public void deleteById(String id){
        Listing existingListing = listingRepository.findById(id).orElse(null);
        listingRepository.delete(existingListing);
    }
}
