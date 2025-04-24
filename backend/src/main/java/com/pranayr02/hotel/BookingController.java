package com.pranayr02.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingRepository repo;

    @PostMapping
    public Booking create(@RequestBody Booking booking) {
        return repo.save(booking);
    }

    @GetMapping
    public List<Booking> all() {
        return repo.findAll();
    }
}
