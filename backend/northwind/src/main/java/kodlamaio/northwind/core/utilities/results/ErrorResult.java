package kodlamaio.northwind.core.utilities.results;

// result false olma durumu
public class ErrorResult extends Result{
	
	// false ise sadece sucess dön
	public ErrorResult() {
		super(false);
	} 
	
	//sucess false message geç result conructorda success ve message çalıştırır
	public ErrorResult(String message) {
		super(false,message);
	} 
}