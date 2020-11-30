package com.sr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sr.repo.PrepaidPlanRepo;

@Service
public class PrepaidPlanService {

	@Autowired
	private PrepaidPlanRepo planRepo;
}
