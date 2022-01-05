import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  return (
    <div className="login" style={{backgroundImage:`url(https://w.wallha.com/ws/13/MDUfv4Lj.png)`}}>
      <div className="login__wrap" >
        <form className="login__form">
        <h1>WELCOME</h1>
          <div className="login__form__group">
            <i class="far fa-user"></i>
            <input type="text" className="login__form__input" placeholder="Username"/>
          </div>
          <div className="login__form__group">
            <i class="fas fa-lock"></i>
            <input type="password" className="login__form__input" placeholder="Password"/>
          </div>
          <span>Do you have an account ? 
            <Link to="/register"> Register now</Link>
          </span>
          <button className="login__button">Login</button>
          <div className="login__with">
            <a href="https://www.facebook.com/buihuudat.2610/" title="Google"><i class="fab fa-google"></i></a>
            <a href="https://www.facebook.com/buihuudat.2610/" title="Facebook"><i class="fab fa-facebook"></i></a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
