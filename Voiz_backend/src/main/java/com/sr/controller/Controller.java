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
import com.sr.model.User;
import com.sr.service.Regservice;

@RestController
//@RequestMapping
public class Controller {

	@Autowired
	private Regservice service;
//	private Empservice esr;

	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	public Admin regAdmin(@RequestBody Admin user) throws Exception {
		String tempEmailId = user.getEmailId();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			Admin userobj = service.fetchUserByEmailId(tempEmailId);
			if (userobj != null) {
				throw new Exception("user with " + tempEmailId + "is already exist");
			}
		}
		Admin userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}

	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public Admin loginAdmin(@RequestBody Admin user) throws Exception
	{
		String tempEmailId=user.getEmailId();
		String tempPass=user.getPassword();
		Admin userObj=null;
		Admin i=null;
		if(tempEmailId !=null && tempPass !=null)
		{
			userObj=service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
			//i=service.fetchById();
		}
		if(userObj==null)
		{
			throw new Exception("Bad credentials");
		}
		return userObj;
	}
	
	@GetMapping("/loginsuccess")
	@CrossOrigin(origins="http://localhost:4200")
	public Admin validateAdmin(@RequestBody Admin user) throws Exception
	{
		String tempEmailId=user.getEmailId();
		String tempPass=user.getPassword();
		Admin userObj=null;
		Admin i=null;
		if(tempEmailId !=null && tempPass !=null)
		{
			userObj=service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
			i=service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userObj==null)
		{
			throw new Exception("Bad credentials");
		}
		return userObj;
	}
   
          
    


	/*
	 * @GetMapping(value = "/loginsuccess")
	 * 
	 * @CrossOrigin(origins="http://localhost:4200")
	 */
//	public Iterable<Admin> getallAdmin(){
//		return service.getallAdmin();
//	}
//	public Optional<Admin> getAdminProfile(@PathVariable("id") Integer id){
//		return service.fetchUserById(id);
//	}
//	public Admin getAdminProfile(@PathVariable("emailId") String emailId) {
//		return service.fetchUserByEmailId(emailId);
//	}
	public Iterable<Admin> getallAdmin(String email){
		return service.fetchByEmailId(email);
	}
	 @GetMapping("/profile/{emailId}")
		@CrossOrigin(origins = "http://localhost:4200")
		public Admin getById(@PathVariable("emailId") String emailId) throws ResourceNotFoundException{
			return service.getUserById(emailId);
		}
	 @PutMapping("/updatepassword/{id}")
		@CrossOrigin(origins = "http://localhost:4200")
		public Admin updateUserPassword(@PathVariable("id") String id,@RequestBody String pass) {
			//String newPass=user.getPassword();
			return service.upUserProfe(id, pass);
		}
}
/*
 * @PostMapping("api/employees")
 * 
 * @CrossOrigin(origins="http://localhost:4200") public Employee
 * addEmployee(@RequestBody Employee employee) { return
 * esr.saveOrUpdate(employee); }
 * 
 * 
 * @GetMapping("api/employees")
 * 
 * @CrossOrigin(origins="http://localhost:4200") public List<Employee>
 * getAllEmployees() { return esr.getAllEmployees(); }
 * 
 * @GetMapping("api/employees/{id}")
 * 
 * @CrossOrigin(origins="http://localhost:4200") public Employee
 * getEmployeeById(@PathVariable(value = "id") Integer employeeId) { return
 * esr.getBooksById(employeeId); }
 * 
 * @PutMapping("api/employees/{id}")
 * 
 * @CrossOrigin(origins="http://localhost:4200") public Employee
 * updateEmployee(@PathVariable(value = "id") Integer employeeId,
 * 
 * @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
 * Employee employee = esr.getBooksById(employeeId);
 * 
 * employee.setName(employeeDetails.getName());
 * employee.setEmail(employeeDetails.getEmail());
 * employee.setPhone(employeeDetails.getPhone());
 * employee.setDepartment(employeeDetails.getDepartment());
 * 
 * //final Employee updatedEmployee = esr.save(employee); return employee; }
 * 
 * @DeleteMapping("api/employees/{id}")
 * 
 * @CrossOrigin(origins="http://localhost:4200") public Map<String, Boolean>
 * deleteEmployee(@PathVariable(value = "id") Integer employeeId) throws
 * ResourceNotFoundException { Employee employee =
 * employeeRepository.findById(employeeId) .orElseThrow(() -> new
 * ResourceNotFoundException("Employee not found for this id :: " +
 * employeeId));
 * 
 * employeeRepository.delete(employee); Map<String, Boolean> response = new
 * HashMap<>(); response.put("deleted", Boolean.TRUE); return response; }
 * 
 * }
 */
