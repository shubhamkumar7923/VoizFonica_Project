package com.sr.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class User {

@Id	
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public long getAdhar() {
	return adhar;
}
public void setAdhar(long adhar) {
	this.adhar = adhar;
}
public long getPhone() {
	return phone;
}
public void setPhone(long phone) {
	this.phone = phone;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}

private String emailId;
private String password;
private String name;
private long adhar;
private long phone;
private String city;
private String address;
private int age;


public User()
{
	
}
@Override
public String toString() {
	return "User [id=" + id + ", emailId=" + emailId + ", password=" + password + ", name=" + name + ", adhar=" + adhar
			+ ", phone=" + phone + ", city=" + city + ", address=" + address + ", age=" + age + "]";
}
public User(int id, String emailId, String password, String name, long adhar, long phone, String city, String address,
		int age) {
	super();
	this.id = id;
	this.emailId = emailId;
	this.password = password;
	this.name = name;
	this.adhar = adhar;
	this.phone = phone;
	this.city = city;
	this.address = address;
	this.age = age;
}



}
