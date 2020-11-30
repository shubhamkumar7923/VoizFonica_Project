package com.sr.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sr.model.Prepaid;

public interface PrepaidPlanRepo extends JpaRepository<Prepaid, Integer> {

}
