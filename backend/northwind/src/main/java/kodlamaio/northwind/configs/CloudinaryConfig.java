package kodlamaio.northwind.configs;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;

@Configuration
public class CloudinaryConfig {
	
	@Bean
	public Cloudinary  cloudinaryAccountSet() {
		Map<String,String> config = new HashMap<String,String>();
		config.put("cloud_name", "dvfdwlbuy");
		config.put("api_key", "259216513414478");
		config.put("api_secret", "TL2WY5c9sLxWLHs6cJbC43uMcoE");
		Cloudinary cloudinary = new Cloudinary(config);
		
		return cloudinary;
	}
	
	
}
