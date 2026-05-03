package com.yjh.portfolio.controller;

import com.yjh.portfolio.repository.ProfileRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Tag(name = "Profile", description = "프로필 API")
@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileRepository profileRepository;

    public ProfileController(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Operation(summary = "프로필 정보 조회")
    @GetMapping
    public ResponseEntity<Map<String, Object>> getProfile() {
        return profileRepository.findById(1)
                .map(p -> ResponseEntity.ok(Map.<String, Object>of(
                        "name",     p.getNameKo(),
                        "nameEn",   p.getNameEn() != null ? p.getNameEn() : "",
                        "email",    p.getEmail() != null ? p.getEmail() : "",
                        "phone",    p.getPhone() != null ? p.getPhone() : "",
                        "location", shortenAddress(p.getAddress()),
                        "github",   p.getGithubUrl() != null ? p.getGithubUrl() : "",
                        "summary",  p.getSummary() != null ? p.getSummary() : "",
                        "desiredJob", p.getDesiredJob() != null ? p.getDesiredJob() : "",
                        "position", p.getPosition() != null ? p.getPosition() : ""
                )))
                .orElse(ResponseEntity.notFound().build());
    }

    private String shortenAddress(String address) {
        if (address == null) return "";
        String[] parts = address.split(" ");
        return parts.length >= 3 ? parts[0] + " " + parts[1] + " " + parts[2] : address;
    }
}
