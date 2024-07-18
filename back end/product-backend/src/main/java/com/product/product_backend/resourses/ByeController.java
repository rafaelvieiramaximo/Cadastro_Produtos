package com.product.product_backend.resourses;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ByeController {
    
    @GetMapping ("bye")
    public String getbye(){
        return "Flw flw";
    }
}
