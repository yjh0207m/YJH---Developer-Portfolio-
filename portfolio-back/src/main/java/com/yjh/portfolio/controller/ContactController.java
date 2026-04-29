package com.yjh.portfolio.controller;

import com.yjh.portfolio.dto.ContactDto;
import com.yjh.portfolio.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Contact", description = "문의 API")
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @Operation(summary = "문의 메일 전송")
    @PostMapping
    public ResponseEntity<Void> contact(@RequestBody ContactDto dto) {
        try {
            contactService.send(dto);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
