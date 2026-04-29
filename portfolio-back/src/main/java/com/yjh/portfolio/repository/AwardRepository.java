package com.yjh.portfolio.repository;

import com.yjh.portfolio.entity.Award;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AwardRepository extends JpaRepository<Award, Long> {
    List<Award> findAllByOrderByOrderNumAsc();
}
