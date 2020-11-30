package com.sr.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Admin {

@Id	
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private String emailId;
//private String userName;
private String password;
private String fname;
private String lname;
private int age;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmailId() {
	return emailId;
}
public String getFname() {
	return fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}

public String getLname() {
	return lname;
}
public void setLname(String lname) {
	this.lname = lname;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
//public String getUserName() {
//	return userName;
//}
//public void setUserName(String userName) {
//	this.userName = userName;
//}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

public Admin(int id, String emailId, String password, String fname, String lname, int age) {
	this.id = id;
	this.emailId = emailId;
	this.password = password;
	this.fname = fname;
	this.lname = lname;
	this.age = age;
}
public Admin()
{
	
}
@Override
public String toString() {
	return "User [id=" + id + ", emailId=" + emailId + ", password=" + password + ", fname=" + fname + ", lname="
			+ lname + ", age=" + age + "]";
}


}
