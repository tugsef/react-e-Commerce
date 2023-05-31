package kodlamaio.northwind.core.utilities.results;

//result true olma durumu
public class SuccessResult extends Result{
	//result true dönerse sadece success döndür
		public SuccessResult() {
			super(true);
		} 
		
		public SuccessResult(String message) {
			super(true,message);
		} 
}
