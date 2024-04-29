package com.crud.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.crud.demo.Model.Crud;

@Repository
public interface CrudRepository extends JpaRepository<Crud, Integer> {
	
	
    @Query(value = "select * from main where name = :name", nativeQuery = true)
    Crud show(@Param ("name") String name);
	
}
