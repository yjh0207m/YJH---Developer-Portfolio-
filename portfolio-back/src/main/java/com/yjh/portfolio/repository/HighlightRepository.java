package com.yjh.portfolio.repository;

import com.yjh.portfolio.entity.Highlight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HighlightRepository extends JpaRepository<Highlight, Long> {
    List<Highlight> findAllByOrderByOrderNumAsc();
}
