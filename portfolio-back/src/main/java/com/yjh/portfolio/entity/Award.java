package com.yjh.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "awards")
public class Award {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(name = "award_year", length = 4)
    private String awardYear;

    @Column(length = 100)
    private String organization;

    @Column(length = 200)
    private String note;

    @Column(name = "order_num")
    private Integer orderNum;

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getAwardYear() { return awardYear; }
    public String getOrganization() { return organization; }
    public String getNote() { return note; }
    public Integer getOrderNum() { return orderNum; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setAwardYear(String awardYear) { this.awardYear = awardYear; }
    public void setOrganization(String organization) { this.organization = organization; }
    public void setNote(String note) { this.note = note; }
    public void setOrderNum(Integer orderNum) { this.orderNum = orderNum; }
}
