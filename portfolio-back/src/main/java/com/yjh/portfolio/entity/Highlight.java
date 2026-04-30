package com.yjh.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "highlights")
public class Highlight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String value;

    @Column(nullable = false, length = 100)
    private String label;

    @Column(length = 200)
    private String sub;

    @Column(name = "order_num")
    private Integer orderNum;

    @Column(name = "computed_type", length = 30)
    private String computedType;

    public Long getId() { return id; }
    public String getValue() { return value; }
    public String getLabel() { return label; }
    public String getSub() { return sub; }
    public Integer getOrderNum() { return orderNum; }
    public String getComputedType() { return computedType; }
}
