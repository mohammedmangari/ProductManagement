package com.example.StoreManagment.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.StoreManagment.model.Product;
import com.example.StoreManagment.repositories.productRepo;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class storeController {

	@Autowired
	productRepo repo;
	
	  // Desplay product
	
		@GetMapping("/Product")
		@CrossOrigin
		public List<Product> displayProducts(){
			return repo.findAll();
		}
		
		@GetMapping("/Product/{text}")
		@CrossOrigin
		public List<Product> displayProductByCategory(@PathVariable("text") String  category ){
			return repo.findAllByCategory(category);
		}
		
		@GetMapping("/Product/{text}/{name}")
		@CrossOrigin
		public Product displayProductByName(@PathVariable("text") String  category, @PathVariable("name") String  name){
			return repo.findByName(name);
		}
		
		   // les methode de l'affichage  ils sont marches et testes
		
	  // Add product
	
		@PostMapping("/Product")
		@CrossOrigin
		public Product addProduct(@RequestBody Product product) {
			if(repo.existsByName(product.getName())) {
				return null;
			}
		
			System.out.println("ok1");
			return repo.save(product);
		}
		
      // update product	
		
		@PutMapping("/Product")
		@CrossOrigin
		public Product updateProduct(@RequestBody Product product) {
			if(repo.existsByName(product.getName())) {
				return null;
			}
			return repo.save(product);
		}
		
	 // delete product 
	
		@DeleteMapping("/Product/{text}")
		@CrossOrigin
		
		public Product deleteProduct(@PathVariable("text") String name){
			
			return repo.deleteByName(name);
		}
		
		
}
