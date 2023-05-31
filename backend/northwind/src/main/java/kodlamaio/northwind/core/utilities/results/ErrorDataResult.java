package kodlamaio.northwind.core.utilities.results;


// işlem başarısız 
public class ErrorDataResult<T> extends DataResult<T> {

	// boş bir şablonda verebilirsiniz frontend patlamasın diye
	// amaca yönelik data de gönderebilirsiniz
	public ErrorDataResult(T data, String message) {
		super(data, false ,message);
	}
	
	public ErrorDataResult(T data) {
		super(data,false);
	}
	
	public ErrorDataResult(String message) {
		super(null, false ,message);
	}
	
	public ErrorDataResult() {
		super(null, false);
	}

}






