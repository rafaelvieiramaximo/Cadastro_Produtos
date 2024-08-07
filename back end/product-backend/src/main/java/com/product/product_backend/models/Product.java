package com.product.product_backend.models;

public class Product {
   
    //Atributos de product
    private int id;
    private String name;
    private String description;
    private double price;
    private Number quantidade;
    private String responsable;

    //Método Construtores
    public Product(int id, String name, String description, double price, Number quantidade, String responsable){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantidade = quantidade;
        this.responsable = responsable;
    }

    //Métodos de product
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public Number getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(Number quantidade) {
        this.quantidade = quantidade;
    }
    public String getResponsable() {
        return responsable;
    }
    public void setResponsable(String responsable) {
        this.responsable = responsable;
    }
}
