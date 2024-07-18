package com.product.product_backend.resourses;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.product.product_backend.models.Product;

@RestController
public class ProductController {
    
    @GetMapping ("product")
    public Product getProduct(){

        Product p = new Product();

        p.setId(1);
        p.setName("Coca cola");
        p.setPrice(10.50);
        p.setQuantidade(1);
        p.setDescription("Geladinha");
        p.setResponsable("Marquinhos");

        return p;
    }

}
