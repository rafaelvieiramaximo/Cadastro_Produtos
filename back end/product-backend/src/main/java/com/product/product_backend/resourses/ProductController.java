package com.product.product_backend.resourses;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    
    @GetMapping ("product")
    public String getProduct(){

        return ("Sou um produto");
    }

}
