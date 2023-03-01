package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Counsellor;

@Repository
public interface CounsellorRepository extends JpaRepository<Counsellor, Integer> {
	

}
