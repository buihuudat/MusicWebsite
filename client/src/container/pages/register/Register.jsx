import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login" style={{backgroundImage:`url(https://w.wallha.com/ws/13/MDUfv4Lj.png)`}}>
      <div className="login__wrap" >
        <form className="login__form">
        <h1>Join With US!</h1>
          <div className="login__form__group">
          <i class="far fa-envelope"></i>
            <input type="email" className="login__form__input" placeholder="Email"/>
          </div>
          <div className="login__form__group">
            <i class="far fa-user"></i>
            <input type="text" className="login__form__input" placeholder="Username"/>
          </div>
          <div className="login__form__group">
            <i class="fas fa-lock"></i>
            <input type="password" className="login__form__input" placeholder="Password"/>
          </div>
          <div className="form__buttons">
            <Link to="/login"><button className="login__button">Login</button></Link>
            <button className="register__button">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
