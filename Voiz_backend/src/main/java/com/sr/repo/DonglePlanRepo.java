package com.sr.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sr.model.Dongle;

public interface DonglePlanRepo extends JpaRepository<Dongle, Integer> {

}
