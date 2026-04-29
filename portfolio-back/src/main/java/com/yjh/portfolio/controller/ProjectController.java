package com.yjh.portfolio.controller;

import com.yjh.portfolio.dto.ProjectDto;
import com.yjh.portfolio.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@Tag(name = "Projects", description = "프로젝트 API")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @Operation(summary = "전체 프로젝트 목록 조회")
    @GetMapping
    public List<ProjectDto> getAll() {
        return projectService.findAll();
    }

    @Operation(summary = "프로젝트 상세 조회")
    @GetMapping("/{id}")
    public ResponseEntity<ProjectDto> getById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(projectService.findById(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
