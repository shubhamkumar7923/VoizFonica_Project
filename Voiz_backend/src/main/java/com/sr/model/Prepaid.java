package com.sr.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Prepaid {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String service;
	private int cost;
	private int validity;
	private String benifits;
	
	public String getBenifits() {
		return benifits;
	}

	public void setBenifits(String benifits) {
		this.benifits = benifits;
	}

	public Prepaid() {
		
	}
	
	public Prepaid(int id, String service, int cost, int validity, String benifits) {
		super();
		this.id = id;
		this.service = service;
		this.cost = cost;
		this.validity = validity;
		this.benifits = benifits;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public int getValidity() {
		return validity;
	}
	public void setValidity(int validity) {
		this.validity = validity;
	}

	@Override
	public String toString() {
		return "Prepaid [id=" + id + ", service=" + service + ", cost=" + cost + ", validity=" + validity
				+ ", benifits=" + benifits + "]";
	}
	
}
