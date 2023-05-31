package kodlamaio.northwind.api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.northwind.business.abstracts.CategoryService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.entities.concretes.Category;
import lombok.AllArgsConstructor;
import lombok.Data;

@RestController
@RequestMapping("api/category")
@Data
@AllArgsConstructor
@CrossOrigin
public class CatagoriesController {
	private CategoryService  categoryService;
	
	@GetMapping("/getAll")
	public DataResult<List<Category>> getAll(){
		return this.categoryService.getAll();
	}
}
