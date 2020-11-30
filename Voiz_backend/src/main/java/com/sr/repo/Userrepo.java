package com.sr.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;

import com.sr.model.User;

public interface Userrepo extends JpaRepository<User, Integer> {
  public User findByEmailId(String emailId);
  public User findByEmailIdAndPassword(String emailId, String password);
}
