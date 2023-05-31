package kodlamaio.northwind.core.dataAccess;

import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.northwind.core.entities.User;

public interface UserDao extends JpaRepository<User, Integer>{
	boolean existsByEmail(String email);
	User findByEmail(String email);
	boolean existsByEmailAndPassword(String email , String password );
}
