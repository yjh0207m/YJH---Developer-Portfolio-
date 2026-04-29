package com.yjh.portfolio.repository;

import com.yjh.portfolio.entity.TechSkill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TechSkillRepository extends JpaRepository<TechSkill, Long> {
    Optional<TechSkill> findByName(String name);
    List<TechSkill> findAllByShowOnProfileTrueOrderByIdAsc();
}
