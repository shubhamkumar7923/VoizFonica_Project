package com.sr.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sr.model.Postpaid;

public interface PostpaidPlanRepo extends JpaRepository<Postpaid, Integer>{

}
