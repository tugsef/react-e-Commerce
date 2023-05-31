package kodlamaio.northwind.core.utilities.results;

//Birden fazla veri tipiyle çalışacak isek Jenerik olarak durumu ele alırız.

public class DataResult<T> extends Result {

	private T data;
	public DataResult(T data, boolean success, String message) {
		super(success, message);
		this.data = data;
	}
	
	public DataResult(T data, boolean success) {
		super(success);  //message göndermek istemiyoruz result a sucessli constructor devreye girer
		this.data = data;
	}
	
	public T getData() {
		return this.data;
	}

	
	
	

}
