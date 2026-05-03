package com.yjh.portfolio.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(length = 50)
    private String period;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(length = 100)
    private String role;

    @Column(name = "implementation_type", length = 20)
    private String implementationType;

    @Column(columnDefinition = "TEXT")
    private String lesson;

    @Column(name = "github_url", length = 255)
    private String githubUrl;

    @Column(name = "demo_url", length = 255)
    private String demoUrl;

    @Column(name = "ppt_url", length = 255)
    private String pptUrl;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "project_tech_stack",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "tech_id")
    )
    private List<TechSkill> techSkills = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @OrderBy("id ASC")
    private List<ProjectMetric> metrics = new ArrayList<>();

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getPeriod() { return period; }
    public LocalDate getStartDate() { return startDate; }
    public LocalDate getEndDate() { return endDate; }
    public String getRole() { return role; }
    public String getImplementationType() { return implementationType; }
    public String getLesson() { return lesson; }
    public String getGithubUrl() { return githubUrl; }
    public String getDemoUrl() { return demoUrl; }
    public String getPptUrl() { return pptUrl; }
    public List<TechSkill> getTechSkills() { return techSkills; }
    public List<ProjectMetric> getMetrics() { return metrics; }

    public void setId(Long id) { this.id = id; }
    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setPeriod(String period) { this.period = period; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }
    public void setRole(String role) { this.role = role; }
    public void setImplementationType(String implementationType) { this.implementationType = implementationType; }
    public void setLesson(String lesson) { this.lesson = lesson; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    public void setDemoUrl(String demoUrl) { this.demoUrl = demoUrl; }
    public void setPptUrl(String pptUrl) { this.pptUrl = pptUrl; }
    public void setTechSkills(List<TechSkill> techSkills) { this.techSkills = techSkills; }
    public void setMetrics(List<ProjectMetric> metrics) { this.metrics = metrics; }
}
