import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='login-register-container'>
            <form className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>

                <div className="form-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                </div>

                <div className="form-group mt-2">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                </div>
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <Link to='/register' className='mt-2' style={{display:"block",textDecoration:'none',color:'grey'}}>Register</Link>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        </div>
    )
};
export default Login;