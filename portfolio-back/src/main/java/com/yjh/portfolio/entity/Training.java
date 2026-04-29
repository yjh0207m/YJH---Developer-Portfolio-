package com.yjh.portfolio.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "trainings")
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String institution;

    @Column(name = "course_name", length = 200)
    private String courseName;

    @Column(length = 200)
    private String content;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "order_num")
    private Integer orderNum;

    public Long getId() { return id; }
    public String getInstitution() { return institution; }
    public String getCourseName() { return courseName; }
    public String getContent() { return content; }
    public LocalDate getStartDate() { return startDate; }
    public LocalDate getEndDate() { return endDate; }
    public Integer getOrderNum() { return orderNum; }

    public void setId(Long id) { this.id = id; }
    public void setInstitution(String institution) { this.institution = institution; }
    public void setCourseName(String courseName) { this.courseName = courseName; }
    public void setContent(String content) { this.content = content; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }
    public void setOrderNum(Integer orderNum) { this.orderNum = orderNum; }
}
