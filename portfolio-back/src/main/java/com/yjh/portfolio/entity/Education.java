package com.yjh.portfolio.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "education")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "school_name", length = 100, nullable = false)
    private String schoolName;

    @Column(length = 100)
    private String major;

    @Column(name = "start_year", length = 4)
    private String startYear;

    @Column(name = "end_year", length = 4)
    private String endYear;

    @Column(length = 20)
    private String graduation;

    @Column(precision = 3, scale = 2)
    private BigDecimal gpa;

    @Column(name = "gpa_max", precision = 3, scale = 2)
    private BigDecimal gpaMax;

    @Column(name = "order_num")
    private Integer orderNum;

    public Long getId() { return id; }
    public String getSchoolName() { return schoolName; }
    public String getMajor() { return major; }
    public String getStartYear() { return startYear; }
    public String getEndYear() { return endYear; }
    public String getGraduation() { return graduation; }
    public BigDecimal getGpa() { return gpa; }
    public BigDecimal getGpaMax() { return gpaMax; }
    public Integer getOrderNum() { return orderNum; }

    public void setId(Long id) { this.id = id; }
    public void setSchoolName(String schoolName) { this.schoolName = schoolName; }
    public void setMajor(String major) { this.major = major; }
    public void setStartYear(String startYear) { this.startYear = startYear; }
    public void setEndYear(String endYear) { this.endYear = endYear; }
    public void setGraduation(String graduation) { this.graduation = graduation; }
    public void setGpa(BigDecimal gpa) { this.gpa = gpa; }
    public void setGpaMax(BigDecimal gpaMax) { this.gpaMax = gpaMax; }
    public void setOrderNum(Integer orderNum) { this.orderNum = orderNum; }
}
