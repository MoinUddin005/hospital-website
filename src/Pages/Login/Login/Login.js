import './Login.css'
import { useForm } from "react-hook-form";
import React from 'react';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import { Link, useHistory , useLocation } from 'react-router-dom';


const Login = () => {
    const { signInUsingGoogle , handleRegistration } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const Redirect_uri = location.state?.from || "/home";
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(Redirect_uri);
        })
    }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    
    return (
     <div className="login-from">
                <div>
                    <br />
                    <h2><b>Login</b></h2>
                    <br />

                    <form onSubmit={handleSubmit(onSubmit)}>

                            <input type="email" className="form-control " {...register("email")} id="floatingInput"  placeholder="Your Email"/>
                            <br />
                            <input type="password" className="form-control " name="" id="" placeholder="Your password" {...register("password")} />
                            <br />
                            
                        <input className="btn btn-secondary" type="submit" value="submit"/>

                    </form>
                    <hr />
                    <p>Resignation now ? <Link to="/resignation">create Account</Link></p>
                    <div>-----------or-------------</div>
                    <br />
                    <button type="button" className=" mb-lg-5 btn btn-outline-success"
                    onClick={handleGoogleLogin}
                    > <i className="fab fa-google"></i> Googe sing in</button>
                </div>
       </div>
 
    );
};

export default Login;


