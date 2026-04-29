package com.yjh.portfolio.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "military")
public class Military {

    @Id
    private Integer id;

    @Column(length = 10, nullable = false)
    private String status;

    @Column(length = 20)
    private String branch;

    @Column(length = 10)
    private String rank;

    @Column(length = 30)
    private String specialty;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    public Integer getId() { return id; }
    public String getStatus() { return status; }
    public String getBranch() { return branch; }
    public String getRank() { return rank; }
    public String getSpecialty() { return specialty; }
    public LocalDate getStartDate() { return startDate; }
    public LocalDate getEndDate() { return endDate; }

    public void setId(Integer id) { this.id = id; }
    public void setStatus(String status) { this.status = status; }
    public void setBranch(String branch) { this.branch = branch; }
    public void setRank(String rank) { this.rank = rank; }
    public void setSpecialty(String specialty) { this.specialty = specialty; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }
}
