package com.product.product_backend.resourses;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.product.product_backend.models.Product;

import jakarta.annotation.PostConstruct;

@RestController
public class ProductController {
    
    private List<Product> products = new ArrayList<>();

    @PostConstruct
    public void init(){

        Product p1 = new Product();

        p1.setId(1);
        p1.setName("Coca cola");
        p1.setPrice(10.50);
        p1.setQuantidade(1);
        p1.setDescription("Geladinha");
        p1.setResponsable("Marquinhos");

        Product p2 = new Product();

        p2.setId(2);
        p2.setName("Pepsi");
        p2.setPrice(6.50);
        p2.setQuantidade(1);
        p2.setDescription("Geladinha");
        p2.setResponsable("Carlinhos");

        products.add(p1);
        products.add(p2);

    }

    @GetMapping ("products/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable int id){

        if (id <= products.size()) {
            return ResponseEntity.ok(products.get(id-1));

        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Product not Found in BD");
        }
    }
    
    @GetMapping ("products")
    public List<Product> getProducts(){
        return products;
    }

}
