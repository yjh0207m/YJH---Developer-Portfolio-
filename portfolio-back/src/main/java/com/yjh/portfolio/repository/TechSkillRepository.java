package com.yjh.portfolio.repository;

import com.yjh.portfolio.entity.TechSkill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TechSkillRepository extends JpaRepository<TechSkill, Long> {
    List<TechSkill> findAllByShowOnProfileTrueOrderByIdAsc();
}
