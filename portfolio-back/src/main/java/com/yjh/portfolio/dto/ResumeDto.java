package com.yjh.portfolio.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public record ResumeDto(
        List<EducationDto> education,
        MilitaryDto military,
        List<CertificationDto> certifications,
        List<TrainingDto> trainings,
        List<AwardDto> awards
) {
    public record EducationDto(
            String schoolName,
            String major,
            String startYear,
            String endYear,
            String graduation,
            BigDecimal gpa,
            BigDecimal gpaMax
    ) {}

    public record MilitaryDto(
            String status,
            String branch,
            String rank,
            String specialty,
            LocalDate startDate,
            LocalDate endDate
    ) {}

    public record CertificationDto(
            String name,
            String issuer,
            LocalDate issuedDate,
            String category,
            boolean isInProgress
    ) {}

    public record TrainingDto(
            String institution,
            String courseName,
            String content,
            LocalDate startDate,
            LocalDate endDate
    ) {}

    public record AwardDto(
            String name,
            String awardYear,
            String organization,
            String note
    ) {}
}
