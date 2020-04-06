package com.renault.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServlet;

@CrossOrigin
@RestController
@RequestMapping("/language")
public class LanguageController extends HttpServlet {

    @Getmapping
    public List<Language> getLanguage(){
        List<String> languages = new ArraysList)^^
        for (Language language : Language.values()){
            languages.add(language.getName())
        }
    }

}
