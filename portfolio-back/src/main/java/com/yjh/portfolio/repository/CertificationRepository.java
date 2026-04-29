package com.yjh.portfolio.repository;

import com.yjh.portfolio.entity.Certification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CertificationRepository extends JpaRepository<Certification, Long> {
    List<Certification> findAllByOrderByOrderNumAsc();
}
