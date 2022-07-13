package io.github.rahulrajsonu.bffcore.connectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/resource")
public class ResourceController {

    @GetMapping("/ping")
    public ResponseEntity<?> wakeup(){
        return ResponseEntity.ok("UP");
    }
}
