package com.pedro.bibliotecaApi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController() //Controller
@RequestMapping("/")
public class HomeController  {

    @GetMapping("")
    public String home() {
        return "<h1>Home</h1>";
    }
}
