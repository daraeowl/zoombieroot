package com.zoombie.web.service;
import java.util.List;

import com.zoombie.web.model.User;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    
    
}
