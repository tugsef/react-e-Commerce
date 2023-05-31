package kodlamaio.northwind.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import kodlamaio.northwind.entities.concretes.Product;
import kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;

public interface ProductDao extends JpaRepository<Product, Integer> {

	Product getById(int productId);

	Product getByProductName(String productName); // product alanında name göre getirir

	Product getByProductNameAndCategory_CategoryId(String productName, int categoryId);

	List<Product> getByProductNameOrCategory_CategoryId(String productName, int categoryId);

	List<Product> getByCategoryIn(List<Integer> categories); // bana integer türünde katogorileri yolla

	List<Product> getByProductNameContains(String productName); // isme göre arama

	List<Product> getByProductNameStartsWith(String productName);

	@Query("From Product where productName=:productName and category.categoryId=:categoryId")
	List<Product> getByNameAndCategory(String productName, int categoryId);

	@Query("From Product where category.categoryId=:categoryId")
	List<Product> findCategory(int categoryId);

	@Query("Select new kodlamaio.northwind.entities.dtos.ProductWithCategoryDto"
			+ "(p.id, p.productName, p.unitPrice,p.unitsInStock, p.quantityPerUnit,c.categoryId, c.categoryName) "
			+ "From Category c Inner Join c.products p")
	List<ProductWithCategoryDto> getProductWithCategoryDetails();

	// select p.productId,p.productName, c.categoryName from Category c inner join
	// Product p
	// on c.categoryId = p.categoryId

}
