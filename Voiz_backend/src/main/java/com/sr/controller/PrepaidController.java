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
import com.sr.model.Prepaid;
import com.sr.repo.PrepaidPlanRepo;
import com.sr.service.PrepaidPlanService;

@RestController
@RequestMapping("/pre")
public class PrepaidController {

	@Autowired
	private PrepaidPlanRepo repo;
//	@Autowired
//	private PlanService service;
	
	
	@PostMapping("/prepaidplan")
	@CrossOrigin(origins = "http://localhost:4200")
    public Prepaid addPlan(@RequestBody Prepaid plan) {
        return repo.save(plan);
    }
	
	@GetMapping("/prepaidplan")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<Prepaid>> getAllPlans() 
    {

        return ResponseEntity.ok(repo.findAll());
    }
	
	@GetMapping("/prepaidplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Prepaid> getPrepaidById(@PathVariable(value = "id") Integer prepaidId)
            throws ResourceNotFoundException {
		Prepaid prepaid = repo.findById(prepaidId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + prepaidId));
        return ResponseEntity.ok().body(prepaid);
    }
	@PutMapping("/prepaidplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Prepaid> updatePlan(@PathVariable(value = "id") Integer planId,
                                                   @RequestBody Prepaid planDetails) throws ResourceNotFoundException {
        Prepaid plan = repo.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not found for this id :: " + planId));
        plan.setService(planDetails.getService());
        plan.setCost(planDetails.getCost());
        plan.setValidity(planDetails.getValidity());
        plan.setBenifits(planDetails.getBenifits());
        final Prepaid updatedPlan = repo.save(plan);
        return ResponseEntity.ok(updatedPlan);
    }
	
	@DeleteMapping("/prepaidplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Map<String, Boolean> deletePlan(@PathVariable(value = "id") Integer planId)
            throws ResourceNotFoundException {
        Prepaid plan = repo.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not found for this id :: " + planId));

        repo.delete(plan);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
