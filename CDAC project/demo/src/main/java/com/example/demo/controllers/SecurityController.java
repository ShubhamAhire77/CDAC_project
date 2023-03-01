package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.SecurityQuestion;
import com.example.demo.services.SecurityService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class SecurityController {
	
	@Autowired
	SecurityService sservice;
	
	@GetMapping("/getquestions")
	public List<SecurityQuestion> getAll()
	{
		System.out.println("in the controller");
		return sservice.getAll();
	}

	

}
