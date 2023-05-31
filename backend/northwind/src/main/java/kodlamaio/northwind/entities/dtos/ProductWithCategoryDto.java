package kodlamaio.northwind.entities.dtos;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class ProductWithCategoryDto {
	private int id;
	
	private String productName;
	private double unitPrice;
	private short unitsInStock;
	private String quantityPerUnit;
	private int categoryId;
	private String categoryName;
	
}
