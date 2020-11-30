package com.sr.service;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sr.model.Admin;
import com.sr.model.User;
import com.sr.repo.Userrepo;

@Service
public class Usr {

@Autowired	
private Userrepo repo;
 public User saveUser(User user) 
 {
	return repo.save(user);
 }
 public User fetchUserByEmailId(String email)
 {
	return repo.findByEmailId(email);
 }
 
public User fetchUserByEmailIdAndPassword(String email, String password) {
	return repo.findByEmailIdAndPassword(email, password);	
}

public Iterable<User> fetchByEmailId(String email) {
 return (Iterable<User>) repo.findByEmailId(email);
}
public List<User> fetchById(User ad) {
	
	return null;
}
public User upUserProfe(String id, String pass) {
	User db=repo.findByEmailId(id);	 
	db.setPassword(pass);
	User rd =repo.save(db);
	return rd;
	}
public User getUserById(String emailId) {
return repo.findByEmailId(emailId);
}
//public User getUserById(String emailId) {
//	return repo.findByEmailId(emailId);
//}
}
