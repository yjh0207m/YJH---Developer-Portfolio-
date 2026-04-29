package com.yjh.portfolio.repository;

import com.yjh.portfolio.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}
