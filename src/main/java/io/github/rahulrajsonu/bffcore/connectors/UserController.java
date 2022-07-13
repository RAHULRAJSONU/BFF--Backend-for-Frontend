package io.github.rahulrajsonu.bffcore.connectors;

import io.github.rahulrajsonu.bffcore.model.UserDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        log.info("createUser with email: {}", userDTO.getEmailAddress());
        return ResponseEntity.ok(userDTO);
    }
}
