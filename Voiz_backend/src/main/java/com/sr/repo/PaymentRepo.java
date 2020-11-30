package com.sr.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sr.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Integer> {

	List<Payment> getByEmailId(String emailId);

}
