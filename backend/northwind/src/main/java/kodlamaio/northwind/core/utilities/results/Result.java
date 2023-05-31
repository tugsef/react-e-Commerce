package kodlamaio.northwind.core.utilities.results;

// Resul=sonuc

public class Result {
   private boolean success; //islem basarılı mı true/false
   private String message; // islem durumuna göre döneceğin mesaj
   
   
   //Sadece islem durumunu dçödürmek isteye bilirim
   public Result(boolean success) {
	   this.success = success;
   }
   
   
   //islem durumu ve mesaj bilgisini göstermek isteyebilirim
   public Result(boolean success,String message) {
	   this(success); //tek parametreli constructar çağırır varsa message döndürür.
	   this.message = message;
   }
   
   public boolean isSuccess() {
	   return this.success;
   }
   
   public String getMessage() {
	   return this.message;
   }
}
