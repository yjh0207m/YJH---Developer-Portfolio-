package com.yjh.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tech_skills",
       uniqueConstraints = @UniqueConstraint(columnNames = "name"))
public class TechSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String name;

    @Column(length = 30, nullable = false)
    private String category;

    @Column(name = "show_on_profile", nullable = false)
    private boolean showOnProfile = true;

    public TechSkill() {}

    public TechSkill(String name, String category) {
        this.name = name;
        this.category = category;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getCategory() { return category; }
    public boolean isShowOnProfile() { return showOnProfile; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setCategory(String category) { this.category = category; }
    public void setShowOnProfile(boolean showOnProfile) { this.showOnProfile = showOnProfile; }
}
