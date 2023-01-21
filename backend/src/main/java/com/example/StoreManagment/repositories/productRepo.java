package com.example.StoreManagment.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.StoreManagment.model.Product;

public interface productRepo extends MongoRepository<Product,String> {

	List<Product> findAllByCategory(String category);

	Product deleteByName(String name);

	boolean existsByName(String name);

	Product findByName(String name);

	

}
