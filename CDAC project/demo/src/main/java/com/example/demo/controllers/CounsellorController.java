package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Counsellor;
import com.example.demo.entities.CounsellorRegister;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.SecurityQuestion;
import com.example.demo.services.AreaService;
import com.example.demo.services.CounsellorService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.SecurityService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CounsellorController {

	@Autowired
	CounsellorService cservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	SecurityService sservice;
	
	@Autowired
	AreaService aservice;
	
	@Autowired
	LoginService lservice;
	
	@PostMapping("/regCounsellor")
	public Counsellor regCounsellor(@RequestBody CounsellorRegister cr)
	{
		Role r = rservice.getRole(2);
		
		int a=Integer.parseInt(cr.getQuestion_id());
		
		SecurityQuestion s=sservice.findById(a);
	    
		Login l = new Login(cr.getEmail_id(),cr.getPassword(),r ,false,s,cr.getAnswer());
		lservice.save(l);
	    
		int d=Integer.parseInt(cr.getArea());
	     
		Area b= aservice.findById(d);
	          
	      Counsellor c=new Counsellor(cr.getFname(),cr.getMname(),cr.getLname(),cr.getContact(),cr.getAddress_line(),b,
	    		 
	     cr.getGender(),cr.getSpecialization(),cr.getExperience(),l);
	     
	     return cservice.registerCounsellor(c);
	}
	
	
}
