package kodlamaio.northwind.core.utilities.results;


//işlem başarılı olduğu durum zaman 
public class SuccessDataResult<T> extends DataResult<T> {

	//sucess bilgisini girmemize göre dataResult true geçiyıruz. data ve mesaj varsa
	public SuccessDataResult(T data, String message) {
		super(data, true ,message);
	}
	
	//sadece data varsa ve true ise
	public SuccessDataResult(T data) {
		super(data,true);
	}
	
	//data null ise hata döndürmemek için ve message
	public SuccessDataResult(String message) {
		super(null, true ,message);
	}
	
	//data null ama hata döndürme data göndermek isteyebilirsiniz
	public SuccessDataResult() {
		super(null, true);
	}

}
