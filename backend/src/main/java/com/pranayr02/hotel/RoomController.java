package com.pranayr02.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    @Autowired
    private RoomRepository repo;

    @PostMapping
    public Room create(@RequestBody Room room) {
        return repo.save(room);
    }

    @GetMapping
    public List<Room> all() {
        return repo.findAll();
    }
}
