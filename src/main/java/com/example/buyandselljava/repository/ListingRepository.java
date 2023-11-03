package com.example.buyandselljava.repository;

import com.example.buyandselljava.entity.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ListingRepository extends JpaRepository<Listing, String> {

    // JPQL
    // Native Query - SQL
    @Query(value = "SELECT * FROM listings l where l.name=?1", nativeQuery = true)
    Listing findByName(String name);

    @Query(value= "SELECT * from listings l where l.user_id=?1", nativeQuery = true)
    List<Listing> findByUserId(String userId);


}
