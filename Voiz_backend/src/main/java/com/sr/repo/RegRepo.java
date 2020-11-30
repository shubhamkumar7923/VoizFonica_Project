package com.sr.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;

import com.sr.model.Admin;

public interface RegRepo extends JpaRepository<Admin, Integer> {
  public Admin findByEmailId(String email);
  public Admin findByEmailIdAndPassword(String emailId, String password);
public Admin findByFname(String fname);
}
