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
import com.sr.model.Admin;
//import com.sr.model.Employee;
import com.sr.model.User;
//import com.sr.repo.EmployeeRepository;
import com.sr.repo.Userrepo;
import com.sr.service.Usr;
import com.sr.controller.SmtpMailSender;

@RestController
@RequestMapping("/api")
public class Ucontroller {

	@Autowired
	private Usr service;
//	private SmtpMailSender smtpMailSender;
	@Autowired
    private Userrepo ur;

    @Autowired
   private SmtpMailSender smtpMailSender;

	@PostMapping("/registeruse")
	@CrossOrigin(origins = "http://localhost:4200")
	public User regUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj = service.fetchUserByEmailId(tempEmailId);
			if (userobj != null) {
				throw new Exception("user with " + tempEmailId + "is already exist");
			}
		}
		User userObj = null;
		smtpMailSender.send(user.getEmailId(), "Voizfonica Registration successfull", 
				"Hello "+user.getName()+" Welcome to voizfonica! Your registration was Successfull! EmailID:"+user.getEmailId()+"   Password:"+user.getPassword()+" Thankyou! ");
		userObj = service.saveUser(user);
		return userObj;
	}

	@PostMapping("/log")
	@CrossOrigin(origins="http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception
	{
		String tempEmailId=user.getEmailId();
		String tempPass=user.getPassword();
		User userObj=null;
		User i=null;
		if(tempEmailId !=null && tempPass !=null)
		{
			userObj=service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
			
		}
		if(userObj==null)
		{
			throw new Exception("Bad credentials");
		}
		return userObj;
	}
	
	 @PostMapping("/employees")
	    public User addEmployee(@RequestBody User user) {
	        return ur.save(user);
	    }


	    @GetMapping("/employees")
	    @CrossOrigin(origins = "http://localhost:4200")
	    public ResponseEntity<List<User>> getAllEmployees() 
	    {

	        return ResponseEntity.ok(ur.findAll());
	    }

	    @GetMapping("/employees/{id}")
	    @CrossOrigin(origins = "http://localhost:4200")
	    public ResponseEntity<User> getEmployeeById(@PathVariable(value = "id") Integer employeeId)
	            throws ResourceNotFoundException {
	       User user = ur.findById(employeeId)
	                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
	        return ResponseEntity.ok().body(user);
	    }

	    @PutMapping("/employees/{id}")
	    @CrossOrigin(origins = "http://localhost:4200")
	    public ResponseEntity<User> updateEmployee(@PathVariable(value = "id") Integer employeeId,
	                                                   @RequestBody User employeeDetails) throws ResourceNotFoundException {
	        User user = ur.findById(employeeId)
	                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

	        user.setAge(employeeDetails.getAge());
	        user.setEmailId(employeeDetails.getEmailId());
	        user.setName(employeeDetails.getName());
	        user.setPhone(employeeDetails.getPhone());
	        user.setAddress(employeeDetails.getAddress());
	        user.setAdhar(employeeDetails.getAdhar());

	        user.setCity(employeeDetails.getCity());
//	        employee.setPhone(employeeDetails.getPhone());
//	        employee.setDepartment(employeeDetails.getDepartment());

	        final User updatedEmployee = ur.save(user);
	        return ResponseEntity.ok(updatedEmployee);
	    }
	    

	    @DeleteMapping("/employees/{id}")
	    @CrossOrigin(origins = "http://localhost:4200")
	    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Integer employeeId)
	            throws ResourceNotFoundException {
	        User user = ur.findById(employeeId)
	                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

	        ur.delete(user);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
	    @PutMapping("/updatepassword/{id}")
		@CrossOrigin(origins = "http://localhost:4200")
		public User updateUserPassword(@PathVariable("id") String id,@RequestBody String pass) {
			//String newPass=user.getPassword();
			return service.upUserProfe(id, pass);
		}
          
	    @GetMapping("/profile/{emailId}")
		@CrossOrigin(origins = "http://localhost:4200")
		public User getById(@PathVariable("emailId") String emailId) throws ResourceNotFoundException{
			return service.getUserById(emailId);
		}
//	    @GetMapping("/employees/{emailId}")
//		@CrossOrigin(origins = "http://localhost:4200")
//		public User getById(@PathVariable("emailId") String emailId) throws ResourceNotFoundException{
//			return service.getUserById(emailId);
//		}
}

