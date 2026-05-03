package com.yjh.portfolio.service;

import com.yjh.portfolio.dto.ProjectDto;
import com.yjh.portfolio.entity.Project;
import com.yjh.portfolio.repository.ProjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Transactional(readOnly = true)
    public List<ProjectDto> findAll() {
        return projectRepository.findAllByOrderByEndDateDesc()
                .stream()
                .map(this::toDto)
                .toList();
    }

    @Transactional(readOnly = true)
    public ProjectDto findById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Project not found: " + id));
        return toDto(project);
    }

    private ProjectDto toDto(Project p) {
        List<ProjectDto.TechStackDto> techStack = p.getTechSkills().stream()
                .map(ts -> new ProjectDto.TechStackDto(ts.getName(), ts.getCategory()))
                .toList();
        List<ProjectDto.MetricDto> metrics = p.getMetrics().stream()
                .map(m -> new ProjectDto.MetricDto(m.getValue(), m.getLabel()))
                .toList();
        return new ProjectDto(
                p.getId(), p.getTitle(), p.getDescription(),
                techStack, p.getPeriod(), p.getRole(),
                p.getImplementationType(), p.getLesson(),
                metrics, p.getGithubUrl(), p.getDemoUrl(), p.getPptUrl()
        );
    }
}
