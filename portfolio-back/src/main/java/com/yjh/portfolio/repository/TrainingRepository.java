package com.yjh.portfolio.repository;

import com.yjh.portfolio.entity.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TrainingRepository extends JpaRepository<Training, Long> {
    List<Training> findAllByOrderByOrderNumAsc();
}
