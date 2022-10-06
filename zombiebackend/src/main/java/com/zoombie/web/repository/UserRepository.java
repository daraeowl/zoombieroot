package com.zoombie.web.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zoombie.web.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
   
}

    

