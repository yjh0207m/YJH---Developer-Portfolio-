package com.yjh.portfolio.dto;

import java.util.List;

public record ProjectDto(
        Long id,
        String title,
        String description,
        List<TechStackDto> techStack,
        String period,
        String role,
        String implementationType,
        String lesson,
        List<MetricDto> metrics,
        String githubUrl,
        String demoUrl,
        String pptUrl
) {
    public record TechStackDto(String name, String category) {}
    public record MetricDto(String value, String label) {}
}
