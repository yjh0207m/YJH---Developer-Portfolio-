package com.yjh.portfolio.repository;

import com.yjh.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findAllByOrderByOrderNumAsc();
}
