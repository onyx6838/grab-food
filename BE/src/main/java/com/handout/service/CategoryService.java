package com.handout.service;

import com.handout.entity.Category;
import com.handout.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository repository;

    @Override
    public Page<Category> getAllCategories(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Category getCategoryByID(int id) {
        return repository.getById(id);
    }

    @Override
    public Category getCategoryByName(String name) {
        return repository.findCategoryByName(name);
    }
}
