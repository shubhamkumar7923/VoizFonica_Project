package com.sr.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sr.ResourceNotFoundException;
import com.sr.model.Postpaid;
import com.sr.repo.PostpaidPlanRepo;

@RestController
@RequestMapping("/post")
public class PostpaidController {

	@Autowired
	private PostpaidPlanRepo repo;
//	@Autowired
//	private PlanService service;
	
	
	@PostMapping("/postpaidplan")
	@CrossOrigin(origins = "http://localhost:4200")
    public Postpaid addPlan(@RequestBody Postpaid plan) {
        return repo.save(plan);
    }
	
	@GetMapping("/postpaidplan")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<Postpaid>> getAllPlans() 
    {

        return ResponseEntity.ok(repo.findAll());
    }
	
	@GetMapping("/postpaidplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Postpaid> getPostpaidById(@PathVariable(value = "id") Integer postpaidId)
            throws ResourceNotFoundException {
		Postpaid postpaid = repo.findById(postpaidId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + postpaidId));
        return ResponseEntity.ok().body(postpaid);
    }
	@PutMapping("/postpaidplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Postpaid> updatePlan(@PathVariable(value = "id") Integer planId,
                                                   @RequestBody Postpaid planDetails) throws ResourceNotFoundException {
        Postpaid plan = repo.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not found for this id :: " + planId));
        plan.setService(planDetails.getService());
        plan.setCost(planDetails.getCost());
        plan.setValidity(planDetails.getValidity());
        plan.setBenifits(planDetails.getBenifits());
        final Postpaid updatedPlan = repo.save(plan);
        return ResponseEntity.ok(updatedPlan);
    }
	
	@DeleteMapping("/postpaidplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Map<String, Boolean> deletePlan(@PathVariable(value = "id") Integer planId)
            throws ResourceNotFoundException {
        Postpaid plan = repo.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not found for this id :: " + planId));

        repo.delete(plan);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
