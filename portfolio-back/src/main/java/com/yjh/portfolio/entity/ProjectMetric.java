package com.yjh.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "project_metrics")
public class ProjectMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @Column(length = 50, nullable = false)
    private String value;

    @Column(length = 100, nullable = false)
    private String label;

    public Long getId() { return id; }
    public Project getProject() { return project; }
    public String getValue() { return value; }
    public String getLabel() { return label; }

    public void setId(Long id) { this.id = id; }
    public void setProject(Project project) { this.project = project; }
    public void setValue(String value) { this.value = value; }
    public void setLabel(String label) { this.label = label; }
}
