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
import com.sr.model.Dongle;
import com.sr.repo.DonglePlanRepo;

@RestController
@RequestMapping("/dong")
public class DongleController {

	@Autowired
	private DonglePlanRepo repo;
//	@Autowired
//	private PlanService service;
	
	
	@PostMapping("/dongleplan")
	@CrossOrigin(origins = "http://localhost:4200")
    public Dongle addPlan(@RequestBody Dongle plan) {
        return repo.save(plan);
    }
	
	@GetMapping("/dongleplan")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<Dongle>> getAllPlans() 
    {

        return ResponseEntity.ok(repo.findAll());
    }
	
	@GetMapping("/dongleplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Dongle> getDongleById(@PathVariable(value = "id") Integer dongleId)
            throws ResourceNotFoundException {
		Dongle dongle = repo.findById(dongleId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + dongleId));
        return ResponseEntity.ok().body(dongle);
    }
	@PutMapping("/dongleplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Dongle> updatePlan(@PathVariable(value = "id") Integer planId,
                                                   @RequestBody Dongle planDetails) throws ResourceNotFoundException {
		Dongle plan = repo.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not found for this id :: " + planId));
        plan.setService(planDetails.getService());
        plan.setCost(planDetails.getCost());
        plan.setValidity(planDetails.getValidity());
        plan.setBenifits(planDetails.getBenifits());
        final Dongle updatedPlan = repo.save(plan);
        return ResponseEntity.ok(updatedPlan);
    }
	
	@DeleteMapping("/dongleplan/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Map<String, Boolean> deletePlan(@PathVariable(value = "id") Integer planId)
            throws ResourceNotFoundException {
		Dongle plan = repo.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not found for this id :: " + planId));

        repo.delete(plan);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
