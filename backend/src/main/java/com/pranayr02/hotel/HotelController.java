package com.pranayr02.hotel;

import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hotels")
public class HotelController {

  private final HotelRepository repo;
  public HotelController(HotelRepository repo) { this.repo = repo; }

  @GetMapping           // GET /hotels
  public List<Hotel> all() { return repo.findAll(); }

  @PostMapping          // POST /hotels
  public Hotel add(@RequestBody Hotel h) { return repo.save(h); }
}
