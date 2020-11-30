package com.sr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sr.model.Admin;
import com.sr.repo.RegRepo;

@Service
public class Regservice {

@Autowired	
private RegRepo repo;
 public Admin saveUser(Admin user) 
 {
	return repo.save(user);
 }
 public Admin fetchUserByEmailId(String email)
 {
	return repo.findByEmailId(email);
 }
 
public Admin fetchUserByEmailIdAndPassword(String email, String password) {
	return repo.findByEmailIdAndPassword(email, password);	
}
public Admin upUserProfe(String id, String pass) {
	Admin db=repo.findByEmailId(id);	 
	db.setPassword(pass);
	Admin rd =repo.save(db);
	return rd;
	}
//public Iterable<Admin> getallAdmin() {
//return repo.findAll();
//}
//public Optional<Admin> fetchUserById(Integer id) {
//return repo.findById(id);
//
//}
public Iterable<Admin> fetchByEmailId(String email) {
 return (Iterable<Admin>) repo.findByEmailId(email);
}
public List<Admin> fetchById(Admin ad) {
	
	return null;
}
public Admin fetchByFname(String fname) {
	return repo.findByFname(fname);
}
public Admin getUserById(String emailId) {
return repo.findByEmailId(emailId);
}
}
