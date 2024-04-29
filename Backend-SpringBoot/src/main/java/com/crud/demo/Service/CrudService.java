package com.crud.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.demo.Model.Crud;
import com.crud.demo.Repo.CrudRepository;

@Service
public class CrudService {

    @Autowired
    public CrudRepository crudRepository;

    public Crud postVal(Crud crud){
        return crudRepository.save(crud);
    }

    public List<Crud> postVals(List<Crud> cruds){
        return crudRepository.saveAll(cruds);
    }

    public Crud getVal(String name){
        return crudRepository.show(name);
    }

    public List<Crud> getVals(){
        return crudRepository.findAll();
    }


    public Crud updateVal(Crud cru){
        Crud change = crudRepository.findById(cru.getId()).orElse(null);
        change.setName(cru.getName());
        change.setAge(cru.getAge());
        change.setNativee(cru.getNativee());
        return crudRepository.save(change);
    }

    public String delVal(int id){
        crudRepository.deleteById(id);

        return "Deleted id is " + id;
    }
    public String delVals(){
        crudRepository.deleteAll();

        return "Nothing is Here !" ;
    }
}



