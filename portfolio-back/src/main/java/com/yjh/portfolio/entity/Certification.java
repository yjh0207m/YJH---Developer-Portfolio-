package com.yjh.portfolio.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "certifications")
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String name;

    @Column(length = 100)
    private String issuer;

    @Column(name = "issued_date")
    private LocalDate issuedDate;

    @Column(length = 30, nullable = false)
    private String category;

    @Column(name = "is_in_progress", nullable = false)
    private boolean isInProgress;

    @Column(name = "order_num")
    private Integer orderNum;

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getIssuer() { return issuer; }
    public LocalDate getIssuedDate() { return issuedDate; }
    public String getCategory() { return category; }
    public boolean isInProgress() { return isInProgress; }
    public Integer getOrderNum() { return orderNum; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setIssuer(String issuer) { this.issuer = issuer; }
    public void setIssuedDate(LocalDate issuedDate) { this.issuedDate = issuedDate; }
    public void setCategory(String category) { this.category = category; }
    public void setInProgress(boolean inProgress) { isInProgress = inProgress; }
    public void setOrderNum(Integer orderNum) { this.orderNum = orderNum; }
}
