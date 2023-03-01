package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository loginrepo;
	
	public Login getLogin(String email_id,String password)
	{
		Login r;
		Optional<Login> a1=loginrepo.getLogin(email_id, password);
		try
		{
			r=a1.get();
		}
		catch(Exception e)
		{
			r=null;
			
		}
		return r;
	}
	
	public Login save(Login l)
	{
		return loginrepo.save(l);
	}
}
