package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.yjh.portfolio")
public class PortfolioBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioBackApplication.class, args);
	}

}
