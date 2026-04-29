package com.yjh.portfolio.controller;

import com.yjh.portfolio.dto.ResumeDto;
import com.yjh.portfolio.repository.AwardRepository;
import com.yjh.portfolio.repository.CertificationRepository;
import com.yjh.portfolio.repository.EducationRepository;
import com.yjh.portfolio.repository.MilitaryRepository;
import com.yjh.portfolio.repository.TechSkillRepository;
import com.yjh.portfolio.repository.TrainingRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Tag(name = "Resume", description = "이력서 데이터 API")
@RestController
@RequestMapping("/api")
public class ResumeController {

    private final EducationRepository educationRepository;
    private final MilitaryRepository militaryRepository;
    private final CertificationRepository certificationRepository;
    private final TrainingRepository trainingRepository;
    private final AwardRepository awardRepository;
    private final TechSkillRepository techSkillRepository;

    public ResumeController(
            EducationRepository educationRepository,
            MilitaryRepository militaryRepository,
            CertificationRepository certificationRepository,
            TrainingRepository trainingRepository,
            AwardRepository awardRepository,
            TechSkillRepository techSkillRepository) {
        this.educationRepository = educationRepository;
        this.militaryRepository = militaryRepository;
        this.certificationRepository = certificationRepository;
        this.trainingRepository = trainingRepository;
        this.awardRepository = awardRepository;
        this.techSkillRepository = techSkillRepository;
    }

    @Operation(summary = "이력서 전체 데이터 조회")
    @GetMapping("/resume")
    @Transactional(readOnly = true)
    public ResumeDto getResume() {
        List<ResumeDto.EducationDto> education = educationRepository
                .findAllByOrderByOrderNumAsc().stream()
                .map(e -> new ResumeDto.EducationDto(
                        e.getSchoolName(), e.getMajor(),
                        e.getStartYear(), e.getEndYear(),
                        e.getGraduation(), e.getGpa(), e.getGpaMax()))
                .toList();

        ResumeDto.MilitaryDto military = militaryRepository.findById(1)
                .map(m -> new ResumeDto.MilitaryDto(
                        m.getStatus(), m.getBranch(), m.getRank(),
                        m.getSpecialty(), m.getStartDate(), m.getEndDate()))
                .orElse(null);

        List<ResumeDto.CertificationDto> certifications = certificationRepository
                .findAllByOrderByOrderNumAsc().stream()
                .map(c -> new ResumeDto.CertificationDto(
                        c.getName(), c.getIssuer(), c.getIssuedDate(),
                        c.getCategory(), c.isInProgress()))
                .toList();

        List<ResumeDto.TrainingDto> trainings = trainingRepository
                .findAllByOrderByOrderNumAsc().stream()
                .map(t -> new ResumeDto.TrainingDto(
                        t.getInstitution(), t.getCourseName(), t.getContent(),
                        t.getStartDate(), t.getEndDate()))
                .toList();

        List<ResumeDto.AwardDto> awards = awardRepository
                .findAllByOrderByOrderNumAsc().stream()
                .map(a -> new ResumeDto.AwardDto(
                        a.getName(), a.getAwardYear(), a.getOrganization(), a.getNote()))
                .toList();

        return new ResumeDto(education, military, certifications, trainings, awards);
    }

    @Operation(summary = "기술 스택 목록 조회 (show_on_profile=true)")
    @GetMapping("/skills")
    @Transactional(readOnly = true)
    public List<Map<String, String>> getSkills() {
        return techSkillRepository.findAllByShowOnProfileTrueOrderByIdAsc()
                .stream()
                .map(ts -> Map.of("name", ts.getName(), "category", ts.getCategory()))
                .toList();
    }
}
