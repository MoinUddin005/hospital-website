import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const Resignation  = () => {
  const { handleRegistration , handleEmailchange } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
  const onSubmit = data => {
    const {name,email, password, reEnterPass} = data;

    console.log(email, password, reEnterPass)
    if(password === reEnterPass){
      if(password.length >= 6){
        
      }
    }
  
};
    return (
      <div className="mx-lg-5">
        <h3 className="text-primary">Plase Registration</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row mb-3 mt-5">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input  {...register("email")} type="email" class="form-control" id="inputEmail3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                  <div class="col-sm-10">
                    <input type="password" {...register("password")} class="form-control" id="inputPassword3"/>
                  </div>
                </div>
                
                <div class="row mb-3">
                  <div class="col-sm-10 offset-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                      <label class="form-check-label" for="gridCheck1">
                        Example checkbox
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary mb-lg-5">Sign in</button>
           </form>
      </div>
    
    );
  
}

export default Resignation;