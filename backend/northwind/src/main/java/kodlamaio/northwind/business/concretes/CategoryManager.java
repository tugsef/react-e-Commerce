package kodlamaio.northwind.business.concretes;

import java.util.List;

import org.springframework.stereotype.Service;

import kodlamaio.northwind.business.abstracts.CategoryService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.SuccessDataResult;
import kodlamaio.northwind.dataAccess.abstracts.CategoryDao;
import kodlamaio.northwind.entities.concretes.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
@Service
@Data
@AllArgsConstructor
public class CategoryManager implements CategoryService {

	private CategoryDao categoryDao;

	
	@Override
	public DataResult<List<Category>> getAll() {
		
		return new SuccessDataResult<List<Category>>(this.categoryDao.findAll(),"Data Lİstelendi");
	}

	

}
